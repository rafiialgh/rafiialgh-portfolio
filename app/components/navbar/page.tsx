'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // const links = [
    // { path: '/dashboard', label: 'Home' },
    // { path: '/#contact-me', label: 'Contact Me' },
    // { path: '/blog', label: 'Blog' },
  // ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur'>
      <div className='max-w-6xl flex justify-between md:items-center py-5 mx-5 md:mx-10 xl:mx-auto'>
        <div className='md:flex justify-between md:w-full'>
          <h1 className='text-gray-900 font-bold font-plusJakartaSans text-xl md:text-2xl'>
            rafiialgh.
          </h1>
          {/* <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row md:gap-6 mt-4 md:mt-0`}
          >
            {links.map(({ path, label }) => (
              <li
                key={path}
                className={`font-commissioner text-lg font-semibold hover:text-gray-900 transition-all leading-9 ${
                  pathname === path ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                <Link href={path}>
                  <span onClick={toggleMenu}>{label}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        {/* <div className='md:hidden w-fit h-fit bg-slate-200 rounded-md p-1' onClick={toggleMenu}>
          <svg
            className='w-8 h-8 cursor-pointer'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            color='black'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </div> */}
      </div>
    </nav>
  );
}
