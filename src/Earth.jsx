import React from "react";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Moon } from "./moon";
import { Iss } from "./iss";

export const Earth = ({ displacement }) => {
  const useE = useRef();
  useFrame(({ clock }) => {
    useE.current.rotation.x -= 0.002;
  });
  const [maP, norMap, specMap, disMap] = useTexture([
    "../public/assets/world.jpg",
    "../public/assets/normal_map.jpg",
    "../public/assets/earth_specular.jpg",
    "../public/assets/earth_displacement.jpg",
  ]);
  return (
    <group>
      <mesh receiveShadow ref={useE}>
        <sphereGeometry args={[1, 320, 320]} />;
        <meshPhongMaterial
          map={maP}
          normalMap={norMap}
          shininess={1000}
          specularMap={specMap}
          displacementMap={disMap}
          displacementScale={(displacement = 0.1)}
        />
      </mesh>
      <Iss />
      <Moon />
    </group>
  );
};
