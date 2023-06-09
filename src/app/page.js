"use client";
import Experience from '@/components/Experience.js';
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <section className='mainbanner'>
   <Canvas>
      <Experience/>
    </Canvas>
   </section>
    </>
  )
}
