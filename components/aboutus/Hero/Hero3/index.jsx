import React from "react";
import { motion } from 'framer-motion'
// import { motion } from "motion/react";
import Image from "next/image";

const Hero3 = () => {
  return (
    <div className="w-screen h-full  center text-5xl lg:text-[180px] relative">
      Explore Now!
      <motion.div
        className="absolute bottom-16 lg:bottom-24 right-16 lg:right-24"
        animate={{
          y: [0, -50, 0], // Moves up
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/AboutUs/Hero/down.png"
          height={150}
          width={150}
          alt="Down Arrow for navigation"
        />
      </motion.div>{" "}
    </div>
  );
};

export default Hero3;
