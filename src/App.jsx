import { Canvas } from "@react-three/fiber";
import { MainContainer } from "./MainContainer";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
      shadows
      camera={{ fov: 75, near: 0.1, far: 1000, position: [5, 5, 5] }}
    >
      <MainContainer />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
