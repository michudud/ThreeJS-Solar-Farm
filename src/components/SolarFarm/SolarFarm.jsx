import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);
  solarPanel.scene.getObjectByName("panel").rotation.x = Math.PI / 4;

  solarPanel.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });

  let firstCircle = [];
  let secoundCircle = [];
  let thirdCircle = [];
  let allSolarPanels = [firstCircle, secoundCircle, thirdCircle];

  let firstCircleSize = 12;
  let secoundCircleSize = 20;
  let thirdCircleSize = 28;

  for (let i = 0; i < firstCircleSize; i++) {
    firstCircle.push(solarPanel.scene.clone());
  }
  for (let i = 0; i < secoundCircleSize; i++) {
    secoundCircle.push(solarPanel.scene.clone());
  }
  for (let i = 0; i < thirdCircleSize; i++) {
    thirdCircle.push(solarPanel.scene.clone());
  }

  console.log(allSolarPanels);

  useFrame((status) => {
    const sunRotation = status.scene.getObjectByName("sun_orbit").rotation.z;
    const currSunAngle = ((sunRotation % Math.PI) / Math.PI) * 180;

    if (Math.floor((sunRotation / Math.PI) % 2) === 0) {
      if (currSunAngle > 45 && currSunAngle < 135) {
        allSolarPanels.map((circle) => {
          circle.map((panel) => {
            panel.getObjectByName("panel").rotation.x =
              -sunRotation + Math.PI / 2;
          });
        });
      }
    } else {
      if (currSunAngle > 45 && currSunAngle < 135) {
        allSolarPanels.map((circle) => {
          circle.map((panel) => {
            panel.getObjectByName("panel").rotation.x =
              sunRotation + Math.PI / 2;
          });
        });
      }
    }
  });

  return (
    <group>
      {allSolarPanels.map((circle, circleIndex) => {
        return circle.map((panel, index) => {
          return (
            <primitive
              key={index}
              object={panel}
              scale={0.8}
              rotation={[0, Math.PI / 2, 0]}
              position={[
                Math.sin(((Math.PI * 2) / circle.length) * index) *
                  (10 + circleIndex * 8),
                0,
                Math.cos(((Math.PI * 2) / circle.length) * index) *
                  (10 + circleIndex * 8),
              ]}
            />
          );
        });
      })}
    </group>
  );
};

export default SolarFarm;
