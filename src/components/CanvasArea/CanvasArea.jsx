import "./CanvasArea.css";
import { Canvas } from "@react-three/fiber";
import SkyBox from "../SkyBox";
import Map from "../Map";
import Sun from "../Sun";

const CanvasArea = () => {
  return (
    <div className="CanvasArea">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 20000,
          position: [0, 10, 58],
          rotation: [0.1, 0, 0],
        }}
      >
        <ambientLight intensity={1} name="ambient_light" />
        <SkyBox />
        <Map />
        <Sun />
      </Canvas>
    </div>
  );
};

export default CanvasArea;
