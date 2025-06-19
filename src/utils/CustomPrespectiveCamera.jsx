import React, { useRef } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { useCameraContext } from "../context/CameraContext";

const CustomPerspectiveCamera = ({
  id = "main-camera",
  fov = 75,
  aspect,
  near = 0.1,
  far = 1000,
  position = [11.5, 1, 6],
  lookAt = [0, 0, 0], // default lookAt
  enableOrbitControls = true,
  orbitControlsProps = {},
  ...props
}) => {
  const cameraRef = useRef();
  const { size } = useThree();
  const { clickedNumber } = useCameraContext();

  const cameraAspect = aspect || size.width / size.height;

  // Target positions and lookAt targets per number
  const cameraTargets = {
  1:{
      position: [-0.5, 0.6, 3.5],
      lookAt: [-1.7, 0.5, 3.8],
  },
    2: {
      position: [3.5, 0.3, 1.7],
      lookAt: [0, -10, 0], // update as needed
    },
  };

  const target = cameraTargets[clickedNumber] || {
    position,
    lookAt,
  };

  const { pos } = useSpring({
    pos: target.position,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    if (!cameraRef.current) return;

    const [x, y, z] = pos.get();

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(...target.lookAt);
    cameraRef.current.updateProjectionMatrix();
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={fov}
        aspect={cameraAspect}
        near={near}
        far={far}
        position={position}
        {...props}
        name={id}
      />
      {enableOrbitControls && (
        <OrbitControls
          camera={cameraRef.current}
          enableDamping={true}
          dampingFactor={0.1}
          {...orbitControlsProps}
        />
      )}
    </>
  );
};

export default CustomPerspectiveCamera;