import { FormEvent, useRef } from 'react'
import ChangePasswordField from '../../../molecules/Auth/ChangePasswordField'
import { signOut, updatePassword } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'
import SHA1 from 'crypto-js/sha1'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { amplifyConfigMainPool } from '@/main'

const ChangePasswordForm = () => {
  const navigate = useNavigate()
  const currentPassword = useRef<HTMLInputElement>(null)
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const confirmNewPassowrdRef = useRef<HTMLInputElement>(null)

  async function checkPwnedPassword() {
    const hash = SHA1(newPasswordRef.current!.value!).toString().toUpperCase()
    const prefix = hash.slice(0, 5)
    const suffix = hash.slice(5)

    try {
      const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`,
      )
      const data = await response.text()
      const hashes = data.split('\n').map((line) => line.split(':'))

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [hashSuffix, _] of hashes) {
        if (hashSuffix === suffix) {
          return true
        }
      }
      return false
    } catch (_) {
      Swal.fire({
        title: 'Error fetching from HIBP:',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
  }

  const submitHandler = async (event: FormEvent<HTMLElement>) => {
    amplifyConfigMainPool()
    event.preventDefault()

    if (
      newPasswordRef.current!.value !== confirmNewPassowrdRef.current!.value!
    ) {
      Swal.fire({
        title: "New password and confirm password doesn't match",
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
      return
    }
    if (await checkPwnedPassword()) {
      Swal.fire({
        title: 'Password has been branched',
        text: 'Please try another password',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
      return
    }

    await updatePassword({
      oldPassword: currentPassword.current!.value!,
      newPassword: currentPassword.current!.value!,
    })
      .then(async () => {
        Swal.fire({
          title: 'Password has been changed',
          text: 'Please log in again.',
          icon: 'success',
          confirmButtonColor: '#2563eb',
        })
        await signOut().then(() => {
          Cookies.remove('id')
          Cookies.remove('bearer')
          navigate('/auth/login')
        })
      })
      .catch(() => {
        Swal.fire({
          title: 'Failed to change password',
          text: 'Please try again later.',
          icon: 'error',
          confirmButtonColor: '#2563eb',
        })
      })
  }

  return (
    <div>
      <ChangePasswordField
        submitHandler={submitHandler}
        currentPasswordRef={currentPassword}
        newPasswordRef={newPasswordRef}
        confirmNewPassowrdRef={confirmNewPassowrdRef}
      />
    </div>
  )
}

export default ChangePasswordForm
