import Hero from "@/components/home/Hero";
import Objectives from "@/components/home/Objectives";
import OurDomains from "@/components/home/OurDomains";
import Partners from "@/components/home/Partners/indes";
import Vision from "@/components/home/Vision";

export default function Home() {
  return (
    <main className="w-screen flex flex-col" >
      <Hero />
      <Objectives />
      <OurDomains />
      <Partners />
      <Vision />
    </main>
  );
}
