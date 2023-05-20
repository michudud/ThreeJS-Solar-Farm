import { AdditiveBlending, BackSide, TextureLoader } from "three";
import glowTexture from "./textures/glow.png";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Sun = () => {
  const glow = useLoader(TextureLoader, glowTexture);
  const sunOrbitRef = useRef();

  useFrame(() => {
    if (sunOrbitRef.current) {
      sunOrbitRef.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      <mesh position={[0, -1.1, 0]} ref={sunOrbitRef}>
        <sphereGeometry args={[0.02, 1, 1]} />
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshBasicMaterial color="#ffeda6" />
          <sprite scale={[1, 1, 1]}>
            <spriteMaterial
              map={glow}
              color="#ffeda6"
              transparent="false"
              blending={AdditiveBlending}
            />
          </sprite>
        </mesh>
      </mesh>
      {/* <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.21, 20, 20]} />
        <meshBasicMaterial color="red" side={BackSide} />
      </mesh> */}
    </>
  );
};

export default Sun;
