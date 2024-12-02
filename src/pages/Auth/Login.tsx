import { FormEvent, useRef, useState } from 'react'
import {
  signIn,
  confirmSignIn,
  updateMFAPreference,
  getCurrentUser,
} from 'aws-amplify/auth'
import { useNavigate, Link } from 'react-router-dom'
import LoginForm from '../../components/organisms/Auth/LoginForm'
import SetUpTOTPModal from '../../components/organisms/Auth/SetUpTOTPModal'
import Swal from 'sweetalert2'
import { amplifyConfigMainPool } from '../../main'


import MFASelectionModal from '@/components/organisms/Auth/MFAOptionModal/MFAOptionModal'

const Login = () => {
  const navigate = useNavigate()
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const [qrcode, setqrcode] = useState<string>('')
  const [isRemember, setIsRemember] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const verifyCode = useRef<HTMLInputElement>(null)
  const [showMFASelection, setShowMFASelection] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const verifyTOTP = async (event: FormEvent) => {
    event.preventDefault()
    await confirmSignIn({ challengeResponse: verifyCode.current!.value! })
      .then(async () => {
        await updateMFAPreference({ totp: 'ENABLED' })
          .then(() => {
            Swal.fire({
              title: 'Register TOTP success',
              text: 'Please login again.',
              icon: 'success',
              confirmButtonColor: '#2563eb',
            }).then(() => {
              navigate('/')
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          })
          .catch((error: any) => {
            Swal.fire({
              text: error.message,
              icon: 'error',
              confirmButtonColor: '#2563eb',
            })
          })
      })
      .catch(() => {
        Swal.fire({
          title: 'Invalid code',
          text: 'Please try again.',
          icon: 'error',
          confirmButtonColor: '#2563eb',
        })
        return
      })
  }


  async function handleMFASelection(mfaType: string) {
    try {
      const output = await confirmSignIn({ challengeResponse: mfaType })
      handleSignInNextStep(output)
    } catch (error) {
      console.log('Error confirming MFA selection:', error)
    }
  }

  async function handleSignInNextStep(output: any) {
    const { nextStep } = output
    const signInStep = nextStep.signInStep
    console.log('Next step:', signInStep)

    if (signInStep === 'CONFIRM_SIGN_UP') {
      Swal.fire({
        title: 'Please wait for admin to confirm your registration',
        icon: 'warning',
        confirmButtonColor: '#2563eb',
      }).then(() => {
        navigate('/auth/login')
      })
    }

    if (signInStep === 'CONTINUE_SIGN_IN_WITH_MFA_SELECTION') {
      const allowedMFATypes = nextStep.allowedMFATypes
      setShowMFASelection(true)
    }

    if (signInStep === 'CONFIRM_SIGN_IN_WITH_SMS_CODE') {
      Swal.fire({
        title: 'Enter your SMS code:',
        input: 'text',
        inputPlaceholder: 'Enter the code sent to your phone',
        showCancelButton: true,
        confirmButtonColor: '#4f46e5',
        cancelButtonColor: '#dc2626',
        confirmButtonText: 'Confirm',
        inputValidator: (value) => {
          if (!value) {
            return 'Please enter the SMS code'
          }
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          await confirmSignIn({ challengeResponse: result.value })
            .then(async () => {
              const user = await getCurrentUser()
              await updateMFAPreference({ sms: 'ENABLED' })
              navigate('/')
            })
            .catch((error) => {
              Swal.fire({
                title: 'Invalid code',
                text: 'The SMS code is incorrect. Please try again.',
                icon: 'error',
                confirmButtonColor: '#2563eb',
              })
            })
        }
      })
    }

    if (signInStep == 'CONFIRM_SIGN_IN_WITH_TOTP_CODE') {

      Swal.fire({
        title: 'Enter your TOTP: ',
        input: 'text',
        showCancelButton: true,
        confirmButtonColor: '#4f46e5',
        cancelButtonColor: '#dc2626',
        confirmButtonText: 'Confirm',
        inputValidator: (value) => {
          if (!value) {
            return 'Please enter your TOTP'
          }
        },
      })
        .then(async (result) => {
          if (!result.isConfirmed) return
          confirmSignIn({ challengeResponse: result.value }).then(async () => {
            const user = await getCurrentUser()

            navigate('/')
          })
        })
        .catch(() => {
          Swal.fire({
            title: 'Invalid code',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#2563eb',
          })
        })
    } else if (nextStep.signInStep == 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP') {
      const totpSetupDetails = nextStep.totpSetupDetails
      const targetEmail = email.current?.value
      const appName = `RMI-${import.meta.env.VITE_ENVIRONMENT}`
      const setupUri = totpSetupDetails.getSetupUri(appName, targetEmail)
      setqrcode(setupUri.toString())
      setShowModal(true)
    } else if (nextStep.signInStep == 'DONE') {
      try {
        // const res: any = await ownAuthentication(targetEmail!, targetPassword!, loginAsync, "Login")
        // const token = res.access_token.split('Bearer ').at(-1)
        const user = await getCurrentUser()
        Swal.fire({
          title: 'Login success',
          icon: 'success',
          confirmButtonColor: '#2563eb',
          timer: 2000,
        })
        // console.log('user', user)
        // await Cookies.set('token', token, { secure: true })
        // OpenAPI.TOKEN = token
        navigate('/')
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Login error, Please try again or contact admin.',
          icon: 'error',
          confirmButtonColor: '#2563eb',
        })
      }
    }
  }

  async function loginHandler(event: FormEvent<HTMLElement>) {
    // Config Amplify to Main Pool
    amplifyConfigMainPool()

    event.preventDefault()
    if (!email && !password) {
      Swal.fire({
        title: 'Please fill all email and password',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
    const targetEmail = email.current?.value
    const targetPassword = password.current?.value

    // Config Amplify
    await signIn({ username: targetEmail!, password: targetPassword! })
      .then(async (response) => {
        console.log('response', response)
        handleSignInNextStep(response)
      })
      .catch(async (error) => {
        if (error.message == 'There is already a signed in user.') {
          try {
            // const res: any = await ownAuthentication(targetEmail!, targetPassword!, loginAsync, "Login")
            // const token = res.access_token.split('Bearer ').at(-1)
            navigate('/')
            return
          } catch (error) {
            Swal.fire({
              title: 'Error',
              text: 'Login error, Please try again or contact admin.',
              icon: 'error',
              confirmButtonColor: '#2563eb',
            })
            return
          }
        }
        Swal.fire({
          text: 'The password or username is incorrect. Please try it again.',
          icon: 'error',
          confirmButtonColor: '#2563eb',
        })
      })
  }

  return (
    <div className='h-screen'>
      <div className='flex flex-col min-h-full px-6 lg:px-8 justify-center xl:justify-normal xl:pt-16 2xl:pt-24 bg-indigo-50/60'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm xl:max-w-md'>
          <div className='w-fit bg-white py-3 px-5 m-auto rounded-full shadow-md shadow-indigo-200/40'>
          </div>
          <h2 className='mt-6 text-center text-xl lg:text-2xl font-bold leading-9 text-gray-900 tracking-wide'>
            Log in to your account
          </h2>
        </div>
        <div className='mt-6 sm:mx-auto sm:w-full sm:max-w-sm xl:max-w-md'>
          <div className='rounded-lg shadow bg-white px-6 lg:px-10 py-8 lg:py-12'>
            <LoginForm
              emailRef={email}
              passwordRef={password}
              isRemember={isRemember}
              setIsRemember={setIsRemember}
              onFormSubmit={loginHandler}
            />
            <SetUpTOTPModal
              isOpen={showModal}
              setIsOpen={setShowModal}
              qrcode={qrcode}
              verifyTOTP={verifyTOTP}
              refTOTP={verifyCode}
            />
          </div>

          <p className='mt-8 text-center text-base text-gray-500'>
            Not a member?
            <Link
              to='/auth/register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1'
            >
              Create new account
            </Link>
          </p>
        </div>
      </div>
      {/* MFA Selection Modal */}
      <MFASelectionModal
        isOpen={showMFASelection}
        setIsOpen={setShowMFASelection}
        onSelect={handleMFASelection}
      />
    </div>
  )
}

export default Login
