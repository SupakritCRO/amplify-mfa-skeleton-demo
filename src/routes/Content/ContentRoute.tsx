import { FormEvent, useEffect, useRef, useState } from 'react'

import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { Route, Routes, useNavigate } from 'react-router-dom'

import NotFoundPage from '@/pages/NotFoundPage'

import Authenticator from '@/providers/AuthenticatorProvider'

import NavBar from '../../components/organisms/CoreTemplate/NavBar/NavBar'
import Footer from '../../components/organisms/CoreTemplate/Footer/Footer'

import { HomePage } from '@/pages/Home'


import Watermark from '@/components/atoms/Watermark/Watermark'


const ContentRoute = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState<boolean>(false)

  const isTokenExpired = () => {
    const cookie = Cookies.get('bearer')
    if (cookie) {
      const { exp } = JSON.parse(atob(cookie.split('.')[1]))
      const now = Date.now() / 1000
      return exp < now
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTokenExpired()) {
        Swal.fire({
          title: 'Your session is over.',
          icon: 'error',
          text: 'Please login again to continue using RMI',
          confirmButtonColor: '#2563eb',
        }).then(() => {
          Cookies.remove('id')
          Cookies.remove('bearer')
          navigate('/auth/login')
        })
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])



  return (
    <Authenticator>
      <Watermark />

        <div className='h-screen relative'>
          <div className='flex h-full'>

            <div className='flex flex-col w-full h-full overflow-y-auto bg-sky-50'>
              <NavBar />
              <div className='grow w-full h-fit text-black'>
                <Routes>
                  <Route path='/' element={<HomePage />}></Route>

                  <Route path='/notFound' element={<NotFoundPage />}></Route>
                  <Route path='*' element={<NotFoundPage />} />
                </Routes>
              </div>
              <div className='w-full flex clear-both'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
    </Authenticator>
  )
}

export default ContentRoute
