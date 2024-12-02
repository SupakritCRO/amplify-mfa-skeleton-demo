import React from 'react'

interface ButtonProps {
  text: string
  type: 'submit' | 'button'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Button: React.FC<ButtonProps> = ({ text, type, ...props }) => {
  return (
    <button type={type} {...props}>
      {text}
    </button>
  )
}

export default Button
