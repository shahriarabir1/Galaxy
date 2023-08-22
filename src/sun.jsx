import React from "react";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Earth } from "./Earth";
import { Group } from "three";

export const Sun = ({}) => {
  const useS = useRef();
  useFrame(() => {
    useS.current.rotation.x -= 0.002;
  });
  const [maS] = useTexture(["../public/assets/2k_sun.jpg"]);
  return (
    <group>
      <mesh receiveShadow ref={useS} position={[50, 0, 0]}>
        <sphereGeometry args={[5, 320, 320]} />;
        <meshPhongMaterial map={maS} />
      </mesh>
      <Earth />
    </group>
  );
};
