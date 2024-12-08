'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  useEffect(() => {
    const exp = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience',
        start: 'top top',
        end: '+=5000',
        scrub: true,
        // markers: true,
        pin: '.experience',
      },
    });

    exp.to('.experience-middle', {
      '--progress1': 1,
      duration: 5,
      smoothOrigin: true,
    });
  }, []);

  return (
    <>
      <style>{`
        :root {
          --progress1: 0;
        }

        .experience {
          position: relative;
          width: 100%;
          height: 100vh;
          z-index: 10;
          overflow: hidden;
        }

        .experience .experience-top {
          position: absolute;
          top: 1%;
          left: 2%;
          font-size: 3rem;
          font-family: bold;
        }

        .experience .experience-middle-container {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .experience .experience-middle {
          transform: scale(calc(var(--progress1) * 8.5)) !important;
          transform-origin: center;
          font-size: 3rem;
          font-family: bold;
        }

        .experience .experience-bottom {
          position: absolute;
          bottom: 1%;
          right: 2%;
          font-size: 3rem;
          font-family: bold;
        }

        section {
          height: 100vh;
          width: 100%;
          margin-top: 1rem;
          font-size: 5rem;
        }
      `}</style>

      <div className="experience">
        <div className="experience-show">
          <h1 className="experience-top">Let Me show you</h1>
          <div className="experience-middle-container">
            <h1 className="experience-middle">Enter My World</h1>
          </div>
          <h1 className="experience-bottom">My Magic Trick</h1>
          <div className="spacer-end"></div>
        </div>
      </div>
      <section>another section</section>
    </>
  );
};

export default Partners;
