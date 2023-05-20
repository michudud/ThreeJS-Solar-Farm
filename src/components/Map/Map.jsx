import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import terrainTexture from "./textures/adesert_cracks_d.jpg";
import { TextureLoader } from "three";

const Map = () => {
  const surfaceTexture = useLoader(TextureLoader, terrainTexture);
  surfaceTexture.wrapS = THREE.RepeatWrapping;
  surfaceTexture.wrapT = THREE.RepeatWrapping;
  surfaceTexture.repeat.set(20, 20);

  return (
    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial map={surfaceTexture} />
    </mesh>
  );
};

export default Map;
