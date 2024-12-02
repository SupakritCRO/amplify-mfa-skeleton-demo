import { Dispatch, FormEvent, RefObject, SetStateAction } from 'react'
import TOTPField from '../../../molecules/Auth/TOTPField'
import CustomContextModal from '@/components/molecules/Modal/CustomContextModal'

interface SetUpTOTPModalInterface {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  qrcode: string
  refTOTP: RefObject<HTMLInputElement>
  verifyTOTP: (event: FormEvent) => void
  persist?: boolean
}

const SetUpTOTPModal = ({
  isOpen,
  setIsOpen,
  qrcode,
  refTOTP,
  verifyTOTP,
  persist = true
}: SetUpTOTPModalInterface) => {
  return (
    <CustomContextModal isOpenModal={isOpen} setIsOpenModal={setIsOpen} persist={persist}>
        <div className='flex min-h-full container sm:w-full sm:max-w-sm lg:max-w-md mx-auto items-center justify-center'>
          <TOTPField
            qrcode={qrcode}
            refTOTP={refTOTP}
            verifyTOTP={verifyTOTP}
          />
        </div>
    </CustomContextModal>
  )
}

export default SetUpTOTPModal
