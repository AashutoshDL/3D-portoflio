import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { DirectionalLightHelper } from "three";

const LightWithHelper = () => {
  const directionalLightRef = useRef();
  const fillLightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (directionalLightRef.current) {
      const dirHelper = new DirectionalLightHelper(
        directionalLightRef.current,
        5,
        0xff0000
      );
      scene.add(dirHelper);
    }

    if (fillLightRef.current) {
      const fillHelper = new DirectionalLightHelper(
        fillLightRef.current,
        5,
        0x00ff00
      );
      scene.add(fillHelper);
    }
  }, [scene]);

  return (
    <>
    <ambientLight intensity={0.2} />
      <directionalLight
        // ref={directionalLightRef}
        castShadow
        position={[50, 80, 100]}
        intensity={1}
        shadow-mapSize-width={2048} // increased resolution for better quality
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001} // tweak bias to reduce shadow acne
        shadow-camera-near={1}
        shadow-camera-far={1000} // reduce far plane for better precision
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <directionalLight
        // ref={fillLightRef}
        castShadow
        position={[50, 80, -100]}
        intensity={0.5}
        shadow-mapSize-width={2048} // increased resolution for better quality
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001} // tweak bias to reduce shadow acne
        shadow-camera-near={1}
        shadow-camera-far={1000} // reduce far plane for better precision
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
    </>
  );
};

export default LightWithHelper;
