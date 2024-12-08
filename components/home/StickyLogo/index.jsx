'use client'
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
      <div className="flex flex-col">
        <h1 className="text-[15px] md:text-[20px] lg:text-[40px]">DASCA</h1>
        <p>Making Every Byte Count for Good</p>
      </div>
    </aside>
  );
};

export default Logo;
