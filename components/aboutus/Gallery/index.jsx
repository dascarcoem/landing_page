"use client"
import React, { useRef } from 'react'
// import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import Image from 'next/image';


const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const scaleImg = useTransform(scrollYProgress, [0, 0.35], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.35], [1, 3]);
  const translateLeft = useTransform(scrollYProgress, [0, 0.2, 1], [-3200, -3200, 3200])
  const translateRight = useTransform(scrollYProgress, [0, 0.2, 1], [3200, 3200, -3200])
  const imgLeft = ['/images/home.png', '/images/home.png', '/images/home.png', '/images/home.png']
  const imgRight = ['/images/default.jpg', '/images/default.jpg', '/images/default.jpg', '/images/default.jpg']
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  return (
    <div ref={ref} className='flex flex-col items-center relative bg-black h-[600vh]'>
      <div className='top-52 sticky w-full overflow-x-clip'>
        <motion.div style={{ scale: scaleImg, opacity }}>
          <Image
            src='/images/default.jpg'
            height={450}
            width={450}
            alt="logo"
            className="mx-auto rounded-3xl"
          />
        </motion.div>
        <motion.div
          style={{ scale: scaleText, opacity }}
          className='text-blue-500 text-[calc(100vw*0.2)] top-1/2 text-center w-full absolute'
        >
          DASCA
        </motion.div>
      </div>
      <div className='mt-[70vh] overflow-x-hidden sticky top-0 '>
        <motion.div style={{ translateX: translateLeft }} className='py-10 overflow-x-hidden'>
          <ImgTabRow imgs={imgRight} />
        </motion.div>
        <motion.div style={{ translateX: translateRight }} className='py-10 overflow-x-hidden'>
          <ImgTabRow imgs={imgLeft} />
        </motion.div>
      </div>
    </div>
  )
}

const ImgTabRow = ({ imgs }) => {
  return (
    <div className='grid grid-cols-4 overflow-x-hidden px-10 *:px-5'>
      {imgs.map((src, i) => <Image key={i} src={src} height={450} width={450} alt="logo" className="rounded-3xl" />)}
    </div>
  )
}
export default Gallery