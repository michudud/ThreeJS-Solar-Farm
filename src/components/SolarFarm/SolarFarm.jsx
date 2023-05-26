import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);
  solarPanel.scene.getObjectByName("panel").rotation.x = Math.PI / 4;

  let allSolarPanels = [];

  for (let i = 0; i < 16; i++) {
    allSolarPanels.push(solarPanel.scene.clone());
  }

  useFrame((status) => {
    const sunRotation = status.scene.getObjectByName("sun_orbit").rotation.z;
    const currSunAngle = ((sunRotation % Math.PI) / Math.PI) * 180;

    if (Math.floor((sunRotation / Math.PI) % 2) === 0) {
      if (currSunAngle > 45 && currSunAngle < 135) {
        allSolarPanels.map((panel) => {
          panel.getObjectByName("panel").rotation.x =
            -sunRotation + Math.PI / 2;
        });
      }
    } else {
      if (currSunAngle > 45 && currSunAngle < 135) {
        allSolarPanels.map((panel) => {
          panel.getObjectByName("panel").rotation.x = sunRotation + Math.PI / 2;
        });
      }
    }
  });

  return (
    <group>
      {allSolarPanels.map((panel, index) => {
        return (
          <primitive
            key={index}
            object={panel}
            scale={0.8}
            rotation={[0, Math.PI / 2, 0]}
            position={[
              Math.sin(((Math.PI * 2) / allSolarPanels.length) * index) * 20,
              0,
              Math.cos(((Math.PI * 2) / allSolarPanels.length) * index) * 20,
            ]}
          />
        );
      })}
    </group>
  );
};

export default SolarFarm;
