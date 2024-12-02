import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { ModalContainerProps } from './Interface/Modal'

const ModalContainer = ({
  children,
  isOpenModal,
  setIsOpenModal,
  className,
  disabled,
}: ModalContainerProps) => {
  return (
    <Dialog
      open={isOpenModal}
      onClose={() => {
        setIsOpenModal(false)
        disabled
      }}
      className='relative z-10'
    >
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
          <DialogPanel
            transition
            className={`relative transform rounded-xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 p-5 md:p-8 ${className}`}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalContainer
