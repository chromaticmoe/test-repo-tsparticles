'use client';

import Header from "@/app/components/header/header";
import About from "@/app/components/about/about";
import ParticlesBackground from "@/app/components/particles-js/particlesbackground";
import Work from "@/app/components/work/work";

export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <Header />
      <About />
      <Work />
    </div>
    
  )
}
