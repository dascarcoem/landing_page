'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

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
    <div className="scroll-outer overflow-hidden relative bg-black">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-inner h-screen w-[300vw] flex relative">

          {/* Hero Section */}
          <div
            className="relative w-screen h-full flex flex-col justify-center items-center gap-6 text-5xl lg:text-[220px] pl-[calc(100vw*0.1)] px-[calc(100vw*0.2)] bg-cover bg-center"
            style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
          >
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-bold text-white text-[40px] md:text-[80px] lg:text-[100px]"
            >
              Fun, Engaging, and Unforgettable Events
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-center text-white text-[20px] lg:text-[30px] w-full mt-10  text-justify"
            >
              Our chapter brings the Data Science community together with a wide range of fun and exciting events! From team-building activities and casual hangouts to light-hearted competitions, we create a space where learning meets enjoyment. While we do offer occasional technical workshops, our main focus is on creating memorable experiences that foster connections and inspire creativity. Join us for an unforgettable time with peers who share your passion for fun and innovation!
            </motion.div>
          </div>

          {/* Explore Now Section */}
          <div className="relative w-screen h-full flex flex-col justify-center items-center gap-6 text-5xl lg:text-[180px] text-white">
            <div className="w-full text-center">Explore Now!</div>
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
              {/* Removed image */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
