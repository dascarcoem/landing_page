"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { ButtonsCard } from "../tailwindcss-buttons";
import Image from "next/image";

export const Timeline = ({ data, data2 }) => {
  const [event, setEvent] = useState(true);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isFilledu, setIsFilledu] = useState(true);
  const [isFilledp, setIsFilledp] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamically calculate the transform for the line height
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const handleClick = (event) => {
    setIsFilledu(!isFilledu);
    setIsFilledp(!isFilledp);
    setEvent((prevstate) => !prevstate);
    event.target.className = "";
    console.log("clicked");
  };

  const buttons = [
    {
      name: "Past Events",
      description: "Simple button that inverts on hover",
      component: (
        <button className="p-[3px] relative" onClick={handleClick}>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg ${
              isFilledu ? "opacity-100" : "opacity-50"
            } transition-opacity duration-300`}
          />
          <div
            className={`px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white ${
              isFilledu ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" : "hover:bg-gradient-to-r hover:from-blue-500 hover:bg-blue-600"
            }`}
          >
            Upcoming Events
          </div>
        </button>
      ),
    },
    {
      name: "Past Events",
      description: "Simple button that inverts on hover",
      component: (
        <button className="p-[3px] relative" onClick={handleClick}>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg ${
              isFilledp ? "opacity-100" : "opacity-50"
            } transition-opacity duration-300`}
          />
          <div
            className={`px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white ${
              isFilledp ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" : "hover:bg-gradient-to-r hover:from-blue-500 hover:bg-blue-600"
            }`}
          >
            Past Events
          </div>
        </button>
      ),
    },
  ];

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 mb-32">
        <h2 className="text-5xl md:text-7xl mb-10 text-white max-w-4xl ">
          Events By Dasca
        </h2>
        <p className="text-neutral-300 text-sm md:text-2xl">
          Dasca brings people together through vibrant events that inspire, connect, and celebrate life. From grand galas and cultural festivals to insightful workshops and corporate gatherings, each event is thoughtfully curated to create memorable experiences and foster meaningful connections.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        {buttons.map((button, idx) => (
          <div key={idx}>{button.component}</div>
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {(isFilledu ? data2 : data).map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
            >
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center"
              >
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2"
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.Date}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="text-white md:hidden block text-3xl mb-4 text-left font-bold">
                {item.name}
              </h3>
              <p className="text-white dark:text-neutral-200 text-sm md:text-4xl mb-4">
                {item.headline}
              </p>
              <p className="text-white dark:text-neutral-200 text-sm md:text-base mb-4">
                {item.Venue}
              </p>
              <p className="text-white dark:text-neutral-200 text-sm md:text-base mb-4">
                {item.description}
              </p>

              {item.image.src && (
                <div className="grid grid-cols-1 gap-4">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform, // Ensure this dynamically updates
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};