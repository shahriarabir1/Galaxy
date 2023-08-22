import { Gltf, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import React from "react";

export const Iss = () => {
  const useI = useRef();
  const useMem = useMemo(() => {
    return useGLTF("../public/assets/ISS/ISS_stationary.gltf");
  });
  useFrame(({ clock }) => {
    useI.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 2;
    useI.current.position.z = Math.cos(clock.getElapsedTime() * 0.5) * 2;
  });

  return (
    <mesh>
      <primitive
        ref={useI}
        object={useMem.scene}
        position={[2, 0, 0]}
        scale={0.005}
      />
    </mesh>
  );
};
