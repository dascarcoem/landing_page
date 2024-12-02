import Gallery from '@/components/aboutus/Gallery'
import Hero from '@/components/aboutus/Hero'
import OurTeam from '@/components/aboutus/OurTeam'
import React from 'react'

const AboutUs = () => {
  return (
    <main className='w-screen flex-col' >
      <Hero />
      <OurTeam />
      <Gallery />
    </main>
  )
}

export default AboutUs