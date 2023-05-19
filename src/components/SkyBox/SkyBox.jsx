const SkyBox = () => {
  return (
    <mesh>
      <boxGeometry args={[skyBoxSize, skyBoxSize, skyBoxSize]} />
      {/* <meshStandardMaterial attach="material-0" map={left} side={BackSide} /> */}
      {/* <meshStandardMaterial attach="material-1" map={right} side={BackSide} /> */}
      {/* <meshStandardMaterial attach="material-2" map={down} side={BackSide} /> */}
      {/* <meshStandardMaterial attach="material-3" map={up} side={BackSide} /> */}
      {/* <meshStandardMaterial attach="material-4" map={front} side={BackSide} /> */}
      {/* <meshStandardMaterial attach="material-5" map={back} side={BackSide} /> */}
    </mesh>
  );
};

export default SkyBox;
