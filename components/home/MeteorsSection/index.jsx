import MeteorsBg from '@/components/ui/Meteors'
import React from 'react'

const MeteorsSection = () => {
  return (
    <div className='w-screen overflow-hidden relative h-[35vh]' >
        <MeteorsBg number={50} />
    </div>
  )
}

export default MeteorsSection