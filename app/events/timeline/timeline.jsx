import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline/timeline.jsx";

export function TimelineDemo() {
  const data = [
    {
      name: "Aakruti",
      headline:"Aakruti",
      image: {
        src: "/event/dspl.jpg",
        alt: "startup template",
        width: 500,
        height: 500,
      },
     Venue:"RBU",
     Date:"Jan'2024",
      description: "AAKRUTI'24 - A Techno Cultural event featuring a technical seminar, open-for-all fun activities, culminating in a captivating cultural night.",
    },
    {
      name: "Dspl",
      headline:"Dspl",
      image: {
        src: "/event/dspl.jpg",
        alt: "cards template",
        width: 500,
        height: 500,
      },
      Venue:"RBU",
      Date:"Early 2023",
      description: "DSPL - Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more examples of beautiful designs I built.",

    },
    {
      title: "",
      description: "",
      image: {
        src: "",
        alt: "",
        width: 0,
        height: 0,
      },
    },
  ];
  
  const data2 = [
    {name: "Aakruti2.0",
      headline:"Aakruti 2.0",
      image: {
        src: "/event/dspl.jpg",
        alt: "startup template",
        width: 500,
        height: 500,
      },
     Venue:"RBU",
     Date:"Jan'2025",
      description: "AAKRUTI'24 - A Techno Cultural event featuring a technical seminar, open-for-all fun activities, culminating in a captivating cultural night.",
    },
    {
      name: "Dspl 2.0",
      headline:"Dspl 2.0",
      image: {
        src: "/event/dspl.jpg",
        alt: "cards template",
        width: 500,
        height: 500,
      },
      Venue:"RBU",
      Date:"Jan'2025",
      description: "DSPL - Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more examples of beautiful designs I built.",
    },
    {
      title: "",
      description: "",
      image: {
        src: "",
        alt: "",
        width: 0,
        height: 0,
      },
    },
  ];
  
  return (
    (<div className="w-full">
      <Timeline data={data} data2={data2}/>
    </div>)
  );
}
