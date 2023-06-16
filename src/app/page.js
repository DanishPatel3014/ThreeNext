"use client";
import Experience from '@/components/Experience.js';
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva';
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <section className='mainbanner'>
    <Leva collapsed />
   <Canvas>
      <Experience/>
    </Canvas>
   </section>
    </>
  )
}
