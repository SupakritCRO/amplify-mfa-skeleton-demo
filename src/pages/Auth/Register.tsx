import { FormEvent, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/organisms/Auth/RegisterForm/RegisterForm'
import Swal from 'sweetalert2'
import { amplifyConfigMainPool } from '../../main'


import ThaiFlag from '@/assets/countryFlag/thailand.png'
import { confirmSignUp, signUp } from 'aws-amplify/auth'

const Register = () => {
  const navigate = useNavigate()
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const confirmPassword = useRef<HTMLInputElement>(null)
  const policy = useRef<HTMLInputElement>(null)
  const [selectedCountry, setSelectedCountry] = useState<ImageOption>({
    label: '+66',
    value: 'th',
    image: ThaiFlag,
  })
  const [selectedTab, setSelectedTab] = useState<'totp' | 'sms'>('totp')

  function checkDataCollectness() {
    if (password.current!.value != confirmPassword.current!.value) {
      return {
        status: false,
        error: 'password and confrim password are not the same',
      }
    }
    if (!policy.current!.value) {
      return { status: false, error: 'Please accept our Privacy Policy' }
    }
    return { status: true, error: '' }
  }

  async function registerHandler(event: FormEvent<HTMLElement>) {
    // Config Amplify to Main Pool
    amplifyConfigMainPool()

    event.preventDefault()
    const status = checkDataCollectness()

    if (!status!.status) {
      Swal.fire({
        title: String(status.error),
        icon: 'warning',
        confirmButtonColor: '#2563eb',
      })
      return
    }
    const targetPassword = password.current!.value
    const targetEmail = email.current!.value
    if (!targetPassword && !targetEmail) {
      Swal.fire({
        title: 'Please fill all email and password',
        icon: 'warning',
        confirmButtonColor: '#2563eb',
      })
      return
    }

    let userAttributes: Record<string, string> = {
      email: email.current!.value,
    }

    try {
      const { nextStep } = await signUp({
        username: email.current!.value,
        password: password.current!.value,
        options: {
          userAttributes: userAttributes,
        },
      })
      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        Swal.fire({
          title: 'Login has been requested',
          text: 'Please wait until the administrator confirms registration.',
          icon: 'warning',
          confirmButtonColor: '#2563eb',
        }).then(() => {
          navigate('/auth/login')
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error while resgister.',
        text: 'Please contact admin.',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }

  }

  return (
    <div className='h-screen'>
      <div className='flex flex-col min-h-full px-6 lg:px-8 justify-center xl:justify-normal xl:pt-8 2xl:pt-10 bg-indigo-50/60'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm xl:max-w-md'>
          <div className='w-fit bg-white py-3 px-5 m-auto rounded-full shadow-md shadow-indigo-200/40'>

          </div>
          <h2 className='mt-6 text-center text-xl lg:text-2xl font-bold leading-9 text-gray-900 tracking-wide'>
            Register
          </h2>
        </div>
        <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='rounded-lg shadow bg-white px-6 lg:px-10 py-6 lg:py-10'>
            <RegisterForm
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              policy={policy}

              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              registerHandler={registerHandler}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </div>
          <p className='mt-8 text-center text-base text-gray-500 mb-6'>
            Already have account?
            <Link
              to='/auth/login'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1'
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
