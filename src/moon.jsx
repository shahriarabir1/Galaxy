import React from "react";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Moon = () => {
  const useM = useRef();
  useFrame(({ clock }) => {
    useM.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 4;
    useM.current.position.z = Math.cos(clock.getElapsedTime() * 0.5) * 4;
    useM.current.rotation.x -= 0.002;
  });
  const [maPm] = useTexture(["../public/assets/moon_map.jpg"]);
  return (
    <mesh castShadow ref={useM} position={[4, 0, 0]}>
      <sphereGeometry args={[0.5, 320, 320]} />;
      <meshPhongMaterial map={maPm} />
    </mesh>
  );
};
