import React, { Suspense, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";

const Model = ({
  src,
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
  annotation,
  number,
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
      {(annotation || number !== undefined) && (
        <Html distanceFactor={10} position={[0, 2, 0]}>
          <div style={{ background: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}>
            {annotation ?? `#${number}`}
          </div>
        </Html>
      )}
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