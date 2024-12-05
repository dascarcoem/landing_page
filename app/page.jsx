import Hero from "@/components/home/Hero";
import Meteors from "@/components/home/Meteors";
import Objectives from "@/components/home/Objectives";
import OurDomains from "@/components/home/OurDomains";
import Partners from "@/components/home/Partners/indes";
import Vision from "@/components/home/Vision";

export default function Home() {
  return (
    <main className="w-screen flex flex-col" >
      <Hero />
      <Objectives />
      <Meteors />
      <OurDomains />
      <Partners />
      <Vision />
    </main>
  );
}
