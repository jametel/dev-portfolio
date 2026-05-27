import React from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'


const HomePage = () => {
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