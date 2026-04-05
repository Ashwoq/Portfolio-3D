import "./Hai.css";
import hey from "/hey.png";
import hai from "/hai.webp";
import React, { useEffect, useState } from "react";

const Hai = ({ onClose }) => {
  const initialDelay = 1500;
  const autoCloseValue = 15000;

  const [visible, setVisible] = useState(false);
  const [fadedIn, setFadedIn] = useState(false);
  const [closing, setClosing] = useState(false);
  const [countdown, setCountdown] = useState(autoCloseValue / 1000);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, initialDelay);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const fadeTimer = setTimeout(() => {
      setFadedIn(true);
    }, 50);

    return () => clearTimeout(fadeTimer);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    // Countdown starts *after* visible
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const closeTimer = setTimeout(() => {
      triggerClose();
    }, autoCloseValue);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(closeTimer);
    };
  }, [visible]);

  const triggerClose = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => onClose?.(), 800); // matches CSS fade-out
  };

  if (!visible) return null;

  return (
    <div
      className={`hai-overlay ${fadedIn ? "hai-fade-in" : ""} ${
        closing ? "hai-fade-out" : ""
      }`}
    >
      <div className="hai-countdown">back in {countdown}s ! </div>
      <img
        src={hai}
        alt="instruction"
        className={`hai-instruction-img ${
          closing ? "hai-img-exit" : "hai-img-enter"
        }`}
      />
      <button className="hai-close-btn shimmer" onClick={triggerClose}>
        Cool, take me back !
      </button>

      {/*  */}
      <img
        src={hey}
        alt="hey"
        className={`hai-hey-img  ${
          closing ? "hai-hey-img-exit" : "hai-hey-img-enter"
        } `}
      />
      {/*  */}
    </div>
  );
};

export default Hai;
