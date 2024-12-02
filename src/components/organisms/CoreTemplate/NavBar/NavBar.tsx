import UserMenu from '@/components/molecules/UserMenu/UserMenu'
import React, { useState } from 'react'
import { Fa42Group } from 'react-icons/fa6'

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='bg-indigo-600 border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Fa42Group className='h-8 w-8 text-white' />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </a>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <div className='mr-2'>
                <UserMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
