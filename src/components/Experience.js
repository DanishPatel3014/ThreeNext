"use client";
import { Html, OrbitControls, TransformControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// extend({OrbitControls})

export default function Experience() {

  const model = useLoader(GLTFLoader,'../../hamburger.glb')
  

  const {position} = useControls({
    position:
    {
      value : -2,
      min : -4,
      max : 4 ,
      step : 0.01
    }
  })
  const cubeRef = useRef();
// const {camera,gl} = useThree()
// const cubeRef = useRef()
// const groupRef = useRef()


// useFrame((state,delta) => {
// cubeRef.current.rotation.y += delta
// groupRef.current.rotation.y += delta
// });

  return (
    <>
    <Perf position="top-left"/>

    <OrbitControls makeDefault />
    <directionalLight position={[1,2,3]} intensity={1} />
    <ambientLight intensity={0.5}/>
    {/* <mesh position-x={position}>
        <sphereGeometry  />
        <meshStandardMaterial color={'#f3992f'}/>
      </mesh>
      <mesh ref={cubeRef} rotateY={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color={'#5bcefa'} />
        <Html>Danish</Html>
      </mesh> */}
      {/* <TransformControls object={cubeRef} /> */}
      <mesh  position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry/>
        <meshStandardMaterial color={'#84ff76'}/>
      </mesh>
      <primitive object={model.scene} scale={'0.35'} />
    </>
  )
}
