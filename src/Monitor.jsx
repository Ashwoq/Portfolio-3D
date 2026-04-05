import React, { useState, useEffect } from "react";
import "./Monitor.css";

const Monitor = ({
  performanceFactor = 1,
  fps = 0,
  dpr = 1,
  useBloom = false,
  isTouchDevice = false,
  antialias = false,
  gpuInfo = {},
}) => {
  const [expanded, setExpanded] = useState(false);

  const maxDpr =
    typeof window !== "undefined" && window.devicePixelRatio
      ? window.devicePixelRatio
      : 1;

  const clarityPercentage = Math.round(Math.min(dpr / maxDpr, 1) * 100);
  const clarityColor =
    clarityPercentage >= 100
      ? "green"
      : clarityPercentage >= 70
      ? "yellow"
      : "red";

  const computeOverallScore = ({
    fps,
    performanceFactor,
    dpr,
    useBloom,
    antialias,
  }) => {
    let score = 0;

    // Normalize and weigh each component (you can tweak these weights)
    score += Math.min(fps / 70, 1) * 0.2;
    score += performanceFactor * 0.4;
    score += Math.min(dpr / maxDpr, 1) * 0.3;
    score += (useBloom ? 1 : 0) * 0.05;
    score += (antialias ? 1 : 0) * 0.05;

    return Math.round(score * 100); // 0–100 scale
  };

  const overall = computeOverallScore({
    fps,
    performanceFactor,
    dpr,
    useBloom,
    antialias,
  });

  let fillColor = "#22c55e";

  if (overall < 50) {
    fillColor = "#f00f0f"; // red
  } else if (overall < 80) {
    fillColor = "#facc15"; // yellow
  } else {
    fillColor = "#22c55e"; // green
  }

  let textColor = "#22c55e";

  if (overall < 50) {
    textColor = "#fff"; // red
  } else if (overall < 80) {
    textColor = "#8c5202"; // yellow
  } else {
    textColor = "#fff"; // green
  }

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div
      className={`pfBoxWrapper ${expanded ? "expanded" : ""}`}
      style={{ maxWidth: expanded ? "100%" : "90px" }}
      onClick={toggleExpand}
      title="Expand for more details"
    >
      <div className="pfBox">
        <div
          className="pfFill"
          style={{
            transform: `scaleX(${Math.min(overall, 100) / 100})`,
            backgroundColor: fillColor,
          }}
        />
        <span
          className="pfText"
          style={{
            color: textColor,
          }}
        >
          {overall}%
        </span>
      </div>
      <span className="pfLabel">
        Smooth Meter
        <span className={`arrow ${expanded ? "rotate" : ""}`}>▾</span>
      </span>

      <div className={`pfDetailsWrapper ${expanded ? "open" : ""}`}>
        <div className="pfDetails">
          <div title="FPS">
            <strong>Speed (FPS):</strong>
            <span
              className={`badge ${
                fps >= 60 ? "green" : fps >= 40 ? "yellow" : "red"
              }`}
            >
              {fps}
            </span>
          </div>

          <div title="Performance Score">
            <strong>Fluidity:</strong>
            <span
              className={`badge ${
                performanceFactor >= 0.9
                  ? "green"
                  : performanceFactor >= 0.6
                  ? "yellow"
                  : "red"
              }`}
            >
              {Math.round(performanceFactor * 100)}%
            </span>
          </div>

          <div
            title={`DPR is capped at 2x to balance performance and visual sharpness.`}
          >
            <strong>Clarity:</strong>
            <span className={`badge ${clarityColor}`}>
              {/* {dpr}-  */}
              {clarityPercentage}%
            </span>
          </div>

          <div title="Bloom">
            <strong>Lighting FX:</strong>
            <span className={`badge ${useBloom ? "green" : "red"}`}>
              {useBloom ? "On" : "Off"}
            </span>
          </div>

          <div title="Antialiasing">
            <strong>Edge Smoothing:</strong>
            <span className={`badge ${antialias ? "green" : "red"}`}>
              {antialias ? "On" : "Off"}
            </span>
          </div>

          <div className="pfSystemInfoGroup">
            <div title="Touch Device">
              <strong>Touch Device:</strong>
              <span className={`badge blue`}>
                {isTouchDevice ? "Yes" : "No"}
              </span>
            </div>
            <div title="Detected GPU Name">
              <strong>GPU:</strong>{" "}
              <span className="badge blue">
                {/* {gpuInfo.gpuTest} */}
                {gpuInfo.gpuTest?.length > 30
                  ? `${gpuInfo.gpuTest.slice(0, 30)}...`
                  : gpuInfo.gpuTest}
              </span>
            </div>
            <div title="Hardware Tier">
              <strong>Tier:</strong>{" "}
              <span className="badge blue">
                {gpuInfo.gpuTier === 3
                  ? "Top Tier"
                  : gpuInfo.gpuTier === 2
                  ? "Mid Tier"
                  : "Low Tier"}
              </span>
            </div>
            <div title="Detection Type">
              <strong>Type:</strong>{" "}
              <span className="badge blue">{gpuInfo.gpuType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
