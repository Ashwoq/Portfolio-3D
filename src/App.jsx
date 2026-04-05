import { Canvas, useThree } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useControls } from "leva";
import Overlay from "./Overlay";

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  return (
    <>
      <Canvas
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        linear
        // camera={{
        //   fov: 45,
        //   near: 0.1,
        //   far: 200,
        //   position: [-2, 25, -40],
        // }}
      >
        <Experience scroll={scroll} />
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}

export default App;
