'use client';
import { count } from 'console';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Typewriter } from 'react-simple-typewriter'
import LaserBackground from './LaserBackground';

const laserColors = ['#00ffcc', '#cc00ff', '#ff0055', '#ffaa00', '#39ff14'];
// const hoverLasers = [
//     'hover:text-laser-red',
//     'hover:text-laser-cyan',
//     'hover:text-laser-purple',
//     'hover:text-laser-amber',
//     'hover:text-laser-green'
// ]

const Hero = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const [showImage, setShowImage] = useState(false);
    

    useEffect(() => {
        const onStart = () => setShowImage(true);
        const onEnd = () => setShowImage(false);

        window.addEventListener('lasershow', onStart);
        window.addEventListener('lasershow-ended', onEnd);

        return () => {
            window.removeEventListener('lasershow', onStart);
            window.removeEventListener('lasershow-ended', onEnd);
        };
    }, []);
    
    return (
    <div className='relative h-screen flex items-center justify-center text-text-primary overflow-hidden flex-col'>
        <LaserBackground />
        <div className='relative z-10 flex flex-col items-center'>
            {showImage && (
                <Image src='/images/profile-photo.jpg' alt='Profile Photo' width={150} height={150} className='rounded-full'
                style={{
                    boxShadow: `
                        0 0 0 2px rgba(204, 0, 255, 0.8),
                        0 0 15px 5px rgba(204, 0, 255, 0.5),
                        0 0 40px 15px rgba(204, 0, 255, 0.2)
                    `
                }} /> 
            )}
            {!showImage && (    
                <Image src='/images/profile-photo.jpg' alt='Profile Photo' width={150} height={150} className='rounded-full'
                style={{
                    boxShadow: `
                        0 0 0 3px rgba(255, 253, 208, 0.6),
                        0 0 20px 6px rgba(255, 253, 208, 0.35),
                        0 0 60px 20px rgba(255, 253, 208, 0.15),
                        0 0 120px 40px rgba(255, 253, 208, 0.06)
                    `
                }} />)}
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                The full stack.<br /> Frontend, backend, <br /> <span className='text-text-secondary'>and questionable commit messages.</span>
            </h1>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font:medium flex items-center bg-gradient-to-br from-laser-red/10 via-laser-cyan/10 to-laser-purple/10 backdrop-blur-sm rounded-lg py-2'>
                Hi! I'm James - A Passionate
                <span className='pl-2' style={{ color: laserColors[colorIndex], transition: 'color 0.3s' }}>
                    <Typewriter words={[' Computer Science Student', ' Frontend Developer', ' Backend Developer', 'Web Developer']}
                    loop={true}
                    onType={(count) => setColorIndex(count % laserColors.length)}
                    cursor
                    cursorStyle='_'
                    delaySpeed={150}
                    deleteSpeed={50}
                    />
                </span>
            </h2>
                <button 
                onClick={() => window.location.href = "#Projects"}
                className='mt-6 px-10 py-4 bg-border/50 hover-animate-laser transition-all duration-300
                cursor-pointer rounded-full text-lg font-medium border border-border '>
                    <span>See my work</span>
                    <BsArrowRight className='w-5 h-5 ml-2 inline-block ' />
                </button>
        </div>
    </div>
  )
}

export default Hero