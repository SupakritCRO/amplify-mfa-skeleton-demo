
import RegisterField from '../../../molecules/Auth/RegisterField'
import { Dispatch, RefObject, SetStateAction } from 'react'

interface RegisterFieldForm {
  email: RefObject<HTMLInputElement>
  password: RefObject<HTMLInputElement>
  confirmPassword: RefObject<HTMLInputElement>
  policy: RefObject<HTMLInputElement>
  registerHandler: (event: React.FormEvent<HTMLFormElement>) => void
  selectedCountry: ImageOption
  setSelectedCountry: Dispatch<SetStateAction<ImageOption>>
  selectedTab: 'totp' | 'sms'
  setSelectedTab: Dispatch<SetStateAction<'totp' | 'sms'>>
}

const RegisterForm = ({
  email,
  password,
  confirmPassword,
  policy,
  registerHandler,
  selectedCountry,
  setSelectedCountry,
  selectedTab,
  setSelectedTab
}: RegisterFieldForm) => {
  return (
    <div>
      <RegisterField
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        policy={policy}
        registerHandler={registerHandler}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  )
}

export default RegisterForm
