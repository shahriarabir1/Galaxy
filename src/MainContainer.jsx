import React from "react";
import { useHelper } from "@react-three/drei";
import { AnimatedStar } from "./AnimatedStar";
import { Earth } from "./Earth";
import { useRef } from "react";
import * as THREE from "three";
import { Sun } from "./sun";

export const MainContainer = () => {
  const useH = useRef();
  const useHone = useRef();
  const useHtwo = useRef();
  /*const useHthree = useRef();
  const useHfour = useRef();
  const useHfive = useRef();*/
  useHelper(useH, THREE.directionalLight, 1, "hotpink");
  useHelper(useHone, THREE.directionalLight, 1, "hotpink");
  useHelper(useHtwo, THREE.directionalLight, 1, "hotpink");
  /*useHelper(useHthree, THREE.directionalLight, 1, "hotpink");
  useHelper(useHfour, THREE.directionalLight, 1, "hotpink");
  useHelper(useHfive, THREE.directionalLight, 1, "hotpink");*/
  return (
    <>
      <color attach={"background"} args={["black"]} />
      <Sun />
      <AnimatedStar />

      <directionalLight ref={useH} position={[0, 10, 10]} />
      <directionalLight castShadow ref={useHone} position={[10, 0, -10]} />
      <directionalLight castShadow ref={useHtwo} position={[-15, -40, -15]} />
      {/*<ambientLight />*/}
    </>
  );
};
