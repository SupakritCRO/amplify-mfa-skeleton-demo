import React, { useContext } from 'react'

const NotFoundMessage: React.FC = () => {


  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <p className='text-lg'>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFoundMessage
