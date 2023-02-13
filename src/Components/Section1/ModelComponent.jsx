import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import {useEffect} from 'react'

export default function ModelComponent({model, position}) {

  useEffect(() => {
    console.log(model, position)
  }, [model])
  

  return (
    <div id='video-class' className="container">
      <Canvas shadows camera={{ position: position, fov: 35 }}>
        <Stage intensity={1.5} environment="city" shadows={{ type: 'accumulative', colorBlend: 2, opacity: 2 }} adjustCamera={1.2}>
          {model}
        </Stage>
        <OrbitControls makeDefault enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}