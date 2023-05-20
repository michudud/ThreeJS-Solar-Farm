import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import upTexture from "./textures/clear_sky_up.png";
import sideTexture from "./textures/clear_sky_side.png";
import bottomTexture from "./textures/clear_sky_bottom.png";

const SkyBox = () => {
  const [up, side, down] = useLoader(TextureLoader, [
    upTexture,
    sideTexture,
    bottomTexture,
  ]);

  const skyBoxSize = 5;
  return (
    <mesh>
      <boxGeometry args={[skyBoxSize, skyBoxSize, skyBoxSize]} />
      <meshStandardMaterial attach="material-0" map={side} side={BackSide} />
      <meshStandardMaterial attach="material-1" map={side} side={BackSide} />
      <meshStandardMaterial attach="material-2" map={up} side={BackSide} />
      <meshStandardMaterial attach="material-3" map={down} side={BackSide} />
      <meshStandardMaterial attach="material-4" map={side} side={BackSide} />
      <meshStandardMaterial attach="material-5" map={side} side={BackSide} />
    </mesh>
  );
};

export default SkyBox;
