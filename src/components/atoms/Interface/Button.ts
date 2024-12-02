import { ReactNode } from "react"

export interface ActiveButtonProps {
  toggleModal: () => void
}


export interface ButtonProps {
  // New
  onClick: () => void
}

export interface ButtonCardProps {
  to: string
  text: string
}

export interface DownloadButtonProps {
  onDownload: () => void
  isDisabled: boolean | undefined
}

export interface BackButtonProps {
  goBack: () => void
}

export interface GenerateButtonProps {
  handleOnClick: () => void
}

export interface ModalButtonProps {
  onClick: () => void
  label: string
  style?: string
}

export interface PrimaryButtonProps {
  to: string
  children: React.ReactNode
}

export interface SignOutButtonProps {
  signOut: () => void
}

export interface FilterButtonProps {
  onToggle: () => void
}
export interface ButtonProps {
  onClick: () => void
}

export interface DefaultButtonProps {
  title: string
  classname?: string
  padding?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  disabled?: boolean
  buttonType?: 'button' | 'submit'
  | 'reset'
  color?: string
  icon?: ReactNode
}
