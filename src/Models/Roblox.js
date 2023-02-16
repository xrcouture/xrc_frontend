import React from "react";
import { useGLTF } from "@react-three/drei";

export function Roblox(props) {
  const { nodes, materials } = useGLTF("/roblox.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002.geometry}
          material={materials["THippie.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_1.geometry}
          material={materials.Black_Piano}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_2.geometry}
          material={materials.Shoe1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_3.geometry}
          material={materials.THippieAlphaa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_4.geometry}
          material={materials.skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_5.geometry}
          material={materials.face}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_6.geometry}
          material={materials.hair}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/roblox.glb");
