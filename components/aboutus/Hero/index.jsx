"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "motion/react";
import { container, item } from "@/utils/animations";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const imageData = [
  { src: "/AboutUs/Hero/0.svg", alt: "Vote Illustration 0" },
  { src: "/AboutUs/Hero/1.svg", alt: "Vote Illustration 1" },
  { src: "/AboutUs/Hero/4.svg", alt: "Vote Illustration 4" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "400% bottom",
          scrub: 1.5,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-outer overflow-hidden relative">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-inner h-screen w-[300vw] flex relative"
        >
          <div className="relative w-screen h-full flex flex-col justify-center items-center gap-6  text-5xl lg:text-[220px] pl-[calc(100vw*0.1)]  px-[calc(100vw*0.2)]">
            <div className="w-full self-start">Hey,</div>
            <div>There</div>
            <motion.div
              className=" absolute bottom-0  right-14 lg:-right-32 overflow-x-auto  h-1/2 flex justify-center items-end gap-20"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
