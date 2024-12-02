import React, { RefObject } from 'react'

interface InputProps {
  type: string
  placeholder?: string
  inputRef: RefObject<HTMLInputElement>
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  inputRef,
  disabled,
  ...props
}) => {
  return (
    <input
      ref={inputRef}
      type={type}
      {...props}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

export default Input
