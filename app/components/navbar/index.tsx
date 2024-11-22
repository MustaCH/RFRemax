'use client'

import React from 'react'
import { navlinks } from './constants'
import Link from 'next/link';
import { useRouter } from 'next/compat/router';

export const Navbar = () => {
    const route = useRouter()
    const pathname = route?.pathname



  return (
    <>        
        <div className="h-16 md:h-28"></div>  
        <div className='flex justify-between items-center px-12 py-2 md:py-6 bg-[#B0BBC520] border-b border-[#B0BBC540] fixed top-0 w-full h-fit backdrop-blur-md'>
            <div>
                <img src="logo.png" alt="logo-rf" className='w-12 md:w-16' />
            </div>
            <div>
                <ul className='hidden md:flex gap-8'>
                    {navlinks.map((link, index) => (
                        <li key={index}><Link className={!pathname?.includes(link.url) ? 'uppercase hover:underline transition-all duration-300 ease-in-out' : 'uppercase underline'} href={link.url}>{link.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;