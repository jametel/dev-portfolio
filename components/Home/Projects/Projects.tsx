import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-text-primary'>
          Some of my Recent Work
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
          <a href='https://beggl001.github.io/Team-Website-2026/' target='_blank' rel='noopener noreferrer'>
            <div className='border-2 rounded-lg border-laser-cyan/50 bg-card-bg shadow-lg shadow-laser-cyan/20 hover:bg-hover-state'>
              <div className='relative w-full h-100'>
                <Image src='/images/projects/vibe-queue.png' alt='VibeQueue Image' fill className='rounded object-cover object-top'/>
              </div>
              <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-text-primary px-4'>VibeQueue</h1>
              <h1 className='pt-2 font-medium text-text-secondary px-4 pb-4'>The Modern Jukebox for Local Spaces</h1>
              <div className='flex flex-wrap gap-2 px-4 pb-4'>
                <span className='px-3 py-1 bg-laser-cyan/20 text-laser-cyan text-sm rounded-full border border-laser-cyan/50'>Python</span>
                <span className='px-3 py-1 bg-laser-cyan/20 text-laser-cyan text-sm rounded-full border border-laser-cyan/50'>Django</span>
                <span className='px-3 py-1 bg-laser-cyan/20 text-laser-cyan text-sm rounded-full border border-laser-cyan/50'>PostgreSQL</span>
              </div>
            </div>
          </a>
          <a>
            <div className='border-2 rounded-lg border-laser-amber/50 bg-card-bg shadow-lg shadow-laser-amber/20 hover:bg-hover-state'>
              <div className='relative w-full h-100'>
                <Image src='/images/projects/website-project.png' alt='Portfolio Image' fill className='rounded object-cover'/>
              </div>
              <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-text-primary px-4'>Portfolio Site</h1>
              <h1 className='pt-2 font-medium text-text-secondary px-4 pb-4'>Have you heard of the Konami code?</h1>
              <div className='flex flex-wrap gap-2 px-4 pb-4'>
                <span className='px-3 py-1 bg-laser-amber/20 text-laser-amber text-sm rounded-full border border-laser-amber/50'>Next.js</span>
                <span className='px-3 py-1 bg-laser-amber/20 text-laser-amber text-sm rounded-full border border-laser-amber/50'>TypeScript</span>
                <span className='px-3 py-1 bg-laser-amber/20 text-laser-amber text-sm rounded-full border border-laser-amber/50'>Tailwind CSS</span>
              </div>
            </div>
          </a>
      </div>
    </div>
  )
}

export default Projects