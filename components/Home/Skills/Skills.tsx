"use client";
import React from 'react'
import { FaBook, FaGit, FaJava, FaLinux, FaPython, FaRust } from 'react-icons/fa';
import { GiSkateboard, GiWhistle } from 'react-icons/gi';
import { MdLocalMovies } from 'react-icons/md';
import { RiNextjsFill } from 'react-icons/ri';
import { SiCplusplus, SiMysql, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBarbellFilled, TbBrandMinecraft } from 'react-icons/tb';
import { VscTerminalPowershell } from 'react-icons/vsc';

import Tilt from 'react-parallax-tilt';
import SkillsCard from './SkillsCard';

const languageSkills = [
    {
        name: 'Java',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic',
        icon: <FaJava />
    },
    {
        name: 'Python',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <FaPython />
    },
    {
        name: 'C++',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon',
        icon: <SiCplusplus />
    },
    {
        name: 'TypeScript',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon',
        icon: <SiTypescript />
    },
    {
        name: 'SQL',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon',
        icon: <SiMysql />
    },
    {
        name: 'Rust',
        level: 1,
        color: 'text-secondary',
        textColor: 'text-text-secondary',
        tier: 'Common',
        icon: <FaRust />
    },
];

const toolsSkills = [
    {
        name: 'Git',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic',
        icon: <FaGit />
    },
    {
        name: 'Linux/Unix',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <FaLinux />
    },
    {
        name: 'PowerShell',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <VscTerminalPowershell />
    },
    {
        name: 'Next.js',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <RiNextjsFill />
    },
    {
        name: 'Tailwind CSS',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <SiTailwindcss />
    },
    {
        name: 'PostgreSQL',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon',
        icon: <SiPostgresql />
    },
];

const hobbiesSkills = [
    {
        name: 'Minecraft',
        level: 5,
        color: 'laser-amber',
        textColor: 'text-laser-amber',
        tier: 'Legendary',
        icon: <TbBrandMinecraft />,
        link: 'https://namemc.com/profile/jmxs'
    },
    {
        name: 'Whistling',
        level: 4,
        color: 'laser-purple',
        textColor: 'text-laser-purple',
        tier: 'Epic',
        icon: <GiWhistle />
    },
    {
        name: 'Flowstar',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <span role='img' aria-label='Flowstar' style={{ fontSize: '30px', cursor: 'pointer' }}>𑁍</span>,
        iconClasses: 'hover:animate-spin'
    },
    {
        name: 'Skateboarding',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <GiSkateboard />
    },
    {
        name: 'Weight Lifting',
        level: 3,
        color: 'laser-cyan',
        textColor: 'text-laser-cyan',
        tier: 'Rare',
        icon: <TbBarbellFilled />
    },
    {
        name: 'Movie Watching',
        level: 2,
        color: 'laser-green',
        textColor: 'text-laser-green',
        tier: 'Uncommon',
        icon: <MdLocalMovies />
    },
    {
        name: 'Reading',
        level: 1,
        color: 'text-secondary',
        textColor: 'text-text-secondary',
        tier: 'Common',
        icon: <FaBook />
    },
];


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
                    <SkillsCard key={skill.name} {...skill} />
                )
            })}
        </div>
        <h1 className='text-xl font-bold text-text-primary text-center mt-16'>Tools</h1>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {toolsSkills.map((skill) => {
                return (
                    <SkillsCard key={skill.name} {...skill} />
                )
            })}
        </div>
        <h1 className='text-xl font-bold text-text-primary text-center mt-16'>Hobbies</h1>
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {hobbiesSkills.map((skill) => {
                return (
                    <SkillsCard key={skill.name} {...skill} />
                )
            })}
        </div>
        <div className="hidden border-text-secondary/50 border-laser-cyan/50 border-laser-purple/50 border-laser-amber/50 border-laser-green/50
                        shadow-text-secondary/20 shadow-laser-cyan/20 shadow-laser-purple/20 shadow-laser-amber/20 shadow-laser-green/20" />
    </div>
  )
}

export default Skills