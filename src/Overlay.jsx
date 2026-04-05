import { forwardRef, useEffect, useState } from "react";
import WorkCard from "./WorkCard/WorkCard";
import emailLogo from "./assets/svg/email.svg";
import CARD_CONTENT from "./WorkCard/WorkCardData";
import mouserLogo from "./assets/image/mouser.png";
import toucherLogo from "./assets/image/toucher.png";
import linkedinLogo from "./assets/svg/linkedin.svg";
import twitterLogo from "./assets/svg/twitter.svg";
import fullScreenLogo from "./assets/svg/fullScreen.svg";
import normalScreenLogo from "./assets/svg/normalScreen.svg";
import Monitor from "./Monitor";

const showCustomAlert = (message = "⚠️ Alert!") => {
  if (document.getElementById("custom-alert-overlay")) return;

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "custom-alert-overlay";
  overlay.innerHTML = `
  <div class="custom-alert-box">
    <div class="custom-alert-boxer">
      <p class="custom-alert-message">
        ${message}
      </p>
      <button class="custom-alert-btn">Okay 😅</button>
    </div>
  </div>
`;

  document.body.appendChild(overlay);

  // // Auto-dismiss after 5 seconds (optional)
  // const autoDismissTimeout = setTimeout(() => {
  //   overlay.style.animation = "overlayFadeOut 0.6s ease forwards";
  //   dialogBox.style.animation = "overlayFadeOut 0.6s ease forwards";
  //   setTimeout(() => {
  //     overlay.remove();
  //   }, 600);
  // }, 5000);

  const button = overlay.querySelector("button");
  const dialogBox = overlay.querySelector("div > div");

  button.onclick = () => {
    // clearTimeout(autoDismissTimeout);
    overlay.style.animation = "overlayFadeOut 0.6s ease forwards";
    dialogBox.style.animation = "overlayFadeOut 0.6s ease forwards";
    setTimeout(() => {
      overlay.remove();
    }, 600);
  };
};

const Overlay = forwardRef(
  (
    {
      caption,
      justReset,
      scroll,
      performanceFactor,
      fps,
      dpr,
      useBloom,
      isTouchDevice,
      antialias,
      gpuInfo,
    },
    ref
  ) => {
    const [scrollValue, setScrollValue] = useState(0);
    // const [isTouchDevice, setIsTouchDevice] = useState(false);

    // useEffect(() => {
    //   const checkTouch = () => {
    //     setIsTouchDevice(
    //       "ontouchstart" in window || navigator.maxTouchPoints > 0
    //     );
    //   };
    //   checkTouch();
    // }, []);

    const handleScroll = (e) => {
      const el = e.target;
      const maxScroll = el.scrollHeight - window.innerHeight;
      const rawScroll = el.scrollTop / maxScroll;

      if (rawScroll >= 0.999) {
        requestAnimationFrame(() => {
          el.scrollTop = 0;
          scroll.current = 0;
          justReset.current = true;
          setScrollValue(0);
        });
        return;
      }

      scroll.current = rawScroll;
      setScrollValue(rawScroll);
      // caption.current.innerText = scroll.current.toFixed(2);
    };

    // Card trigger range
    let cardData = null;
    let show = false;
    let t = 0;

    for (const entry of CARD_CONTENT) {
      const [start, end] = entry.range;
      if (scrollValue >= start && scrollValue <= end) {
        t = (scrollValue - start) / (end - start);
        show = true;
        cardData = entry.data;
        break;
      }
    }

    // spl btn start
    const [isFullScreen, setIsFullScreen] = useState(true);

    const toggle = () => {
      const el = document.documentElement;

      const isDomFullscreen = !!document.fullscreenElement;
      const isF11Fullscreen =
        Math.abs(window.innerHeight - screen.height) < 2 ||
        Math.abs(window.innerHeight - screen.availHeight) < 2;

      if (isF11Fullscreen && !isDomFullscreen) {
        showCustomAlert(
          `Looks like you went fullscreen the old-school way (F11) 😏 My button feels betrayed... \nPress F11 again to return to normal.`
        );
        return;
      }

      if (!isDomFullscreen) {
        el.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    };

    useEffect(() => {
      const updateFullscreenState = () => {
        const isDomFullscreen = !!document.fullscreenElement;
        const isF11Fullscreen =
          Math.abs(window.innerHeight - screen.height) < 2 ||
          Math.abs(window.innerHeight - screen.availHeight) < 2;

        setIsFullScreen(isDomFullscreen || isF11Fullscreen);
      };

      // Track DOM fullscreen changes and F11 (via resize)
      document.addEventListener("fullscreenchange", updateFullscreenState);
      window.addEventListener("resize", updateFullscreenState);

      updateFullscreenState(); // Initial check

      return () => {
        document.removeEventListener("fullscreenchange", updateFullscreenState);
        window.removeEventListener("resize", updateFullscreenState);
      };
    }, []);

    return (
      <div
        ref={ref}
        // onScroll={(e) => {
        //   const el = e.target;
        //   const maxScroll = el.scrollHeight - window.innerHeight;
        //   const rawScroll = el.scrollTop / maxScroll;

        //   if (rawScroll >= 0.999) {
        //     requestAnimationFrame(() => {
        //       el.scrollTop = 0;
        //       scroll.current = 0;
        //       justReset.current = true;
        //     });
        //     return;
        //   }

        //   scroll.current = rawScroll;
        //   caption.current.innerText = scroll.current.toFixed(2);
        // }}
        onScroll={handleScroll}
        className="scroll"
      >
        <Monitor
          performanceFactor={performanceFactor}
          dpr={dpr}
          useBloom={useBloom}
          fps={fps}
          isTouchDevice={isTouchDevice}
          antialias={antialias}
          gpuInfo={gpuInfo}
        />

        <div className="indicatorBox" title="Just scroll, dude">
          <img
            className={isTouchDevice ? "toucher" : "mouser"}
            src={isTouchDevice ? toucherLogo : mouserLogo}
            alt="just scroll dude"
          />
        </div>
        {/* Card Overlay */}
        <WorkCard show={show} progress={t} data={cardData} />
        <div style={{ height: "2000vh" }}>
          <div className="dot resume"></div>
        </div>
        <div className="bottomBox">
          <button
            className="exx"
            onClick={toggle}
            title={`${
              isFullScreen ? "Exit Full Screen" : "Activate Full Screen"
            }`}
          >
            <img
              src={normalScreenLogo}
              className={`iconeron ${!isFullScreen ? "" : "isfullScreen"}`}
            />
            <img
              src={fullScreenLogo}
              className={`iconeron ${!isFullScreen ? "isfullScreen" : ""}`}
            />
          </button>

          <a
            className="socialBox"
            href="https://linkedin.com/in/ashwoq-dedath-s/"
            target="_blank"
            rel="noopener noreferrer"
            title="Let’s connect on LinkedIn"
          >
            <img src={linkedinLogo} className="linkedinIcon" alt="linkedin" />
          </a>
          <a
            className="socialBox"
            href="https://x.com/Ashwoq_s"
            target="_blank"
            rel="noopener noreferrer"
            title="Catch me on X (Twitter)"
          >
            <img src={twitterLogo} className="instaIcon" alt="X (Twitter)" />
          </a>
          {/* <a
            className="socialBox"
            href="https://www.instagram.com/ashwoq_s_/profilecard/?igsh=ZHJucTFwNXdzYjF4"
            target="_blank"
            rel="noopener noreferrer"
            title="Catch me on Insta"
          >
            <img src={instagramLogo} className="instaIcon" alt="instagram" />
          </a> */}
          <a
            className="socialBox"
            href="mailto:ashwoqdedath.s@gmail.com"
            target="_blank"
            title="Shoot me an email"
            rel="noopener noreferrer"
          >
            <img src={emailLogo} className="emailIcon" alt="email" />
          </a>

          <div className="batteryBox" title="You Scroll, It Charges. Science.">
            <div className="water-wave-top"></div>
            <div className="water-round-container">
              <div
                className="water-wave water-wave1"
                style={{ top: `${100 - scrollValue * 100}%` }}
              />
              <div
                className="water-wave water-wave2"
                style={{ top: `${100 - scrollValue * 100 + 2}%` }}
              />
              <div
                className="water-wave water-wave3"
                style={{ top: `${100 - scrollValue * 100 + 4}%` }}
              />
              <span className="water-percent">
                {(scrollValue * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Overlay;
