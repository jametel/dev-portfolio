import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string;
    Icon: IconType;
    date?: string;
};
const ExperienceCard = ({ role, Icon, date }: Props) => {
  return (
    <div className='mb-6'>
        <div className='flex items-start space-x-6 '></div>
    </div>
  )
}

export default ExperienceCard