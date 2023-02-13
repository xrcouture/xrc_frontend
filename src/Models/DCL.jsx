import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dcl(props) {
  const { nodes, materials } = useGLTF("/DCL.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006.geometry}
          material={materials.Black_Piano}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_1.geometry}
          material={materials["lambert10.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_2.geometry}
          material={materials["Thippie_03.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_3.geometry}
          material={materials["Thippie_01.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_4.geometry}
          material={materials["Thippie_04.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_5.geometry}
          material={materials.lips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_6.geometry}
          material={materials.eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_7.geometry}
          material={materials.lashes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_8.geometry}
          material={materials.Hair_MAT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh006_9.geometry}
          material={materials.AvatarWearable_MAT}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/DCL.glb");