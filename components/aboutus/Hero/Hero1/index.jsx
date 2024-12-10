import React from "react";
import { FlipText } from "@/components/ui/FlipText";
import { container, item } from "@/utils/animations";
// import { motion } from "motion/react";
import { motion } from 'framer-motion'


const imageData = [
    { src: "/AboutUs/Hero/0.svg", alt: "Vote Illustration 0" },
    { src: "/AboutUs/Hero/1.svg", alt: "Vote Illustration 1" },
    { src: "/AboutUs/Hero/4.svg", alt: "Vote Illustration 4" },
  ];

const Hero1 = () => {
  return (
    <div className="relative w-screen h-full flex flex-col justify-center items-center gap-6  text-5xl lg:text-[220px] pl-[calc(100vw*0.1)]  px-[calc(100vw*0.2)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full self-start"
      >
        Hey,
      </motion.div>
      <FlipText word="There" />
      <motion.div
        className=" absolute bottom-0  right-14 lg:-right-28 overflow-x-auto  h-1/2 flex justify-center items-end gap-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {imageData.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-5/6"
            variants={item}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero1;
