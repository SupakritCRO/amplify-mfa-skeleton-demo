interface CustomContextModalProps {
  children?: React.ReactNode
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenModal: boolean
  width?: string
  height?: string
  zIndex?: string | number
  className?: string
  disabled?: boolean
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
}: CustomContextModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isOpenModal ? '' : 'hidden'}`}
    >
      <div
        className='fixed inset-0 bg-gray-700 opacity-75'
        onClick={() => {
          setIsOpenModal(false)
          disabled
        }}
      ></div>
      <div
        className={`modal-container bg-white rounded-xl shadow-lg relative overflow-auto p-8  ${className}`}
        style={{ width: width, height: height, zIndex: zIndex }}
      >
        {children}
      </div>
    </div>
  )
}

export default CustomContextModal
