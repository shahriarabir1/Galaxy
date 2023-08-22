import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export const AnimatedStar = () => {
  const useR = useRef();
  useFrame(() => {
    useR.current.rotation.x += 0.0001;
    useR.current.rotation.y += 0.0001;
    useR.current.rotation.z += 0.0001;
  });
  return <Stars ref={useR} />;
};
