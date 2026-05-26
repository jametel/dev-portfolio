"use client";
import React from 'react'

import Tilt from 'react-parallax-tilt';

const languageSkills = [
    {
        name: 'Java',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic'
    },
    {
        name: 'Python',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'C++',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon'
    },
    {
        name: 'TypeScript',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon'
    },
    {
        name: 'SQL',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon'
    },
    {
        name: 'Rust',
        level: 1,
        color: 'text-secondary',
        textColor: 'text-text-secondary',
        tier: 'Common'
    },
];

const toolsSkills = [
    {
        name: 'Git',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic'
    },
    {
        name: 'Linux/Unix',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'PowerShell',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'Next.js',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'Tailwind CSS',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'PostgreSQL',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon'
    },
];

const hobbiesSkills = [
    {
        name: 'Minecraft',
        level: 5,
        color: 'laser-amber',
        textColor: 'text-laser-amber',
        tier: 'Legendary'
    },
    {
        name: 'Whistling',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic'
    },
    {
        name: 'Flowstar',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'Skateboarding',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'Weight Lifting',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare'
    },
    {
        name: 'Movie Watching',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon'
    },
    {
        name: 'Reading',
        level: 1,
        color: 'text-secondary',
        textColor: 'text-text-secondary',
        tier: 'Common'
    },
];

const StarRating = ({ level, textColor }: { level: number, textColor: string }) => {
    return (
        <div className='flex gap-1'>
            {Array.from({ length: 5 }, (_, i) => (
                <span
                    key={i}
                    className={`${textColor} text-sm`}
                    style={{ opacity: i < level ? 1 : 0.2 }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const Skills = () => {
  return (
    <div className='text-text-primary pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-text-primary'>
            My Skills
        </h1>
        <h1 className='text-xl font-bold text-text-primary text-center mt-16'>Languages</h1>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {languageSkills.map((skill) => {
                return (
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400} className='hover:z-100'>
                        <div className={`bg-card-bg/80 text-center w-60 h-40 rounded-3xl flex flex-col items-center 
                        justify-center shadow-lg transition hover:scale-105 border border-${skill.color}/50 shadow-${skill.color}/20
                        hover:bg-hover-state`}>
                            <p className='text-2xl font-semibold text-text-primary pb-4'>{skill.name}</p>
                            <div className='text-5xl mb-4 text-text-secondary'><StarRating level={skill.level} textColor={skill.textColor}/></div>
                            <p className={`text-sm font-bold ${skill.textColor}`}>{skill.tier}</p>
                        </div>
                    </Tilt>
                )
            })}
        </div>
        <h1 className='text-xl font-bold text-text-primary text-center mt-16'>Tools</h1>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {toolsSkills.map((skill) => {
                return (
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400} className='hover:z-100'>
                        <div className={`bg-card-bg/80 text-center w-60 h-40 rounded-3xl flex flex-col items-center 
                        justify-center shadow-lg transition hover:scale-105 border border-${skill.color}/50 shadow-${skill.color}/20
                        hover:bg-hover-state`}>
                            <p className='text-2xl font-semibold text-text-primary pb-4'>{skill.name}</p>
                            <div className='text-5xl mb-4 text-text-secondary'><StarRating level={skill.level} textColor={skill.textColor}/></div>
                            <p className={`text-sm font-bold ${skill.textColor}`}>{skill.tier}</p>
                        </div>
                    </Tilt>
                )
            })}
        </div>
        <h1 className='text-xl font-bold text-text-primary text-center mt-16'>Hobbies</h1>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {hobbiesSkills.map((skill) => {
                return (
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400} className='hover:z-100'>
                        <div className={`bg-card-bg/80 text-center w-60 h-40 rounded-3xl flex flex-col items-center 
                        justify-center shadow-lg transition hover:scale-105 border border-${skill.color}/50 shadow-${skill.color}/20
                        hover:bg-hover-state`}>
                            <p className='text-2xl font-semibold text-text-primary pb-4'>{skill.name}</p>
                            <div className='text-5xl mb-4 text-text-secondary'><StarRating level={skill.level} textColor={skill.textColor}/></div>
                            <p className={`text-sm font-bold ${skill.textColor}`}>{skill.tier}</p>
                        </div>
                    </Tilt>
                )
            })}
        </div>
        <div className="hidden border-text-secondary/50 border-laser-cyan/50 border-laser-purple/50 border-laser-amber/50 border-laser-green/50
                        shadow-text-secondary/20 shadow-laser-cyan/20 shadow-laser-purple/20 shadow-laser-amber/20 shadow-laser-green/20" />
    </div>
  )
}

export default Skills