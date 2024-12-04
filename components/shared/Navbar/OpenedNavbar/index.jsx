'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const NavData = [
  { id: 0, title: 'Home', link: '/', imgPath: '/images/home.png' },
  { id: 1, title: 'Achievement', link: '/achievement', imgPath: '/images/default.jpg' },
  { id: 2, title: 'About Us', link: '/aboutus', imgPath:'/images/home.png' },
  { id: 3, title: 'Alumni', link: '/alumni', imgPath: '/images/default.jpg' },
  { id: 4, title: 'Events', link: '/events', imgPath: '/images/home.png' },
  { id: 5, title: 'Login', link: '/login' , imgPath: '/images/default.jpg' },
];

const OpenedNavbar = ({ setIsOpen }) => {
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // For navigation
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Set the default active based on the current pathname
    const matchActive = () => {
      const matchedNav = NavData.find((item) => item.link === pathname);
      if (matchedNav) setActive(matchedNav.id);
    };
    matchActive();
  }, [pathname]);

  const handleNavigation = (id) => {
    setActive(id);
    router.push(NavData[id].link); // Navigate to the selected link
    setIsOpen(false);
  };

  return (
    <div className="w-full h-screen fixed z-50 bg-white flex flex-col justify-center items-center">
      <Image
        src="/icons/close.png"
        height={60}
        width={60}
        alt="close navbar"
        className="fixed right-6 lg:right-16 top-6 lg:top-16 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
      <div className="w-full">
        <div className="h-full flex flex-row justify-start mx-10 lg:mx-0 lg:justify-center gap-10">
          <div className="h-full hidden lg:block relative">
            <Image
              src={NavData[active].imgPath || '/images/default.jpg'}
              height={450}
              width={450}
              alt="logo"
              className="rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-row-dense gap-7 lg:gap-0">
            {NavData.map((item) => (
              <div
                key={item.id}
                className={`${
                  item.id === active ? 'text-black' : 'text-slate-500'
                } hover:text-black hover:translate-x-10 hover-bullet relative text-3xl md:text-4xl lg:text-6xl font-bold flex justify-start items-center cursor-pointer`}
                onClick={() => handleNavigation(item.id)}
                onMouseEnter={() => setActive(item.id)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenedNavbar;
