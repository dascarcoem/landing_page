'use client'

import React from 'react'
import { motion } from 'framer-motion'
const Objectives = () => {
  return (
    <motion.div
      initial={{ scale: 0, x: 300, y: -300 }}
      animate={{ scale: 1, x: 0, y: 0 }}
      className='relative w-full h-screen center bg-white z-10 text-black rounded-lg'  >
      Objectives
    </motion.div>
  )
}

export default Objectives