"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

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
    <div className="scroll-outer overflow-hidden relative">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-inner h-screen w-[300vw] flex relative"
        >
          <Hero1 />
          <Hero2 />
          <Hero3 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
