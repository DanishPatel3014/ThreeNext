"use client";
import { OrbitControls } from "@react-three/drei";


// extend({OrbitControls})

export default function Experience() {

// const {camera,gl} = useThree()
// const cubeRef = useRef()
// const groupRef = useRef()


// useFrame((state,delta) => {
// cubeRef.current.rotation.y += delta
// groupRef.current.rotation.y += delta
// });

  return (
    <>
    <OrbitControls />
    <directionalLight position={[1,2,3]} intensity={1} />
    <ambientLight intensity={0.5}/>
    <mesh position-x={-2}>
        <sphereGeometry  />
        <meshStandardMaterial color={'#f3992f'}/>
      </mesh>
      <mesh  rotateY={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color={'#5bcefa'} />
      </mesh>
      <mesh  position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry/>
        <meshStandardMaterial color={'#84ff76'}/>
      </mesh>
    </>
  )
}
