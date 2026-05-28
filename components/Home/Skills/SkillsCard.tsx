import React from 'react'
import Tilt from 'react-parallax-tilt';

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


type Props = {
    name: string;
    level: number;
    color: string;
    textColor: string;
    tier: string;
    icon: React.ReactNode;
    iconClasses?: string;
    link?: string;
};

const SkillsCard = ({ name, level, color, textColor, tier, icon, iconClasses, link = '' }: Props) => {
  return (
    <a {...link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {}} className='hover:z-100'>
        <Tilt key={name} scale={1.5} transitionSpeed={400}>
            <div className={`bg-card-bg/80 text-center w-60 h-50 rounded-3xl flex flex-col items-center 
            justify-center shadow-lg transition hover:scale-105 border border-${color}/50 shadow-${color}/20
            hover:bg-hover-state/50 hover:backdrop-blur-sm`}>
                <p className='text-2xl font-semibold text-text-primary pb-4'>{name}</p>
                <div className={`text-3xl mb-4 text-text-primary ${iconClasses}`}>{icon}</div>
                <div className='text-5xl mb-4 text-text-secondary'><StarRating level={level} textColor={textColor}/></div>
                <p className={`text-sm font-bold ${textColor}`}>{   tier}</p>
            </div>
        </Tilt>
    </a>
  )
}

export default SkillsCard