import React from 'react'
import ExperienceCard from './ExperienceCard'
import { RiTeamFill } from 'react-icons/ri'

const Experience = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* WORK EXPERIENCE */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-text-primary'>Work Experience</h1>
                <div className='mt-10'>
                    <ExperienceCard Icon={RiTeamFill} role='Project Lead'/>
                </div>
            </div>
            {/* EDUCATION EXPERIENCE */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-text-primary'>Education</h1>
                <div className='mt-10'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience