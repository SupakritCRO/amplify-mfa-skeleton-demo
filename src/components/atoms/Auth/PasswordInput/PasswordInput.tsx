import React, { ChangeEvent, RefObject, useEffect, useState } from 'react'
import PasswordMeter from '../PasswordMeter'
import { evaluateStrength, getStrengthLabel } from './function/PasswordMeasure'

interface InputProps {
  type: string
  inputRef: RefObject<HTMLInputElement>
  placeholder?: string
  show?: boolean
  handlePassRequirement?: (pass: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const PasswordInput: React.FC<InputProps> = ({
  placeholder,
  inputRef,
  type,
  show,
  handlePassRequirement,
  ...props
}) => {
  const [password, setPassword] = useState<string>('')
  const [strength, setStrength] = useState<number>(0)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (handlePassRequirement) {
      handlePassRequirement(e.target.value)
    }
  }

  useEffect(() => {
    setStrength(evaluateStrength(password))
  }, [password])

  return (
    <>
      <input
        type={type}
        ref={inputRef}
        {...props}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handlePasswordChange(e)
        }}
      />
      <div className={`mt-1 flex items-center ${show ? '' : 'hidden'}`}>
        <PasswordMeter strength={strength} />
        <span className='ml-1 flex text-xs italic text-opacity-85 text-gray-500 whitespace-pre'>
          {getStrengthLabel(strength)}
        </span>
      </div>
    </>
  )
}

export default PasswordInput
