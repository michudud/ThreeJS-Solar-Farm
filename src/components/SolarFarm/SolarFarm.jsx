import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);
  solarPanel.scene.getObjectByName("panel").rotation.x = Math.PI / 4;

  let allSolarPanels = [];

  for (let i = 0; i < 5; i++) {
    allSolarPanels.push(solarPanel.scene.clone());
  }

  // useFrame((status) => {
  //   const sunRotation = status.scene.getObjectByName("sun_orbit").rotation.z;
  //   const currSunAngle = ((sunRotation % Math.PI) / Math.PI) * 180;

  //   if (Math.floor((sunRotation / Math.PI) % 2) === 0) {
  //     if (currSunAngle > 45 && currSunAngle < 135) {
  //       solarPanel.scene.getObjectByName("panel").rotation.x =
  //         -sunRotation + Math.PI / 2;
  //     }
  //   } else {
  //     if (currSunAngle > 45 && currSunAngle < 135) {
  //       solarPanel.scene.getObjectByName("panel").rotation.x =
  //         sunRotation + Math.PI / 2;
  //     }
  //   }
  // });

  return (
    <group>
      {allSolarPanels.map((panel, index) => {
        return (
          <primitive
            object={panel}
            scale={0.8}
            rotation={[0, Math.PI / 2, 0]}
            position={[index * 5, 0, 0]}
          />
        );
      })}
    </group>
  );
};

export default SolarFarm;
