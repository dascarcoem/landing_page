import MeteorsBg from '@/components/ui/Meteors'
import React from 'react'

const MeteorsSection = () => {
  return (
    <div className='w-screen overflow-hidden relative h-[35vh]' >
    {/* <div className='w-screen overflow-hidden relative h-[35vh] bg-[#262626] -z-20' > */}
        <MeteorsBg number={50} />
    </div>
  )
}

export default MeteorsSection