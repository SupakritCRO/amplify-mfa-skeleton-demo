import React from 'react'
import RMI_text from '@/assets/logo/RMI.svg'
import { TitleItemProps } from './Interfaces/Navigation'
import Title from '@/components/atoms/Text/Title'

const TitleItem: React.FC<TitleItemProps> = ({ Icon }) => {
  return (
    <div className='flex justify-center items-center h-[70px] w-full'>
      <Title>
        <Icon />
        <img src={RMI_text} alt='rmi-text' />
      </Title>
    </div>
  )
}

export default TitleItem
