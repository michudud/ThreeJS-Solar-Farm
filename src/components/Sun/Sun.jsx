import { AdditiveBlending, BackSide, TextureLoader } from "three";
import glowTexture from "./textures/glow.png";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Sun = () => {
  const glow = useLoader(TextureLoader, glowTexture);
  const sunOrbitRef = useRef();

  useFrame((status) => {
    if (sunOrbitRef.current) {
      let currRotation = sunOrbitRef.current.rotation.z;
      let ambLight = status.scene.getObjectByName("ambient_light");

      sunOrbitRef.current.rotation.z += 0.008;
      if (Math.floor((currRotation / Math.PI) % 2) === 0) {
        if (Math.floor((currRotation / (Math.PI / 2)) % 2) === 0) {
          ambLight.intensity =
            0.1 + 0.3 * (((currRotation / Math.PI) % 1) / 0.5);
        } else {
          ambLight.intensity =
            0.4 - 0.3 * ((((currRotation / Math.PI) % 1) - 0.5) / 0.5);
        }
      }
    }
  });

  return (
    <>
      <mesh position={[0, -20, 0]} ref={sunOrbitRef} name="sun_orbit">
        <sphereGeometry args={[0.01, 1, 1]} />
        <mesh position={[60, 0, 0]} name="sun">
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
          <pointLight
            color="#ffffcc"
            intensity={1}
            distance={200}
            castShadow={true}
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
        </mesh>
      </mesh>
    </>
  );
};

export default Sun;
