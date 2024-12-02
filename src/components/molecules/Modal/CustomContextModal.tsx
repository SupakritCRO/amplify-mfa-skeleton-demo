import { AiOutlineClose } from 'react-icons/ai'

interface CustomContextModalProps {
  children?: React.ReactNode
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenModal: boolean
  width?: string
  height?: string
  zIndex?: string | number
  className?: string
  disabled?: boolean
  haveCloseButton?: boolean
  persist?: boolean // Added persist prop
}

const CustomContextModal = ({
  children,
  isOpenModal,
  setIsOpenModal,
  width,
  height,
  zIndex,
  className,
  disabled,
  haveCloseButton,
  persist = false, // Default to false
}: CustomContextModalProps) => {
  // Determine whether to show the close button
  const showCloseButton = haveCloseButton && !persist

  // Determine whether clicking the overlay should close the modal
  const handleOverlayClick = () => {
    if (!disabled && !persist) {
      setIsOpenModal(false)
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isOpenModal ? '' : 'hidden'}`}
    >
      <div
        className='fixed inset-0 bg-gray-700 opacity-75'
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`modal-container bg-white rounded-xl shadow-lg relative overflow-auto p-8 ${className}`}
        style={{ width: width, height: height, zIndex: zIndex }}
      >
        {showCloseButton && (
          <button
            className='absolute bg-white top-4 right-2 text-gray-600 hover:text-red-500 group'
            onClick={() => setIsOpenModal(false)}
          >
            <AiOutlineClose className="group-hover:scale-110" size={24} />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

export default CustomContextModal
