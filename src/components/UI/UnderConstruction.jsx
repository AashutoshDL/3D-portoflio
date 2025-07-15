import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Html } from "@react-three/drei";

// Load font from Google Fonts in your index.html or layout
// Example (public/index.html):
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />

const Model = () => {
  const { scene, animations } = useGLTF("/models/manworking.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions, animations]);

  return (
    <group>
      <primitive object={scene} scale={1.5} rotation={[0, 2, 0]} />
      <Html position={[0, -25, 0]} center>
        <div
          style={{
            color: "#000",
            fontSize: "1.5rem",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "1px",
          }}
        >
          This website is currently under construction
        </div>
      </Html>
    </group>
  );
};

const UnderConstruction = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "white" }}>
      <Canvas camera={{ position: [25, 50, 25], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 10]} intensity={1.2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 1, 0]}
        /> */}
      </Canvas>
    </div>
  );
};

export default UnderConstruction;
