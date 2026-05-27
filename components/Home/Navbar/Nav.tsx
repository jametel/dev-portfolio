"use client";
import React, { useEffect, useState } from 'react'
import { LuSprout } from 'react-icons/lu'
import { hoverNavClasses, navClasses, NavLinks } from './NavLinks'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {

    const [navBg,setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >=90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };

        handler();

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, []);
    

  return (
        <div className={`transition-all ${navBg ? 
        'bg-elevated-surface/70 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] shadow-md':'fixed'
        } duration-300 h-[9vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/* Logo */ }
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <LuSprout  className='w-5 h-5 text-black hover-animate-text' />
                </div>
                <h1 className="text-xl hidden sm:block md:text-2xl text-[#f0f0f0] font-bold">
                    JAMES BEHRE
                </h1>
            </div>
            {/* Nav Links */ }
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map((link, index)=>{
                    const hoverClass = hoverNavClasses[index % navClasses.length]
                    return (
                        <Link key={link.id} href={link.url} className={`text-base ${hoverClass} text-text-primary font-medium transition-all duration-300`}>
                            <p>{link.label}</p>
                        </Link>
                    )
                })}
            </div>
            { /* Buttons */ }
            <div className='flex items-center space-x-4'>
                {/* CV Button */ }
                <a href="/cv.pdf" download="James_Behre_CV.pdf">
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-border/50 backdrop-blur-sm hover-animate-laser
                    transition-all duration-300 text-text-primary flex items-center space-x-2 border border-border'>
                        <BiDownload className='w-5 h-5' />
                        <span>Download CV</span>
                    </button>
                </a>
                {/* Burger Menu */ }
                <HiBars3BottomRight
                    onClick={openNav}
                    onTouchStart={openNav}
                    className='w-8 h-8 cursor-pointer text-text-primary lg:hidden relative'
                    style={{ padding: '4px', boxSizing: 'content-box' }}
                />
            </div>
        </div>
    </div>
  )
}

export default Nav