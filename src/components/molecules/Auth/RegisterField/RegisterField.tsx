import React, { Dispatch, RefObject, SetStateAction, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Input from '../../../atoms/Auth/Input'
import Button from '../../../atoms/Auth/Button'
import Label from '../../../atoms/Auth/Label'
import PasswordInput from '../../../atoms/Auth/PasswordInput'
import PrivacyPolicy from '../PrivacyPolicy'
import { FaEye, FaEyeSlash, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import PasswordRequirement from '../PasswordRequirement'
import { ImageOption } from '@/pages/AssessmentPage/Interfaces/ImageOption'

interface RegisterFieldProps {
  email: RefObject<HTMLInputElement>
  password: RefObject<HTMLInputElement>
  confirmPassword: RefObject<HTMLInputElement>
  policy: RefObject<HTMLInputElement>
  registerHandler: (event: React.FormEvent<HTMLFormElement>) => void
  selectedCountry: ImageOption
  setSelectedCountry: Dispatch<SetStateAction<ImageOption>>
  selectedTab: 'totp' | 'sms'
  setSelectedTab: Dispatch<SetStateAction<'totp' | 'sms'>>
}

const RegisterField = ({
  email,
  password,
  confirmPassword,
  policy,
  registerHandler,
  selectedCountry,
  setSelectedCountry,
  selectedTab,
  setSelectedTab,
}: RegisterFieldProps) => {
  const [showPolicy, setShowPolicy] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState<boolean>(false)
  const [isConfirmPasswordFocus, setConfirmPasswordFocus] =
    useState<boolean>(false)
  const [currentPass, setCurrentPass] = useState<string>('')
  const [currentConfirmPass, setCurrentConfrimPass] = useState<string>('')

  // Animation variants
  const tabVariants = {
    active: {
      color: '#2563EB', // Indigo-600
      borderBottom: '2px solid #2563EB',
      transition: { duration: 0.3 },
    },
    inactive: {
      color: '#6B7280', // Gray-500
      borderBottom: '2px solid transparent',
      transition: { duration: 0.3 },
    },
  }


  return (
    <form className='grid space-y-4' onSubmit={(e) => registerHandler(e)}>
      {/* Email Field */}
      <div>
        <label
          htmlFor='email'
          className='block text-base font-medium leading-6 text-gray-900'
        >
          Email address
        </label>
        <div className='mt-2'>
          <Input
            type='email'
            placeholder='Email'
            inputRef={email}
            autoComplete='email'
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <div>
          <label className='block text-base font-medium leading-6 text-gray-900'>
            Password
          </label>
        </div>
        <div className='mt-2 relative'>
          <PasswordInput
            type={visible ? 'text' : 'password'}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            placeholder='Password'
            inputRef={password}
            show={true}
            required
            onFocus={() => {
              setIsPasswordFocus(true)
              setCurrentPass(password.current?.value ?? '')
            }}
            onBlur={() => {
              setIsPasswordFocus(false)
            }}
            handlePassRequirement={(pass: string) => {
              setCurrentPass(pass)
            }}
          />
          <span
            onClick={() => setVisible(!visible)}
            style={{
              position: 'absolute',
              right: '3%',
              top: '0.75rem',
              cursor: 'pointer',
            }}
            className='text-slate-700'
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {isPasswordFocus && (
          <div className='mt-2'>
            <div className='w-full h-fit bg-gray-100 p-2 shadow-md'>
              <PasswordRequirement password={currentPass} />
            </div>
          </div>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <div>
          <label className='block text-base font-medium leading-6 text-gray-900'>
            Confirm password
          </label>
        </div>
        <div className='relative'>
          <PasswordInput
            type={visible ? 'text' : 'password'}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            placeholder='Confirm Password'
            inputRef={confirmPassword}
            required
            onFocus={() => {
              setConfirmPasswordFocus(true)
              setCurrentConfrimPass(confirmPassword.current?.value ?? '')
            }}
            onBlur={() => {
              setConfirmPasswordFocus(false)
            }}
            handlePassRequirement={(pass: string) => {
              setCurrentConfrimPass(pass)
            }}
          />
          <span
            onClick={() => setVisible(!visible)}
            style={{
              position: 'absolute',
              right: '3%',
              top: '0.75rem',
              cursor: 'pointer',
            }}
            className='text-slate-700'
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {isConfirmPasswordFocus && (
          <div className='mt-2'>
            <div className='w-full h-fit bg-gray-100 p-2 shadow-md'>
              <PasswordRequirement password={currentConfirmPass} />
            </div>
          </div>
        )}
      </div>

      {/* Privacy Policy Checkbox */}
      <div className='flex pb-2'>
        <Label className='inline-flex items-center'>
          <Input
            id='customCheckLogin'
            type='checkbox'
            className='form-checkbox border-gray-300 text-indigo-600 focus:ring-indigo-600 rounded w-5 h-5 ease-linear transition-all duration-150 cursor-pointer'
            inputRef={policy}
            required
          />
        </Label>
        <span className='flex ml-2 text-sm font-semibold text-slate-600'>
          I agree with the
          <div
            className='ml-1 text-blue-600 hover:text-blue-500 cursor-pointer'
            onClick={() => setShowPolicy(true)}
          >
            Privacy Policy
          </div>
        </span>
      </div>
      <PrivacyPolicy showPolicy={showPolicy} setShowPolicy={setShowPolicy} />

      {/* Submit Button */}
      <div>
        <Button
          text='Create account'
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 hover:border-indigo-700 focus:outline-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear'
        />
      </div>
    </form>
  )
}

export default RegisterField
