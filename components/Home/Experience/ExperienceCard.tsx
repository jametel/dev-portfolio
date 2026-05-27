import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string;
    Icon: IconType;
    date?: string;
    borderColor: string;
    shadowColor: string;
    description: string;
};
const ExperienceCard = ({ role, Icon, date, borderColor, shadowColor, description }: Props) => {
  return (
    <div className='mb-6'>
        <div className={`flex items-start space-x-6 bg-card-bg/80 transition-all duration-300 p-4 sm:p-8
        rounded-lg border shadow-lg ${borderColor} ${shadowColor}`}>
            <div className='sm:w-14 sm:h-14 w-10 h-10 rounded-full flex items-center justify-center flex-col'>
                <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-text-primary' />
            </div>
            <div className='flex-1'>
                {date && (
                    <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-elevated-surface text-text-secondary w-fit
                    sm:text-lg text-sm font-bold'>
                        {date}
                    </h1>
                )}
                <h1 className='text-text-primary text-xl sm:text-2xl font-semibold'>
                    {role}
                </h1>
                <p className='text-text-secondary text-sm sm:text-base'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard