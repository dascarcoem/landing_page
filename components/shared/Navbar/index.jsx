'use client'
import Image from 'next/image'
import React from 'react'
import OpenedNavbar from './OpenedNavbar'


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  if(isOpen){
    return <OpenedNavbar setIsOpen={setIsOpen} />
  }
  else{
    return (
      <div className='fixed z-50 right-7 top-7' >
        <Image src='/icons/menu.png' width={100} height={100} onClick={() => setIsOpen(true)} alt='Navbar menu Icon' /> 
      </div>
    )
  }
}

export default Navbar