import { GradualSpacing } from '@/components/ui/GradualSpacing'
import React from 'react'

const OurTeam = () => {
  return (
    <div className='w-full h-screen flex flex-col text-4xl px-[calc(100vw*0.2)] py-[calc(100vw*0.2)] ' >
      <h1 className='flex justify-center items-end gap-2 lg:gap-3 text-7xl' >
        <span className='text-8xl' >M</span>
        <GradualSpacing text='eet Our Dynamic Team' className={'pb-1'} />
      </h1>
    </div>
  )
}

export default OurTeam