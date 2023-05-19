import "./CanvasArea.css";
import { Canvas } from "@react-three/fiber";

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
      </Canvas>
    </div>
  );
};

export default CanvasArea;
