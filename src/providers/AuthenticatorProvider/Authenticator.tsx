import {
  fetchMFAPreference,
  getCurrentUser,
  setUpTOTP,
  updateMFAPreference,
  verifyTOTPSetup,
  updateUserAttributes, // Import this for updating user attributes
} from '@aws-amplify/auth'
import { useNavigate } from 'react-router-dom'
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { amplifyConfigMainPool } from '@/main'
import Swal from 'sweetalert2'
import SetUpTOTPModal from '@/components/organisms/Auth/SetUpTOTPModal'

interface AuthenticatorProps {
  children: ReactNode
}

const Authenticator = ({ children }: AuthenticatorProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    amplifyConfigMainPool()
    const checkAuthentication = async () => {
      try {
        await getCurrentUser()
      } catch {
        Cookies.remove('id')
        Cookies.remove('token')
        navigate('/auth/login')
      }
    }
    checkAuthentication()
  }, [navigate])

  useEffect(() => {
    const checkMfaTOTP = async () => {
      try {
        const user = await getCurrentUser()
        if (user) {
          console.log('User:', user)
          const { enabled, preferred } = await fetchMFAPreference()
          console.log('MFA TOTP enabled:', enabled, 'preferred:', preferred)

          if (!enabled?.includes('TOTP')) {
            console.log('MFA TOTP not enabled, setting up')
            const totpSetupDetails = await setUpTOTP()
            const appName = 'RMI-MFA'
            const setupUri = totpSetupDetails.getSetupUri
            setQRCode(setupUri(appName).toString())
            console.log('QR Code:', setupUri(appName).toString())
            setShowModal(true)
          }

          if (!enabled?.includes('SMS')) {
            console.log('MFA SMS not enabled')
            // Prompt user to enter phone number
            Swal.fire({
              title: 'Enable SMS MFA',
              text: 'Please enter your phone number to enable SMS-based multi-factor authentication.',
              input: 'tel',
              inputLabel: 'Phone Number',
              inputPlaceholder: '+1234567890',
              showCancelButton: true,
              confirmButtonText: 'Submit',
              cancelButtonText: 'Cancel',
              inputValidator: (value) => {
                if (!value) {
                  return 'You need to enter a phone number!'
                }
                // Simple regex for phone validation
                const phoneRegex = /^\+\d{10,15}$/
                if (!phoneRegex.test(value)) {
                  return 'Please enter a valid phone number with country code, e.g., +1234567890'
                }
                return null
              },
            }).then(async (result) => {
              if (result.isConfirmed && result.value) {
                const phoneNumber = result.value
                try {
                  // Update user attributes with the phone number
                  await updateUserAttributes({
                    userAttributes: {
                      phone_number: phoneNumber,
                    },
                  })
                  Swal.fire({
                    title: 'Phone Number Updated',
                    text: 'Your phone number has been updated successfully.',
                    icon: 'success',
                    confirmButtonColor: '#2563eb',
                  })

                  // Optionally, you can enable SMS MFA after setting the phone number
                  await updateMFAPreference({ sms: 'ENABLED' })
                  Swal.fire({
                    title: 'SMS MFA Enabled',
                    text: 'SMS-based multi-factor authentication has been enabled.',
                    icon: 'success',
                    confirmButtonColor: '#2563eb',
                  })
                } catch (error: any) {
                  console.error('Error updating phone number:', error)
                  Swal.fire({
                    title: 'Error',
                    text:
                      error.message ||
                      'An error occurred while updating your phone number.',
                    icon: 'error',
                    confirmButtonColor: '#2563eb',
                  })
                }
              }
            })
          }
        }
      } catch (error) {
        console.error('Error checking MFA TOTP:', error)
        // Optionally, handle the error (e.g., log out the user)
      }
    }

    // checkMfaTOTP()
  }, [])

  const verifyTOTP = async (event: FormEvent) => {
    event.preventDefault()
    await verifyTOTPSetup({ code: verifyCode.current!.value! })
      .then(async () => {
        await updateMFAPreference({ totp: 'ENABLED' })
          .then(() => {
            Swal.fire({
              title: 'Register TOTP Success',
              text: 'Please log in again.',
              icon: 'success',
              confirmButtonColor: '#2563eb',
            }).then(() => {
              window.location.reload()
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          })
          .catch((error: any) => {
            Swal.fire({
              text: error.message,
              icon: 'error',
              confirmButtonColor: '#2563eb',
            })
          })
      })
      .catch(() => {
        Swal.fire({
          title: 'Invalid Code',
          text: 'Please try again.',
          icon: 'error',
          confirmButtonColor: '#2563eb',
        })
        return
      })
  }

  const [showModal, setShowModal] = useState<boolean>(false)
  const verifyCode = useRef<HTMLInputElement>(null)
  const [qrcode, setQRCode] = useState<string>('') // Renamed for consistency

  return (
    <>
      <SetUpTOTPModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        qrcode={qrcode}
        verifyTOTP={verifyTOTP}
        refTOTP={verifyCode}
      />
      {children}
    </>
  )
}

export default Authenticator
