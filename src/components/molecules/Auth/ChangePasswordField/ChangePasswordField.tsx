import { FormEvent, RefObject, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../atoms/Auth/Button'
import Input from '../../../atoms/Auth/Input'
import PasswordInput from '../../../atoms/Auth/PasswordInput'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface ChangePasswordFieldProps {
  submitHandler: (event: FormEvent<HTMLElement>) => void
  currentPasswordRef: RefObject<HTMLInputElement>
  newPasswordRef: RefObject<HTMLInputElement>
  confirmNewPassowrdRef: RefObject<HTMLInputElement>
}

const ChangePasswordField = ({
  submitHandler,
  currentPasswordRef,
  newPasswordRef,
  confirmNewPassowrdRef,
}: ChangePasswordFieldProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [visibleNewPassword, setVisibleNewPassword] = useState<boolean>(false)
  const history = useNavigate()

  return (
    <form className='grid space-y-6' onSubmit={submitHandler}>
      <div className='mt-2 relative'>
        <label className='block text-base font-medium leading-6 text-slate-600'>
          Current password
        </label>
        <Input
          type={visible ? 'text' : 'password'}
          placeholder='Current password'
          inputRef={currentPasswordRef}
          className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
          required
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
      <div>
        <label className='block text-base font-medium leading-6 text-slate-600'>
          New password
        </label>
        <div className='mt-2 relative'>
          <PasswordInput
            type={visibleNewPassword ? 'text' : 'password'}
            placeholder='New password'
            inputRef={newPasswordRef}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            show={true}
            required
          />

          <span
            onClick={() => setVisibleNewPassword(!visibleNewPassword)}
            style={{
              position: 'absolute',
              right: '3%',
              top: '0.75rem',
              cursor: 'pointer',
            }}
            className='text-slate-700'
          >
            {visibleNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>
      <div>
        <label className='block text-base font-medium leading-6 text-slate-600'>
          Confirm new password
        </label>
        <div className='mt-2 relaive'>
          <Input
            type={visibleNewPassword ? 'text' : 'password'}
            placeholder='Confirm new password'
            inputRef={confirmNewPassowrdRef}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            required
          />

          <span
            onClick={() => setVisibleNewPassword(!visibleNewPassword)}
            style={{
              position: 'absolute',
              right: '3%',
              top: '0.75rem',
              cursor: 'pointer',
            }}
            className='text-slate-700'
          >
            {visibleNewPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className='flex gap-2'>
        <button
          type='button'
          onClick={() => history(-1)}
          className='flex w-1/2 justify-center rounded-md bg-slate-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus:outline-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 ease-linear'
        >
          Back
        </button>
        <Button
          text='Change password'
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 hover:border-indigo-700 focus:outline-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear'
        />
      </div>
    </form>
  )
}

export default ChangePasswordField
