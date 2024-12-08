'use client'
import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { motion , useScroll , useTransform} from "motion/react";


const ScaleUp = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="h-screen w-full flex items-end justify-center text-5xl lg:text-[600px]  "
    >
      DASCA
    </motion.div>
  );
};

export default ScaleUp;
