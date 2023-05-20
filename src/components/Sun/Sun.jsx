import { AdditiveBlending, BackSide, TextureLoader } from "three";
import glowTexture from "./textures/glow.png";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Sun = () => {
  const glow = useLoader(TextureLoader, glowTexture);
  const sunOrbitRef = useRef();

  useFrame(() => {
    if (sunOrbitRef.current) {
      sunOrbitRef.current.rotation.z += 0.01;
    }
  });

  return (
    <>
      <mesh position={[0, -10, 0]} ref={sunOrbitRef}>
        <sphereGeometry args={[0.01, 1, 1]} />
        <mesh position={[0, 45, 0]}>
          <sphereGeometry args={[2, 20, 20]} />
          <meshBasicMaterial color="#f3f58c" blending={AdditiveBlending} />
          <sprite scale={[15, 15, 15]}>
            <spriteMaterial
              map={glow}
              color="#f3f58c"
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
