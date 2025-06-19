import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useCameraContext } from "../../context/CameraContext";

export default function Couch(props) {
  const { nodes, materials } = useGLTF("/models/couch__-_minecraft.glb");
  const { setClickedNumber } = useCameraContext();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      {/* <Html distanceFactor={10} position={[0, 2, 0]}>
        <button
          style={{
            background: "black",
            color: "white",
            border: "2px solid white",
            padding: "8px",
            borderRadius: "50%", // makes it a circle
            fontSize: "12px",
            boxShadow: "0 0 5px rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
          onClick={() => {
            setClickedNumber(2);
          }}
        >
          2
        </button>
      </Html> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_29.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_37.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_43.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_45.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_51.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_53.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials["piece_of_furniture.png"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials["piece_of_furniture.png"]}
        position={[-2, 9, 3]}
        rotation={[0.131, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_61.geometry}
        material={materials["piece_of_furniture.png"]}
        position={[-11, 9, 5]}
        rotation={[0.131, -0.043, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_63.geometry}
        material={materials["piece_of_furniture.png"]}
        position={[11, 9, 5]}
        rotation={[0.131, 0.043, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65.geometry}
        material={materials["piece_of_furniture.png"]}
        position={[0, 9, 5]}
        rotation={[0.087, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials["piece_of_furniture.png"]}
        position={[0, 9, 5]}
        rotation={[0.087, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_69.geometry}
        material={materials["piece_of_furniture.png"]}
      />
    </group>
  );
}

useGLTF.preload("/models/couch__-_minecraft.glb");
