import {
  EffectComposer,
  Bloom,
  SelectiveBloom,
} from "@react-three/postprocessing";
import Hai from "./Hai";
import * as THREE from "three";
import Overlay from "./Overlay";
import SvgLoader from "./SvgLoader";
import Experience from "./Experience";
import { getGPUTier } from "detect-gpu";
import { Canvas } from "@react-three/fiber";
import ProgressHandler from "./ProgressHandler";
import useAssetPreloader from "./useAssetPreloader";
import { PerformanceMonitor } from "@react-three/drei";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const App = () => {
  useEffect(() => {
    console.log(
      `Hi, thanks for visiting my site! Let me know if you spot any bugs (you probably will 😅).\n` +
        `🛠️ Performance tuning activated — checking every 5 seconds.\n` +
        `(Don't worry, it's not a bug... it's just my code trying its best 🤖💪)`
    );
  }, []);

  const overlay = useRef();
  const caption = useRef();
  const lightRef = useRef();
  const bloomRef = useRef();
  const scroll = useRef(0);
  const justReset = useRef(false);
  const [useBloom, setUseBloom] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [startCanvasRender, setStartCanvasRender] = useState(false);
  const [performanceFactor, setPerformanceFactor] = useState(0);
  const [fps, setFps] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [modelProgress, setModelProgress] = useState(0);
  const assetProgress = useAssetPreloader(startCanvasRender);
  const [realProgress, setRealProgress] = useState(0);
  const [dpr, setDpr] = useState(0);
  const [gpuInfo, setGpuInfo] = useState({
    gpuType: null,
    gpuTest: null,
    gpuTier: null,
  });

  // const [dpr, setDpr] = useState(() => {
  //   const device = window.devicePixelRatio || 1;
  //   const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  //   const safeCap = Math.min(device, 2.5); // Allow high-end mobiles some sharpness

  //   // Start with safe defaults, refine later via performanceFactor
  //   if (isMobile && safeCap > 1.5) {
  //     return 1.5; // Safe start for strong mobiles
  //   }

  //   return Math.min(safeCap, 1.75); // Slight compromise for desktop/laptops
  // });

  useEffect(() => {
    const initGPUDetection = async () => {
      const { tier, type, gpu } = await getGPUTier();

      // console.log(`[GPU Detected]`, gpu, `| Tier:`, tier, `| Type:`, type);
      // alert(`[GPU Detected] ${gpu} | Tier: ${tier} | Type: ${type}`);

      // Save to state
      setGpuInfo({
        gpuType: type,
        gpuTest: gpu,
        gpuTier: tier,
      });

      const maxCap = window.devicePixelRatio || 1;

      // Adjust initial DPR safely based on tier
      const initialDpr =
        tier === 0
          ? 1
          : tier === 1
          ? Math.min(1.5, maxCap)
          : tier === 2
          ? Math.min(2, maxCap)
          : Math.min(2.5, maxCap); // tier 3 (strong)

      if (tier === 3) {
        setUseBloom(true);
      }

      setDpr((prev) => {
        if (prev !== initialDpr) {
          // console.log(
          //   "[Initial DPR from detect-gpu]",
          //   initialDpr,
          //   "-",
          //   window.devicePixelRatio,
          //   "m",
          //   maxCap
          // );
          return initialDpr;
        }
        return prev;
      });
    };

    initGPUDetection();
  }, []);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const diff = realProgress - prev;
        if (diff < 1) return realProgress; // close enough
        return prev + diff * 0.1; // smooth step
      });
    }, 50);

    return () => clearInterval(interval);
  }, [realProgress]);

  // Combine model + static progress 50/50
  useEffect(() => {
    const combined = (assetProgress + modelProgress) / 2;
    setRealProgress(combined);
  }, [assetProgress, modelProgress]);

  const [bloomObjects, setBloomObjects] = useState({
    light: null,
    mesh: null,
  });

  // useEffect(() => {
  //   if (lightRef.current && bloomRef.current) {
  //     setBloomObjects({
  //       light: lightRef.current,
  //       mesh: bloomRef.current,
  //     });
  //   }
  // }, [lightRef.current, bloomRef.current]);

  useEffect(() => {
    if (!lightRef.current || !bloomRef.current) return;

    setBloomObjects((prev) => {
      const same =
        prev.light === lightRef.current && prev.mesh === bloomRef.current;

      return same
        ? prev
        : {
            light: lightRef.current,
            mesh: bloomRef.current,
          };
    });
  }, [lightRef.current, bloomRef.current]);

  function debounce(fn, delay = 5000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const handlePerformanceChange = useCallback((perf = {}) => {
    const { fps = 0, factor = 1 } = perf;

    // console.log("DPR :", dpr);
    // Always update performance factor immediately
    setFps(fps);
    setPerformanceFactor(factor);

    // Debounced side effects
    debouncedEffects(perf);
  }, []);

  const debouncedEffects = useMemo(() => {
    return debounce((perf = {}) => {
      const { factor = 1 } = perf;
      const maxCap = window.devicePixelRatio;

      let targetDpr = 1.25;
      let enableBloom = false;
      const now = new Date().toLocaleTimeString();

      if (factor < 0.5) {
        console.log(
          `- [${now}] : 😬 Yikes! Your device is sweating... dialing down the sharpness for survival mode!`
        );

        targetDpr = Math.min(1.25, maxCap);
        enableBloom = false;
      } else if (factor >= 0.5 && factor < 0.8) {
        console.log(
          `- [${now}] : 🥴 Struggling a bit... trimming the pixels so your device can breathe.`
        );

        targetDpr = Math.min(1.75, maxCap);
        enableBloom = false;
      } else if (factor >= 0.8 && factor < 0.9) {
        console.log(
          `- [${now}] : 🙂 Not bad! Let’s sprinkle in some extra clarity, just a touch.`
        );

        targetDpr = Math.min(2, maxCap);
        enableBloom = false;
      } else if (factor >= 0.9) {
        // } else if (factor >= 0.9 && gpuInfo.gpuTier >= 2) {
        console.log(
          `- [${now}] : 🚀 Your device is a beast! Cranking up the sharpness and firing the Lighting FX cannons!`
        );

        targetDpr = Math.min(2.5, maxCap);
        enableBloom = true;
      } else {
        console.log(
          `- [${now}] : 🧯 Unexpected scenario! Applying the emergency fallback settings...`
        );
        targetDpr = Math.min(1.5, maxCap);
        enableBloom = false;
      }

      // console.log(
      //   `↪️ Next performance re-evaluation in 5s (if the device is idle)... \n`,
      //   `[Current DPR : ${targetDpr}] [Max DPR : ${maxCap}] [Lighting FX : ${
      //     enableBloom ? "On" : "Off"
      //   }]`
      // );
      // Apply changes

      setUseBloom((prev) => (prev !== enableBloom ? enableBloom : prev));

      setDpr((prev) => (prev !== targetDpr ? targetDpr : prev));
    }, 5000);
  }, []);

  return (
    <>
      <SvgLoader
        progress={parseFloat(displayProgress.toFixed(2))}
        onSvgComplete={() => {
          // console.log("Initial Loading Completed");
          setStartCanvasRender(true);
        }}
        onFinish={() => {
          setTimeout(() => {
            setShowCanvas(true);
          }, 500);
        }}
      />

      {startCanvasRender && (
        <div className={`main-scene-container ${showCanvas ? "visibler" : ""}`}>
          <Canvas
            dpr={dpr}
            onCreated={({ gl }) => {
              let hasReloaded = false;

              gl.getContext().canvas.addEventListener(
                "webglcontextlost",
                (e) => {
                  e.preventDefault();
                  if (hasReloaded) return;
                  hasReloaded = true;
                  console.warn("WebGL context lost — reloading...");
                  alert(
                    "Oops! Your browser just lost graphics support. We'll try reloading the page to fix it. If the issue continues, please try a different browser or device."
                  );
                  setTimeout(() => window.location.reload(), 500);
                }
              );

              gl.getContext().canvas.addEventListener(
                "webglcontextrestored",
                () => {
                  if (hasReloaded) return;
                  hasReloaded = true;
                  console.info("WebGL context restored");
                  alert(
                    "Graphics system was temporarily lost. Reloading now to recover the experience..."
                  );
                  setTimeout(() => window.location.reload(), 1000);
                }
              );
            }}
            style={{
              background: "#000",
            }}
            eventSource={document.getElementById("root")}
            eventPrefix="client"
            gl={{
              antialias: performanceFactor >= 0.7,
              // antialias: true,
              toneMapping: THREE.NoToneMapping,
              preserveDrawingBuffer: false,
              // failIfMajorPerformanceCaveat: true,
              powerPreference: "high-performance",
            }}
            linear
          >
            <ProgressHandler
              onProgressUpdate={(value) => setModelProgress(value)}
            />

            <PerformanceMonitor
              onDecline={() => {
                setUseBloom(false);
                setDpr(1.5);
                // console.log;
                // ("Performance monitor declined, applying fallback settings.");
              }}
              onChange={({ fps, factor }) => {
                // console.log("FPS:", fps);
                // console.log("Performance factor:", factor);

                handlePerformanceChange({ fps, factor });
              }}
            />
            {/* 2️⃣ Postprocessing goes here */}
            {useBloom && (
              <EffectComposer>
                {bloomObjects.light && bloomObjects.mesh && (
                  <>
                    <Bloom
                      intensity={0.25}
                      kernelSize={1}
                      luminanceThreshold={0.7}
                      luminanceSmoothing={0.02}
                    />
                  </>
                )}
              </EffectComposer>
            )}
            {/* <SelectiveBloom
        lights={[bloomObjects.light]}
        selection={[bloomObjects.mesh]}
        selectionLayer={1}
        intensity={1}
        kernelSize={1}
        luminanceThreshold={0.3}
        luminanceSmoothing={0.02}
      /> */}
            <Experience
              scroll={scroll}
              justReset={justReset}
              lightRef={lightRef}
              bloomRef={bloomRef}
            />
          </Canvas>
          {/* Overlay now appears smoothly only after model is shown */}
          {showCanvas && <Hai />}
          <Overlay
            ref={overlay}
            caption={caption}
            scroll={scroll}
            justReset={justReset}
            //
            performanceFactor={performanceFactor}
            fps={fps}
            dpr={dpr}
            useBloom={useBloom}
            isTouchDevice={isTouchDevice}
            antialias={performanceFactor >= 0.7}
            gpuInfo={gpuInfo}
          />
        </div>
      )}
    </>
  );
};

export default App;
