'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Logo = ({ isDark }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.offsetHeight || 0;
      setShowLogo(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showLogo) return null;

  return (
    <aside
      className={`flex h-full flex-col gap-2 fixed z-30 left-3 top-3 md:left-7 md:top-7 ${
        isDark ? 'text-white' : 'text-black'
      }`}
    >
      {/* <Image src="/images/dasca-logo.png" width={100} height={100} alt="DASCA Logo" /> */}
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[20px] lg:text-[40px] font-medium leading-none">DASCA</h1>
        {/* <p className='text-[8px] md:text-[15px] lg:text-[18px]' >Making Every Byte Count for Good</p> */}
        <p className='text-[8px] md:text-[15px] lg:text-[18px]' >Data Science Association</p>
      </div>
    </aside>
  );
};

export default Logo;
