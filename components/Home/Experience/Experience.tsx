import React from 'react'
import ExperienceCard from './ExperienceCard'
import { RiTeamFill } from 'react-icons/ri'
import { IconType } from 'react-icons';
import { TbSchool } from 'react-icons/tb';

const ODULogo: IconType = ({ color = 'white', size = 100, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="70.7626953125 0 38.393470764160156 30.111499786376953"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M71.3941 9.7561C71.3941 9.7561 72.177 8.22042 74.4956 8.03975C76.8141 7.88919 77.868 9.30443 77.868 9.30443C74.074 11.894 76.3926 18.5486 78.5907 23.1256H76.6636C73.1707 19.1208 69.1959 13.3695 71.3941 9.7561Z" fill={color} />
        <path d="M89.9732 25.4442H103.403C103.403 25.4442 103.102 26.197 103.102 27.8531C103.102 29.3286 103.433 30.1115 103.433 30.1115H89.9431H76.4531C76.4531 30.1115 76.7843 29.3286 76.7843 27.8531C76.7843 26.197 76.4832 25.4442 76.4832 25.4442H89.9732Z" fill={color} />
        <path d="M92.1412 2.16803C92.1412 3.37248 91.1777 4.33605 89.9732 4.33605C88.7687 4.33605 87.8052 3.37248 87.8052 2.16803C87.8052 0.963567 88.7687 0 89.9732 0C91.1777 0 92.1412 0.963567 92.1412 2.16803Z" fill={color} />
        <path d="M99.5183 6.2632C99.5183 6.2632 98.5246 4.60707 95.935 4.60707C93.3454 4.60707 92.2915 6.2632 92.2915 6.2632C95.1521 11.2015 93.2551 18.639 91.6592 23.1256H93.4358C97.2599 18.4583 102.56 10.5691 99.5183 6.2632Z" fill={color} />
        <path d="M108.522 9.7561C108.522 9.7561 107.739 8.22042 105.42 8.03975C103.102 7.88919 102.048 9.30443 102.048 9.30443C105.842 11.894 103.523 18.5486 101.325 23.1256H103.252C106.775 19.1208 110.72 13.3695 108.522 9.7561Z" fill={color} />
        <path d="M80.4278 6.2632C80.4278 6.2632 81.4214 4.60707 84.011 4.60707C86.6006 4.60707 87.6545 6.2632 87.6545 6.2632C84.7939 11.2015 86.691 18.639 88.2869 23.1256H86.4802C82.6861 18.4583 77.3564 10.5691 80.4278 6.2632Z" fill={color} />
    </svg>
);

const Experience = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* WORK EXPERIENCE */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-text-primary'>Work Experience</h1>
                <div className='mt-10'>
                    <ExperienceCard Icon={RiTeamFill} role='Vibe Queue | Project Lead' borderColor='border-laser-purple/50' shadowColor='shadow-laser-purple/20'
                    description='Lead project manager and software developer of a team of 5. ' />
                </div>
            </div>
            {/* EDUCATION EXPERIENCE */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-text-primary'>Education</h1>
                <div className='mt-10'>
                    <ExperienceCard Icon={ODULogo} role='Bachelor in Computer Science' date='2023 - Current' borderColor='border-laser-cyan/50' shadowColor='shadow-laser-cyan/20'
                    description='Senior of Bachelor of Science in Computer Science at Old Dominion University. I have a 3.5 GPA and am part of the Honors College.' />
                </div>
                <div className='mt-10'>
                    <ExperienceCard Icon={TbSchool} role='Advanced High School Diploma' date='2019 - 2023' borderColor='border-laser-amber/50' shadowColor='shadow-laser-amber/20'
                    description='Graduated with honors from King George High School. I had a 4.125 GPA while maintaining a strong focus on STEM subjects.' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience