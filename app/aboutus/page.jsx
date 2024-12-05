import Gallery from '@/components/aboutus/Gallery'
import Hero from '@/components/aboutus/Hero'
import OurTeam from '@/components/aboutus/OurTeam'
import ScaleUp from '@/components/aboutus/ScaleUp'
import React from 'react'

const AboutUs = () => {
  return (
    <main className='w-screen flex-col' >
      <Hero />
      <ScaleUp />
      <OurTeam />
      <Gallery />
    </main>
  )
}

export default AboutUs