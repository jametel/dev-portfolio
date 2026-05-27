"use client";

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'


const HomePage = () => {
  useEffect(() => {
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let index = 0;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[index]) {
        index++;
        if (index === KONAMI.length) {
          window.dispatchEvent(new Event('lasershow'));
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
   
  return (
    <div className='overflow-hidden'>
      <div id='Hero'><Hero /></div>
      <div id='Projects' className='scroll-mt-10'><Projects /></div>
      <div id='Skills' className='scroll-mt-10'><Skills /></div>
      <div id='Experience' className='scroll-mt-10'><Experience /></div>
      <div id='Contact' className='scroll-mt-10'><Contact /></div>
    </div>

    
  )
}

export default HomePage