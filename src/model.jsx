/* eslint-disable react/no-unknown-property */

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ scroll, ...props }) {
  const group = useRef();
  const { nodes, animations } = useGLTF("./model/model.glb");
  const { actions } = useAnimations(animations, group);

  console.log(actions);

  //   Texture Start

  const colorsTexture = useTexture("./model/textures/Colors.jpg");
  colorsTexture.flipY = false;
  colorsTexture.encoding = THREE.sRGBEncoding;
  const colorsMaterial = new THREE.MeshStandardMaterial({ map: colorsTexture });

  const cubeTexture = useTexture("./model/textures/Cube.jpg");
  cubeTexture.flipY = false;
  cubeTexture.encoding = THREE.sRGBEncoding;
  const cubeMaterial = new THREE.MeshStandardMaterial({ map: cubeTexture });

  const mjolnirTexture = useTexture("./model/textures/Mjolnir.jpg");
  mjolnirTexture.flipY = false;
  mjolnirTexture.encoding = THREE.sRGBEncoding;
  const mjolnirMaterial = new THREE.MeshStandardMaterial({
    map: mjolnirTexture,
  });

  const othersTexture = useTexture("./model/textures/Others.jpg");
  othersTexture.flipY = false;
  othersTexture.encoding = THREE.sRGBEncoding;
  const othersMaterial = new THREE.MeshStandardMaterial({ map: othersTexture });

  const sofaTexture = useTexture("./model/textures/Sofa.jpg");
  sofaTexture.flipY = false;
  sofaTexture.encoding = THREE.sRGBEncoding;
  const sofaMaterial = new THREE.MeshStandardMaterial({ map: sofaTexture });

  const spTexture = useTexture("./model/textures/SP.jpg");
  spTexture.flipY = false;
  spTexture.encoding = THREE.sRGBEncoding;
  const spMaterial = new THREE.MeshStandardMaterial({ map: spTexture });

  const woodTexture = useTexture("./model/textures/Wood.jpg");
  woodTexture.flipY = false;
  woodTexture.encoding = THREE.sRGBEncoding;
  const woodMaterial = new THREE.MeshStandardMaterial({ map: woodTexture });

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    transparent: true,
    opacity: 0.42,
    map: colorsTexture,
  });

  //   Texture End

  //   Pictures Start
  const amazonTexture = useTexture("./model/pictures/amazon.png");
  amazonTexture.flipY = false;
  amazonTexture.rotation = Math.PI * 2;
  amazonTexture.center.set(0.5, 0.5);

  const amazonMaterial = new THREE.MeshStandardMaterial({
    map: amazonTexture,
    roughness: 1, // Increase roughness to reduce overexposure
    metalness: 0, // Reduce metalness to make it less reflective
    emissive: new THREE.Color(0x000000),
  });

  const bg1Texture = useTexture("./model/pictures/bg1.png");
  bg1Texture.flipY = false;

  bg1Texture.rotation = Math.PI * 2;
  bg1Texture.center.set(0.5, 0.5);
  const bg1Material = new THREE.MeshStandardMaterial({
    map: bg1Texture,
  });

  const ecommerceTexture = useTexture("./model/pictures/ecommerce.png");
  ecommerceTexture.flipY = false;

  ecommerceTexture.rotation = Math.PI * 2;
  ecommerceTexture.center.set(0.5, 0.5);
  const ecommerceMaterial = new THREE.MeshStandardMaterial({
    map: ecommerceTexture,
  });

  const gb2Texture = useTexture("./model/pictures/gb2.png");
  gb2Texture.flipY = false;

  gb2Texture.rotation = Math.PI * 2;
  gb2Texture.center.set(0.5, 0.5);
  const gb2Material = new THREE.MeshStandardMaterial({
    map: gb2Texture,
  });

  const mugavariTexture = useTexture("./model/pictures/mugavari.png");
  mugavariTexture.flipY = false;

  mugavariTexture.rotation = Math.PI * 2;
  mugavariTexture.center.set(0.5, 0.5);
  const mugavariMaterial = new THREE.MeshStandardMaterial({
    map: mugavariTexture,
  });

  const portalTexture = useTexture("./model/pictures/portal.png");
  portalTexture.flipY = false;

  portalTexture.rotation = Math.PI * 2;
  portalTexture.center.set(0.5, 0.5);
  const portalMaterial = new THREE.MeshStandardMaterial({
    map: portalTexture,
  });

  const spaceTexture = useTexture("./model/pictures/space.png");
  spaceTexture.flipY = false;

  spaceTexture.rotation = Math.PI * 2;
  spaceTexture.center.set(0.5, 0.5);
  const spaceMaterial = new THREE.MeshStandardMaterial({
    map: spaceTexture,
  });

  const sriTexture = useTexture("./model/pictures/sri.png");
  sriTexture.flipY = false;

  sriTexture.rotation = Math.PI * 2;
  sriTexture.center.set(0.5, 0.5);
  const sriMaterial = new THREE.MeshStandardMaterial({
    map: sriTexture,
  });

  const stdTexture = useTexture("./model/pictures/std.png");
  stdTexture.flipY = false;

  stdTexture.rotation = Math.PI * 2;
  stdTexture.center.set(0.5, 0.5);
  const stdMaterial = new THREE.MeshStandardMaterial({
    map: stdTexture,
  });

  const contactTexture = useTexture("./model/pictures/contact.png");
  contactTexture.flipY = false;

  contactTexture.rotation = Math.PI * 2;
  contactTexture.center.set(0.5, 0.5);
  const contactMaterial = new THREE.MeshStandardMaterial({
    map: contactTexture,
  });

  const tvTexture = useTexture("./model/pictures/tv.png");
  tvTexture.flipY = false;

  tvTexture.rotation = Math.PI * 2;
  tvTexture.center.set(0.5, 0.5);
  //   tvTexture.rotation = (Math.PI * 3) / 2;
  const tvMaterial = new THREE.MeshStandardMaterial({ map: tvTexture });

  //   Pictures End

  //   Animation Start
  useEffect(() => {
    void (actions["CameraAction.001"].play().paused = true);
    void (actions["Spider-Man No Way Home SuitAction.001"].play().paused =
      true);
    void (actions["Spiderman modelAction.001"].play().paused = true);
    console.log(actions);
  }, [actions]);

  useFrame((state) => {
    const scrollValue = scroll.current;

    const cameraAction = actions["CameraAction.001"];
    const spiderManAction = actions["Spider-Man No Way Home SuitAction.001"];
    const spiderManAction2 = actions["Spiderman modelAction.001"];

    cameraAction.time = THREE.MathUtils.lerp(
      cameraAction.time,
      cameraAction.getClip().duration * scrollValue,
      0.05,
    );

    spiderManAction.time = THREE.MathUtils.lerp(
      spiderManAction.time,
      spiderManAction.getClip().duration * scrollValue,
      0.05,
    );

    spiderManAction2.time = THREE.MathUtils.lerp(
      spiderManAction2.time,
      spiderManAction2.getClip().duration * scrollValue,
      0.05,
    );
  });
  //   Animation End

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sofa"
          // castShadow
          // receiveShadow
          geometry={nodes.Sofa.geometry}
          material={sofaMaterial}
          position={[12.921, -0.168, 0]}
          scale={1.176}
        />
        <mesh
          name="Cube"
          // castShadow
          // receiveShadow
          geometry={nodes.Cube.geometry}
          material={cubeMaterial}
        />
        <mesh
          name="Black"
          // castShadow
          // receiveShadow
          geometry={nodes.Black.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <PerspectiveCamera
          name="Camera"
          makeDefault
          far={800}
          near={0.1}
          // fov={37.299}
          fov={45}
          position={[-28.036, 28.953, 0.975]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="White"
          // castShadow
          // receiveShadow
          geometry={nodes.White.geometry}
          material={colorsMaterial}
          position={[-5.003, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="Glass"
          // castShadow
          // receiveShadow
          geometry={nodes.Glass.geometry}
          material={glassMaterial}
          position={[-5.003, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="Red"
          // castShadow
          // receiveShadow
          geometry={nodes.Red.geometry}
          material={colorsMaterial}
          position={[88.376, 6.809, -107.37]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="Green"
          // castShadow
          // receiveShadow
          geometry={nodes.Green.geometry}
          material={colorsMaterial}
          position={[88.376, 6.809, -107.37]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="Yellow"
          // castShadow
          // receiveShadow
          geometry={nodes.Yellow.geometry}
          material={colorsMaterial}
          position={[88.376, 6.809, -107.37]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="Purple"
          // castShadow
          // receiveShadow
          geometry={nodes.Purple.geometry}
          material={colorsMaterial}
          position={[88.376, 6.809, -107.37]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="Wood"
          // castShadow
          // receiveShadow
          geometry={nodes.Wood.geometry}
          material={woodMaterial}
          position={[62.364, 6.809, -41.729]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="ResumeBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.ResumeBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="ResumeWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.ResumeWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="ResumePicture"
          // castShadow
          // receiveShadow
          geometry={nodes.ResumePicture.geometry}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="ResumeBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.ResumeBlackFrame001.geometry}
          material={nodes.ResumeBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="AmazonPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.AmazonPicture.geometry}
          material={amazonMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="AmazonBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.AmazonBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="AmazonWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.AmazonWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="AmazonBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.AmazonBlackFrame001.geometry}
          material={nodes.AmazonBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="PortalPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.PortalPicture.geometry}
          material={portalMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="PortalBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.PortalBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="PortalWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.PortalWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="PortalBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.PortalBlackFrame001.geometry}
          material={nodes.PortalBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="MugavariPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.MugavariPicture.geometry}
          material={mugavariMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="MugavariBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.MugavariBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="MugavariWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.MugavariWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="MugavariBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.MugavariBlackFrame001.geometry}
          material={nodes.MugavariBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SpacePicture"
          // castShadow
          // receiveShadow
          geometry={nodes.SpacePicture.geometry}
          material={spaceMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SpaceBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.SpaceBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SpaceWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.SpaceWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SpaceBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.SpaceBlackFrame001.geometry}
          material={nodes.SpaceBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Gb1Picture"
          // castShadow
          // receiveShadow
          geometry={nodes.Gb1Picture.geometry}
          material={bg1Material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB1BlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.GB1BlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB1White"
          // castShadow
          // receiveShadow
          geometry={nodes.GB1White.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB1BlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.GB1BlackFrame001.geometry}
          material={nodes.GB1BlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB2Picture"
          // castShadow
          // receiveShadow
          geometry={nodes.GB2Picture.geometry}
          material={gb2Material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB2BlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.GB2BlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB2White"
          // castShadow
          // receiveShadow
          geometry={nodes.GB2White.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="GB2BlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.GB2BlackFrame001.geometry}
          material={nodes.GB2BlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EcommercePicture"
          // castShadow
          // receiveShadow
          geometry={nodes.EcommercePicture.geometry}
          material={ecommerceMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EcommerceBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.EcommerceBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EcommerceWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.EcommerceWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EcommerceBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.EcommerceBlackFrame001.geometry}
          material={nodes.EcommerceBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SriPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.SriPicture.geometry}
          material={sriMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SriBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.SriBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SriWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.SriWhite.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SriBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.SriBlackFrame001.geometry}
          material={nodes.SriBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SchoolPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.SchoolPicture.geometry}
          material={stdMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SchoolBlackFrame"
          // castShadow
          // receiveShadow
          geometry={nodes.SchoolBlackFrame.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="SchoolWhite"
          // castShadow
          // receiveShadow
          geometry={nodes.SchoolWhite.geometry}
          material={colorsMaterial}
        />
        <mesh
          name="SchoolBlackFrame001"
          // castShadow
          // receiveShadow
          geometry={nodes.SchoolBlackFrame001.geometry}
          material={nodes.SchoolBlackFrame001.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="MjolnierGold"
          // castShadow
          // receiveShadow
          geometry={nodes.MjolnierGold.geometry}
          material={mjolnirMaterial}
          position={[-5.003, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="MjolnierBrown"
          // castShadow
          // receiveShadow
          geometry={nodes.MjolnierBrown.geometry}
          material={mjolnirMaterial}
          position={[-5.003, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="MjolnierSteel"
          // castShadow
          // receiveShadow
          geometry={nodes.MjolnierSteel.geometry}
          material={mjolnirMaterial}
          position={[-7.31, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="MjolnierGoldSteel"
          // castShadow
          // receiveShadow
          geometry={nodes.MjolnierGoldSteel.geometry}
          material={mjolnirMaterial}
          position={[-7.31, 0, 0]}
          rotation={[0, 0.283, 0]}
        />
        <mesh
          name="TVPicture"
          // castShadow
          // receiveShadow
          geometry={nodes.TVPicture.geometry}
          material={tvMaterial}
          position={[-0.028, 0, 0]}
          scale={[1, 1, 1.007]}
        />
        <mesh
          name="ContactMePicture"
          // castShadow
          // receiveShadow
          geometry={nodes.ContactMePicture.geometry}
          material={contactMaterial}
          position={[62.717, 23.565, 20.981]}
        />
        <mesh
          name="console"
          // castShadow
          // receiveShadow
          geometry={nodes.console.geometry}
          material={colorsMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EmissionTxt"
          // castShadow
          // receiveShadow
          geometry={nodes.EmissionTxt.geometry}
          material={nodes.EmissionTxt.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EmissionLow"
          // castShadow
          // receiveShadow
          geometry={nodes.EmissionLow.geometry}
          material={nodes.EmissionLow.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="EmissionHigh"
          // castShadow
          // receiveShadow
          geometry={nodes.EmissionHigh.geometry}
          material={nodes.EmissionHigh.material}
        />
        <mesh
          name="EmissionYellow"
          // castShadow
          // receiveShadow
          geometry={nodes.EmissionYellow.geometry}
          material={nodes.EmissionYellow.material}
          position={[62.364, 6.809, -41.729]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="PS3Logo"
          // castShadow
          // receiveShadow
          geometry={nodes.PS3Logo.geometry}
          material={othersMaterial}
          position={[-47.121, 9.909, 2.703]}
          rotation={[-0.172, 0, 0]}
        />
        <mesh
          name="PSMatt"
          // castShadow
          // receiveShadow
          geometry={nodes.PSMatt.geometry}
          material={othersMaterial}
          position={[-53.975, 10.654, 5.497]}
          rotation={[-Math.PI, 1.562, -Math.PI]}
        />
        <mesh
          name="Blackish"
          // castShadow
          // receiveShadow
          geometry={nodes.Blackish.geometry}
          material={othersMaterial}
        />
        <mesh
          name="Gold"
          // castShadow
          // receiveShadow
          geometry={nodes.Gold.geometry}
          material={othersMaterial}
          position={[62.364, 6.809, -41.729]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="Steel"
          // castShadow
          // receiveShadow
          geometry={nodes.Steel.geometry}
          material={othersMaterial}
          position={[62.364, 6.809, -41.729]}
          rotation={[Math.PI / 2, 0, 0.458]}
        />
        <mesh
          name="PSShiny"
          // castShadow
          // receiveShadow
          geometry={nodes.PSShiny.geometry}
          material={othersMaterial}
          position={[-47.121, 9.909, 2.703]}
          rotation={[-0.172, 0, 0]}
        />
        <group
          name="Spider-Man_No_Way_Home_Suit"
          position={[-37.2, -30.955, -2.755]}
          rotation={[0, 1.292, 0]}
          scale={1.187}
        >
          <group
            name="Spiderman_model"
            position={[0, 13.505, 0]}
            rotation={[0, 0.302, 0]}
          >
            <skinnedMesh
              name="lens1"
              geometry={nodes.lens1.geometry}
              material={spMaterial}
              skeleton={nodes.lens1.skeleton}
            />
            <skinnedMesh
              name="lense_covers"
              geometry={nodes.lense_covers.geometry}
              material={spMaterial}
              skeleton={nodes.lense_covers.skeleton}
            />
            <skinnedMesh
              name="Spiderman"
              geometry={nodes.Spiderman.geometry}
              material={spMaterial}
              skeleton={nodes.Spiderman.skeleton}
            />
            <primitive object={nodes.spine1} />
            <primitive object={nodes.spine1child} />
            <primitive object={nodes.hipL} />
            <primitive object={nodes.buttL} />
            <primitive object={nodes.hipR} />
            <primitive object={nodes.buttR} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./model/model.glb");
