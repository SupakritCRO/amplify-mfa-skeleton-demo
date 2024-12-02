import { FormEvent, RefObject } from 'react'
import QRCodeCanvas from 'qrcode.react'
import Input from '../../../atoms/Auth/Input'
import Button from '../../../atoms/Auth/Button'
import { useTranslation } from 'react-i18next'
const TOTPField = ({
  qrcode,
  refTOTP,
  verifyTOTP,
}: {
  qrcode: string
  refTOTP: RefObject<HTMLInputElement>
  verifyTOTP: (event: FormEvent) => void
}) => {
  const { t } = useTranslation()
  const SubmitPageLang: { [key: string]: string } = t(
    'submitPage',
  ) as unknown as {
    [key: string]: string
  }
  return (
    <div className='bg-white h-fit rounded-lg text-black px-3 py-3 lg:px-6 lg:py-6'>
      <div className='mb-3'>
        <p className='text-center sm:text-sm lg:text-base font-bold mt-3 lg:mt-0'>
          Please set up TOTP with your Authenticator App
        </p>
        <p className='text-center sm:text-sm lg:text-base font-medium my-2'>
          Scan with you Authenticator app
        </p>
      </div>
      <div className='w-full h-[70%] flex items-center justify-center'>
        {qrcode && (
          <QRCodeCanvas
            value={qrcode}
            style={{ width: '60%', height: '80%' }}
          />
        )}
      </div>
      <div className='text-center my-3'>
        Dont have Authenticator app?{' '}
        <span className='text-blue-600 hover:text-blue-500'>
          <a
            href='https://apps.apple.com/us/app/microsoft-authenticator/id983156458'
            target='__blank'
          >
            Authenticator
          </a>
        </span>{' '}
      </div>
      <form onSubmit={verifyTOTP}>
        <div className='flex relative w-full my-4 p-3'>
          <label className='flex items-center whitespace-pre mr-2 text-base font-medium leading-6 text-gray-900'>
            Verify code :
          </label>
          <Input
            type='text'
            placeholder=''
            inputRef={refTOTP}
            className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6ß'
            required
          />
        </div>
        <div className='my-2'>
          <Button
            text={"submit"}
            type='submit'
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md p-2'
          />

        </div>
      </form>
    </div>
  )
}

export default TOTPField
