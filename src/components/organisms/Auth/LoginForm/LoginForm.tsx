import React, { RefObject } from 'react'
import LoginField from '../../../molecules/Auth/LoginField'

interface LoginBoxProps {
  emailRef: RefObject<HTMLInputElement>
  passwordRef: RefObject<HTMLInputElement>
  isRemember: boolean
  setIsRemember: (val: boolean) => void
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const LoginForm: React.FC<LoginBoxProps> = ({
  emailRef,
  passwordRef,
  isRemember,
  setIsRemember,
  onFormSubmit,
}) => {
  return (
    <div>
      <LoginField
        emailRef={emailRef}
        passwordRef={passwordRef}
        isRemember={isRemember}
        setIsRemember={setIsRemember}
        onFormSubmit={onFormSubmit}
      />
    </div>
  )
}

export default LoginForm
