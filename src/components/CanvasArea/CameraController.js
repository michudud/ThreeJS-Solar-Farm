import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.target.set(0, 5, 0);
    controls.enablePan = false;
    controls.minDistance = 20;
    controls.maxDistance = 90;
    controls.maxPolarAngle = Math.PI / 2;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
