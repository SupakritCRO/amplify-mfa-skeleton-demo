import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ModalContainerProps {
  children?: ReactNode
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  className?: string
  disabled?: boolean
}
