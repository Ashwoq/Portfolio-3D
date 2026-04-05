import React from "react";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";

const Experience = ({ scroll, justReset, lightRef, bloomRef }) => {
  // console.log(scroll);
  return (
    <>
      <ambientLight intensity={3.15} ref={lightRef} color={0xffffff} />
      <Model scroll={scroll} justReset={justReset} bloomRef={bloomRef} />
      {/* <Environment preset="city" /> */}
    </>
  );
};

export default Experience;
