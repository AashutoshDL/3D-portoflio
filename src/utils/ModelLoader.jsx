import React, { Suspense, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({
  src,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
}) => {
  const { scene } = useGLTF(src);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false;
      }
    });
  }, [scene]);

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

const ModelLoader = (props) => {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  );
};

export default ModelLoader;
