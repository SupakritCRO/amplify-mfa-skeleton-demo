// pages/NotFoundPage.tsx
import NotFoundMessage from '@/components/molecules/NotFoundPage/NotFoundMessage'
import React from 'react'

const NotFoundPage: React.FC = () => {
  return (
    <div className='py-28 2xl:py-40 flex justify-center items-center'>
      <NotFoundMessage />
    </div>
  )
}

export default NotFoundPage
