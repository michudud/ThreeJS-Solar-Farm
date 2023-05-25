import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);
  solarPanel.scene.getObjectByName("panel").rotation.x = Math.PI / 4;

  useFrame((status) => {
    const sunRotation = status.scene.getObjectByName("sun_orbit").rotation.z;
    const currSunAngle = ((sunRotation % Math.PI) / Math.PI) * 180;

    if (Math.floor((sunRotation / Math.PI) % 2) === 0) {
      if (currSunAngle > 45 && currSunAngle < 135) {
        solarPanel.scene.getObjectByName("panel").rotation.x =
          -sunRotation + Math.PI / 2;
      }
    } else {
      if (currSunAngle > 45 && currSunAngle < 135) {
        solarPanel.scene.getObjectByName("panel").rotation.x =
          sunRotation + Math.PI / 2;
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
