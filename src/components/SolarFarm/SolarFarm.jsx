import * as THREE from "three";
import solarPanelModel from "./models/solar_panel.glb";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SolarFarm = () => {
  const solarPanel = useLoader(GLTFLoader, solarPanelModel);
  let target = new THREE.Vector3();

  useFrame((status) => {
    status.scene.getObjectByName("sun").getWorldPosition(target);
    solarPanel.scene.getObjectByName("panel").lookAt(target);
    solarPanel.scene.getObjectByName("panel").rotation.x += Math.PI / 2;
    console.log(solarPanel.scene.getObjectByName("panel").rotation.x);
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
