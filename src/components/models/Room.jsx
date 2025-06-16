import { useGLTF } from "@react-three/drei";

export default function Room(props) {
  const { nodes, materials } = useGLTF("/models/Living Room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group265941632.geometry}
        material={materials.mat21}
      />

      {/* ground till here */}

      {/* wall */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1087830502.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1087830502_1.geometry}
        material={materials.mat18}
      />

      {/* another wall */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2131969357.geometry}
        material={materials.mat21}
      />
      {/* glass */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2131969357_1.geometry}
        material={materials.mat24}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh878316936.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh878316936_1.geometry}
        material={materials.mat18}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1702814703.geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1702814703_1.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2037970008.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2037970008_1.geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2037970008_2.geometry}
        material={materials.mat21}
      />

      {/* till here */}

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh754945481_2.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219_1.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219_2.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219_3.geometry}
        material={materials.mat10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219_4.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh176709219_5.geometry}
        material={materials.mat12}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh374562676_1.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1119117474.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1119117474_1.geometry}
        material={materials.mat16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1119117474_2.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1430211780.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1430211780_1.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1430211780_2.geometry}
        material={materials.mat10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1430211780_3.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541_1.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541_2.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541_3.geometry}
        material={materials.mat13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541_4.geometry}
        material={materials.mat8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2106700541_5.geometry}
        material={materials.mat9}
      />
    </group>
  );
}

useGLTF.preload("/models/Living Room.glb");
