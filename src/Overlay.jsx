/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      // if (scroll.current >= 1) {
      //   scroll.current = 0;
      //   // e.target.scrollTop = 0;
      // }
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    <div style={{ height: "200vh" }}>
      <div className="subHeading">
        <h1>Vanakkam !</h1>
        Welcome to my protfolio{" "}
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="subHeading resume">
        <h1>Unfinished One</h1>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="subHeading">
        <h1>1st Prototype</h1>
      </div>
    </div>

    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
));

export default Overlay;
