import React from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'


const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <div id='Hero'><Hero /></div>
      <div id='Projects' className='scroll-mt-10'><Projects /></div>
      <div id='Skills' className='scroll-mt-10'><Skills /></div>
    </div>
  )
}

export default HomePage