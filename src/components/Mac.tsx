/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.gltf --transform --types
*/

import * as THREE from "three";
import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle001_3: THREE.Mesh;
    Circle001_4: THREE.Mesh;
    Circle001_5: THREE.Mesh;
    Circle001_6: THREE.Mesh;
    Circle006: THREE.Mesh;
    Circle006_1: THREE.Mesh;
    FrontCameraRing001: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    KeyboardKeyHole: THREE.Mesh;
    RubberFoot: THREE.Mesh;
    Circle012: THREE.Mesh;
    Circle012_1: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle002_1: THREE.Mesh;
    Circle002_2: THREE.Mesh;
    Circle002_3: THREE.Mesh;
    Circle002_4: THREE.Mesh;
    AppleLogo000: THREE.Mesh;
  };
  materials: {
    ["Frame.001"]: THREE.MeshStandardMaterial;
    HeadPhoneHole: THREE.MeshStandardMaterial;
    USB_C_INSIDE: THREE.MeshStandardMaterial;
    TouchbarBorder: THREE.MeshStandardMaterial;
    Keyboard: THREE.MeshStandardMaterial;
    ["CameraRIngBlack.002"]: THREE.MeshStandardMaterial;
    ["Keyboard.001"]: THREE.MeshStandardMaterial;
    Key: THREE.MeshStandardMaterial;
    Touchbar: THREE.MeshStandardMaterial;
    DarkRubber: THREE.MeshStandardMaterial;
    HingeBlack: THREE.MeshStandardMaterial;
    HingeMetal: THREE.MeshStandardMaterial;
    SpeakerHole: THREE.MeshStandardMaterial;
    ["Frame.001"]: THREE.MeshStandardMaterial;
    HingeMetal: THREE.MeshStandardMaterial;
    ScreenGlass: THREE.MeshStandardMaterial;
    Rubber: THREE.MeshStandardMaterial;
    DisplayGlass: THREE.MeshStandardMaterial;
    ["AppleLogo.004"]: THREE.MeshStandardMaterial;
  };
};

export function Mac(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/mac/model.gltf") as GLTFResult;

  const mac = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const tl = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
      scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: "#projects",
        start: "top 75%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        onEnter: () => console.log("enter"),
      },
    });

    tl.current
      .to(mac.current.rotation, { y: -1 }, 2)
      .to(mac.current.position, { x: 1 }, 2)

      .to(mac.current.rotation, { y: 1 }, 6)
      .to(mac.current.position, { x: -1 }, 6)

      .to(mac.current.rotation, { y: 0 }, 11)
      .to(mac.current.rotation, { x: 1 }, 11)
      .to(mac.current.position, { x: 0 }, 11)

      .to(mac.current.rotation, { y: 0 }, 13)
      .to(mac.current.rotation, { x: -1 }, 13)
      .to(mac.current.position, { x: 0 }, 13)

      .to(mac.current.rotation, { y: 0 }, 16)
      .to(mac.current.rotation, { x: 0 }, 16)
      .to(mac.current.position, { x: 0 }, 16)

      .to(mac.current.rotation, { y: 0 }, 20)
      .to(mac.current.rotation, { x: 0 }, 20)
      .to(mac.current.position, { x: 0 }, 20);
  }, []);

  return (
    <group {...props} dispose={null} ref={mac}>
      <group position={[0, 0.52, 0]} scale={0.1}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          geometry={nodes.Circle001_4.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <group position={[0, -0.51, 0]} scale={5.8}>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={materials.USB_C_INSIDE}
          />
        </group>
        <mesh
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials["CameraRIngBlack.002"]}
          position={[-0.15, 19.57, -16.15]}
          scale={5.8}
        />
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            geometry={nodes.Circle.geometry}
            material={materials["Keyboard.001"]}
          />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <mesh
          geometry={nodes.KeyboardKeyHole.geometry}
          material={materials["Keyboard.001"]}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group
          position={[0.01, -0.47, -10.41]}
          rotation={[1.31, 0, 0]}
          scale={5.8}
        >
          <mesh
            geometry={nodes.Circle002.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials.HingeMetal}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0, -0.11, -1.8]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.58}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/mac/model.gltf");
