import React, { RefObject, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../atoms/Auth/Input'
import Checkbox from '../../../atoms/Auth/Checkbox'
import Button from '../../../atoms/Auth/Button'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface LoginAnonymousFormProps {
  usernameRef: RefObject<HTMLInputElement>
  passwordRef: RefObject<HTMLInputElement>
  isRemember: boolean
  setIsRemember: (val: boolean) => void
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const LoginAnonymousForm: React.FC<LoginAnonymousFormProps> = ({
  usernameRef,
  passwordRef,
  isRemember,
  setIsRemember,
  onFormSubmit,
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <form className='grid space-y-6' onSubmit={onFormSubmit}>
      <div>
        <label
          htmlFor='username'
          className='block text-base font-medium leading-6 text-slate-600'
        >
          Username
        </label>
        <div className='mt-2'>
          <Input
            type='text'
            placeholder='Username'
            inputRef={usernameRef}
            autoComplete='username'
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            required
          />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='password'
            className='block text-base font-medium leading-6 text-slate-600'
          >
            Password
          </label>
          <div className='text-sm'>
            <Link
              to='/auth/forgot-password'
              className='text-indigo-600 hover:text-indigo-500'
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className='mt-2 relative'>
          <Input
            type={visible ? 'text' : 'password'}
            placeholder='Password'
            inputRef={passwordRef}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            required
          />
          <span
            onClick={() => setVisible(!visible)}
            style={{
              position: 'absolute',
              right: '4%',
              top: '28%',
              cursor: 'pointer',
            }}
            className='text-slate-700'
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className='hidden'>
        <label className='inline-flex items-center cursor-pointer'>
          <Checkbox
            checked={isRemember}
            onChange={() => setIsRemember(!isRemember)}
            className='form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
          />
          <span className='ml-2 text-base font-semibold text-slate-600'>
            Remember me
          </span>
        </label>
      </div>

      <div>
        <Button
          text='Log in'
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 hover:border-indigo-700 focus:outline-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear'
        />
      </div>
    </form>
  )
}

export default LoginAnonymousForm
