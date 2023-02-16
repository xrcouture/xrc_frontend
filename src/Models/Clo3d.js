import React from "react";
import { useGLTF } from "@react-three/drei";

export function Clo3d(props) {
  const { nodes, materials } = useGLTF("/ThippieT4.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002.geometry}
          material={materials["THippie.Translucent"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_1.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh002_2.geometry}
          material={materials.THippie}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ThippieT4.glb");