import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'

export default function ModelComponent({model, position}) {
  
  return (
    <div id='video-class' className="container">
      <Canvas shadows camera={{ position: position, fov: 35 }}>
        <Stage intensity={0.5} environment="city" adjustCamera={1.2}>
          {model}
        </Stage>
        <OrbitControls autoRotate={true} autoRotateSpeed={3} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} rotation={[Math.PI / 2, 0, 0]}/>
      </Canvas>
    </div>
  )
}