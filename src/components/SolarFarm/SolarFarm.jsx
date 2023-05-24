import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);

  useFrame((status) => {
    const sunRotation = status.scene.getObjectByName("sun_orbit").rotation.z;
    if (Math.floor((sunRotation / Math.PI) % 2) === 0) {
      let currAngle = ((sunRotation % Math.PI) / Math.PI) * 180;

      if (currAngle > 40 && currAngle < 140) {
        solarPanel.scene.getObjectByName("panel").rotation.x =
          -sunRotation + Math.PI / 2;
      }
    }
  });

  return (
    <primitive
      object={solarPanel.scene}
      scale={0.8}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

export default SolarFarm;
