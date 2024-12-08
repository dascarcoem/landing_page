'use client'
// import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";
import { HyperText } from '@/components/ui/HyperText';

const Hero = () => {
  return (
    <div className='relative w-full h-screen  bg-[#001011] ' id='hero' >
        <img alt='Home Background'  className=' !absolute object-cover overflow-visible top-0 md:right-0 !h-full  -rotate-[135deg] md:rotate-0 ' src='/Home/home-bg.png' />
        <div className='fixed w-full lg:w-2/3 h-full flex flex-col items-center justify-center lg:ml-[calc(100vw*0.05)] z-0' >
          <motion.h1
          initial={{ scale: 0 , x:300 , y:-300 }} 
          animate={{ scale: 1 , x:0 , y:0 }}
          transition={{ duration: 0.7 }}
          className=' text-[60px] md:text-[100px] lg:text-[200px]' >
          {/* className=' text-[60px] md:text-[100px] lg:text-[200px] border-2 border-blue-400 ' > */}
              DASCA
          </motion.h1>
          {/* <HyperText text='Data for good' className='w-full relative text-left self-start text-[20px] lg:text-[40px] lg:-top-5 lg:-left-20 '  duration={1000} /> */}
          <HyperText text='Making Every Byte Count for Good' className='relative lg:-top-5 text-left self-start text-[15px]  md:text-[20px] lg:text-[40px] ' />
          <p className=' text-[15px]  md:text-[20px] lg:text-[40px]' >
            
          </p>

        </div>
    </div>
  )
}

export default Hero