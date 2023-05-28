import "./CanvasArea.css";
import { Canvas } from "@react-three/fiber";
import SkyBox from "../SkyBox";
import Map from "../Map";
import Sun from "../Sun";
import SolarFarm from "../SolarFarm/SolarFarm";

const CanvasArea = () => {
  return (
    <div className="CanvasArea">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 20000,
          position: [0, 50, 90],
          rotation: [-0.4, 0, 0],
        }}
      >
        <ambientLight intensity={0.2} name="ambient_light" />
        <SkyBox />
        <Map />
        <Sun />
        <SolarFarm />
      </Canvas>
    </div>
  );
};

export default CanvasArea;
