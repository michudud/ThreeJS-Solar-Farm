import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import terrainTexture from "./textures/adesert_cracks_d.jpg";
import { TextureLoader } from "three";

const Map = () => {
  const surfaceTexture = useLoader(TextureLoader, terrainTexture);
  surfaceTexture.wrapS = THREE.RepeatWrapping;
  surfaceTexture.wrapT = THREE.RepeatWrapping;
  surfaceTexture.repeat.set(6, 6);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[40, 60]} />
      <meshStandardMaterial map={surfaceTexture} />
    </mesh>
  );
};

export default Map;
