import React from 'react'
import { BiEnvelope, BiMap } from 'react-icons/bi'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] sm:w-[70%] mx-auto items-center justify-center grid'>
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center'>Let's Get in Touch</h1>
                <p className='text-text-secondary text-base sm:text-lg mt-6 text-center'>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. <br />
                    Feel free to reach out to me through any of the platforms below, or send me an email.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 items-center'>
                    <div className='mt-8 items-center justify-center grid'>
                        {/* <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-text-primary' />
                            <p className='text-xl font-bold text-g4 text-text-primary'>james@behre.dev</p>
                        </div> */}
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-text-primary' />
                            <p className='text-xl font-bold text-g4 text-text-primary'>Norfolk, Virginia</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-8 space-x-3 justify-center '>
                        <a href='https://www.linkedin.com/in/james-behre/' target='_blank' rel='noopener noreferrer'>
                            <div className='w-16 h-16 bg-elevated-surface rounded-full flex items-center justify-center cursor-pointer flex-col
                            hover:bg-hover-state border shadow-xl border-laser-cyan/50 shadow-laser-cyan/20'>
                                <FaLinkedinIn className='w-6 h-6 text-text-primary' />
                            </div>
                        </a>
                        <a href='https://github.com/jametel' target='_blank' rel='noopener noreferrer'>
                            <div className='w-16 h-16 bg-elevated-surface rounded-full flex items-center justify-center cursor-pointer flex-col
                            hover:bg-hover-state border shadow-xl border-laser-green/50 shadow-laser-green/20'>
                                <FaGithub className='w-6 h-6 text-text-primary' />
                            </div>
                        </a>
                        <a href='mailto:james@behre.dev' target='_blank' rel='noopener noreferrer'>
                            <div className='w-16 h-16 bg-elevated-surface rounded-full flex items-center justify-center cursor-pointer flex-col
                            hover:bg-hover-state border shadow-xl border-laser-amber/50 shadow-laser-amber/20'>
                                <FaEnvelope className='w-6 h-6 text-text-primary' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact