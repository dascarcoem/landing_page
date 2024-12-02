
'use client'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image'
import React from 'react'

const NavData = [
  { 
    id:0,
    title:'Home',
    link:'/',
    imgPath:'/images/home.png'
  },
  {
    id:1,
    title:'Achievement',
    link:'/achievement',
    imgPath:'/images/achievement.png'
  },
  {
    id:2,
    title:'About Us',
    link:'/aboutus',
    imgPath:'/images/aboutus.png'
  },
  {
    id:3,
    title:'Alumni',
    link:'/alumni',
    imgPath:'/images/alumni.png'
  },
  {
    id:4,
    title:'Events',
    link:'/events',
    imgPath:'/images/contact.png'
  },
  {
    id:5,
    title:'Login',
    link:'/login',
  }
  // {
  //   title:'Blog',
  //   link:'/blog',
  //   imgPath:'/images/blog.png'
  // },
  // {
  //   title:'Portfolio',
  //   link:'/portfolio',
  //   imgPath:'/images/portfolio.png'
  // },
  // {
  //   title:'Team',
  //   link:'/team',
  //   imgPath:'/images/team.png'
  // },
  // {
  //   title:'Careers',
  //   link:'/careers',
  //   imgPath:'/images/careers.png'
  // }
];

const OpenedNavbar = ({setIsOpen}) => {
  const [ active , setActive ] = React.useState(0);

  const handleNavigation = (id) => {
    setActive(id);
    redirect(NavData[active].link);
    setIsOpen(false);
  }

  return (
    <div className='w-full h-screen center fixed z-50 center bg-white flex flex-col justify-center items-center '  >
        <Image  src='/icons/close.png' height={60} width={60}  alt='close navbar' className='fixed right-6 lg:right-16 top-6 lg:top-16' onClick={() => setIsOpen(false)} />
        <div className='w-full' >
          <div className='h-full flex flex-row justify-center gap-10' >
            <div className=' h-full relative' >
              <Image src='/images/home.png' height={450} width={450} alt='logo' className='rounded-3xl ' />
              {/* <Image src={NavData[active].imgPath} height={50} width={50} alt='logo' className='rounded-3xl ' /> */}
            </div>
            <div className='grid lg:grid-cols-2 lg:grid-flow-row-dense '  >
              {
                NavData.map((item)=>{
                  return(
                    <div key={item.id} className={`${item.id==active? 'text-black' : 'text-slate-500'} hover:text-black hover:translate-x-10  hover-bullet relative text-2xl md:text-3xl lg:text-6xl font-bold  flex justify-start items-center cursor-pointer `} onClick={() => handleNavigation(item.id)} >
                        {item.title}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default OpenedNavbar