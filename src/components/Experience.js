"use client";
import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({OrbitControls})

export default function Experience() {

const {camera,gl} = useThree()
const cubeRef = useRef()
const groupRef = useRef()


useFrame((state,delta) => {
cubeRef.current.rotation.y += delta
// groupRef.current.rotation.y += delta
});

  return (
    <>
    <orbitControls args={[camera, gl.domElement]} />
<group ref={groupRef}>
<mesh position-x={-2}>
        <sphereGeometry  />
        <meshBasicMaterial color={'#f3992f'}/>
      </mesh>
      <mesh ref={ cubeRef} rotateY={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color={'#5bcefa'} />
      </mesh>
</group>
      <mesh  position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry/>
        <meshBasicMaterial color={'#84ff76'}/>
      </mesh>
    </>
  )
}