import React from 'react'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'


const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <div id='Hero'><Hero /></div>
      <div id='Projects'><Projects /></div>
    </div>
  )
}

export default HomePage