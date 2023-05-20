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
          fov: 75,
          near: 0.1,
          far: 20000,
        }}
      >
        <ambientLight intensity={0.8} />
        <SkyBox />
        <Map />
        <Sun />
      </Canvas>
    </div>
  );
};

export default CanvasArea;
