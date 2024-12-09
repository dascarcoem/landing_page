import React from "react";
// import { motion } from "motion/react";
import { motion } from 'framer-motion'
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="relative w-screen h-full flex flex-col justify-center items-center gap-6  text-5xl lg:text-[130px] ">
      <motion.div
        className="absolute top-16 lg:top-24 right-16 lg:right-24"
        animate={{
          y: [0, 0, 0], // Moves up
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/AboutUs/Hero/fire.png"
          height={150}
          width={150}
          alt="Fire Illustration"
        />
      </motion.div>{" "}
      <div className="w-full self-start">Want to</div>
      <div>Know More</div>
      <div className="w-full self-end text-right">About Us</div>
    </div>
  );
};

export default Hero2;
