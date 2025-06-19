import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Room from "./models/Room";
import LightWithHelper from "../utils/LightWithHelper";
import HomePageOverlay from "./UI/HomePageOverlay";
import Text from "./models/Text";
import ModelLoader from "../utils/ModelLoader";
import Couch from "./models/Couch";
import Shelf from "./models/Shelf";
import Desk from "./models/Desk";
import CustomPerspectiveCamera from "../utils/CustomPrespectiveCamera";

const Scene = () => {
  return (
    <>
      <HomePageOverlay />
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#7FBAEA" }}
        shadows={true}
      >
        <LightWithHelper />
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        {/* <Text /> */}
        <CustomPerspectiveCamera />
        <Room
          position={[-1.5, 0, -1]}
          scale={[3.5, 3, 2.5]}
          rotation={[0, 0.3, 0]}
        />
        <Shelf
          scale={[2, 2, 2]}
          position={[-2.8, 0.1, -1.1]}
          rotation={[0, -1.27, 0]}
        />
        <Couch
          scale={[0.08, 0.08, 0.08]}
          position={[4.5, -1.45, 1.5]}
          rotation={[0, 1.87, 0]}
        />
        <Desk
          scale={[1.5, 1.5, 1.5]}
          position={[-4.5, -1.4, -3]}
          rotation={[0, 3.45, 0]}
        />

        <ModelLoader
          src="/models/Modern rug.glb"
          scale={[1.5, 1, 4]}
          position={[1, -1.42, -2.4]}
          rotation={[0, 1.87, 0]}
        />
      </Canvas>
    </>
  );
};

export default Scene;
