import React from 'react'
import { navClasses, NavLinks, textNavClasses } from './NavLinks'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';
    const pointerEvents = showNav ? 'pointer-events-auto' : 'pointer-events-none';

  return (
    <div className='transition-all'>
        {/* Overlay */ }
        <div className={`fixed inset-0 ${navOpen} ${pointerEvents} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70
        w-full h-screen`} ></div>
        {/* Nav Links */ }
        <div className={`text-text-primary ${navOpen} ${pointerEvents} fixed justify-center flex flex-col h-full transform transition-all
        duration-500 delay-200 w-[80%] sm:w-[60%] bg-elevated-surface space-y-6 z-[100050] right-0`}>
            {NavLinks.map((link, index)=>{
                const linkClass = textNavClasses[index % textNavClasses.length]
                return <Link key={link.id} href={link.url}>
                    <p onClick={closeNav} className={`${linkClass} w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-text-primary sm:text-[30px]`}>{link.label}</p>
                </Link>
            })}
            {/* Cross Icon */ }
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    </div>
  )
}

export default MobileNav