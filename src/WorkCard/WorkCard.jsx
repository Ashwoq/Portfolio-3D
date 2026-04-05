import React, { useEffect, useState } from "react";
import "./WorkCard.css";

const WorkCard = ({ show, data }) => {
  const [animationClass, setAnimationClass] = useState("");
  // const [cardContainerStyle, setCardContainerStyle] = useState("");

  const [overlayerExit, setOverlayerExit] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  const [lastData, setLastData] = useState(null);

  useEffect(() => {
    if (show) {
      setLastData(data);
      setShouldRender(true);
      setOverlayerExit(
        `visible ${data?.overlayerInAnimation || "overlayerFadeInFromLeft"}`
      );
      setAnimationClass(`visible ${data?.animation || "bounce-in"}`);
    } else if (animationClass.includes("visible")) {
      // setCardContainerStyle(lastData?.style || "");
      setOverlayerExit(
        lastData?.overlayerExitAnimation || "overlayerFadeOutToLeftExit"
      );
      setAnimationClass(lastData?.exitAnimation || "exit");
      const timeout = setTimeout(() => {
        setShouldRender(false); // Delay unmount
        setAnimationClass("");
      }, 500); // Match your CSS timing
      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!shouldRender || !lastData) return null;

  return (
    <>
      <div
        className={`overlayer ${overlayerExit}`}
        style={lastData?.overlayerStyle || {}}
      ></div>
      <div
        id={lastData?.title || ""}
        className={`card-container ${animationClass}`}
        style={lastData?.style || {}}
      >
        <div className="card-top">
          <div
            className="card-border"
            style={{ width: lastData.cardBorderWidth || "110px" }}
          ></div>
          <span className="card-title">
            <div className="shimmer card-title-padding">
              <a
                href={lastData?.titleLink}
                title={lastData?.linkTitle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-title-content">
                  {lastData.title}
                  <img src={lastData.logo} alt="Logo" className="card-logo" />
                </div>
              </a>
            </div>
          </span>

          <span className="card-links">
            <div className="shimmer card-links-flex">
              {lastData.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                >
                  <img src={link.logo} alt={link.title} className="card-logo" />
                </a>
              ))}
            </div>
          </span>

          <div className="card-description">
            {lastData.description.map((para, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>

        <div className="card-bottom">
          <div className="card-row">
            {lastData.tech.map((item, idx) => (
              <div key={idx} className="card-item">
                <div className="card-big">{item.title}</div>
                <div className="card-small">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
