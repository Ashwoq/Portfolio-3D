/* eslint-disable react/no-unknown-property */
import { Model } from "./model.jsx";
import { Environment } from "@react-three/drei";

export default function Experience({ scroll }) {
  console.log(scroll);
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <ambientLight intensity={1.4} color={0xffffff} />
      <Model scroll={scroll} />
      <Environment preset="city" />
    </>
  );
}
