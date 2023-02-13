/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DCL(props) {
  const { nodes, materials } = useGLTF("/DCL.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.01, 3.32, -0.17]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh003.geometry}
          material={materials.Black_Piano}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh003_1.geometry}
          material={materials["lambert10.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh003_2.geometry}
          material={materials["Thippie_03.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh003_3.geometry}
          material={materials["Thippie_01.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh003_4.geometry}
          material={materials["Thippie_04.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/DCL.glb");
