import { RefObject, useState } from 'react'
import Input from '../../../atoms/Auth/Input'
import Button from '../../../atoms/Auth/Button'
import { FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa'

interface AnonymousRegisterPassCodeProps {
  passCode: RefObject<HTMLInputElement>
  passCodeSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void
}

const AnonymousRegisterPassCode: React.FC<AnonymousRegisterPassCodeProps> = ({
  passCode,
  passCodeSubmitHandler,
}) => {
  const [currentPassCode, setCurrentPassCode] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <form className='grid space-y-4' onSubmit={(e) => passCodeSubmitHandler(e)}>
      <div>
        <label
          htmlFor='passCode'
          className='block text-base font-medium leading-6 text-gray-900'
        >
          Register Pass Code
        </label>
        <div className='mt-2 relative'>
          <Input
            id='passCode'
            type={visible ? 'text' : 'password'}
            inputRef={passCode}
            placeholder='Pass Code'
            className='block w-full rounded-r-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
            value={currentPassCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length <= 6) {
                setCurrentPassCode(e.target.value)
              }
            }}
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
        <div className='mt-2 text-sm text-gray-500 flex items-top'>
          <FaInfoCircle className='mr-3 size-6' />
          Please enter the 6 digit number pass code that you received from the
          administrator.
        </div>
      </div>

      <Button
        text='Enter'
        type='submit'
        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 hover:border-indigo-700 focus:outline-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear'
      />
    </form>
  )
}

export default AnonymousRegisterPassCode
