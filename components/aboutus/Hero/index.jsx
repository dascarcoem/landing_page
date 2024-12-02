"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const Hero= () => {
	const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none", 
        duration: 1.2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "400% bottom",    
          scrub: 1,
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
          className="scroll-inner h-screen w-[400vw] flex relative"
        >
          <div className='w-screen h-full' > hey</div>
          <div className='w-screen h-full' >There</div>
          <div className='w-screen h-full' >I am</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
