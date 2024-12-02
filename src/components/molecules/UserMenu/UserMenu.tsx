import { FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  fetchMFAPreference,
  getCurrentUser,
  setUpTOTP,
  signOut,
  updateMFAPreference,
  verifyTOTPSetup,
} from 'aws-amplify/auth'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react'
import { HiUserCircle } from 'react-icons/hi'
import { FaUserLarge } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { amplifyConfigMainPool } from '@/main'
import SetUpTOTPModal from '@/components/organisms/Auth/SetUpTOTPModal'
import { SetUpSMSModal } from '@/components/organisms/Auth/SetupSMSModal/SetUpSMSModal'

const UserMenu = () => {
  const navigate = useNavigate()
  const user = { userEmail: 'someEmail@gmail.com' }
  
  // Updated state to always be an array
  const [toBeEnabledMFA, setToBeEnabledMFA] = useState<('TOTP' | 'SMS')[]>([])
  const [showSMSModal, setShowSMSModal] = useState<boolean>(false)

  useEffect(() => {
    async function getEnableMFA() {
      try {
        const { enabled } = await fetchMFAPreference()
        const mfaToEnable: ('TOTP' | 'SMS')[] = []

        if (!enabled?.includes('TOTP')) {
          mfaToEnable.push('TOTP')
        }
        if (!enabled?.includes('SMS')) {
          mfaToEnable.push('SMS')
        }

        setToBeEnabledMFA(mfaToEnable)
      } catch (error) {
        console.error('Error fetching MFA preferences:', error)
        // Optionally, handle the error (e.g., show a notification)
      }
    }

    getEnableMFA()
  }, [])

  const verifyCode = useRef<HTMLInputElement>(null)
  const [qrcode, setQRCode] = useState<string>('') // Renamed for consistency
  const [showTOTPModal, setShowTOTPModal] = useState<boolean>(false)

  async function handleSignOut() {
    try {
      amplifyConfigMainPool()
      await getCurrentUser().then(async () => {
        Cookies.remove('id')
        Cookies.remove('token')
        await signOut({ global: true }).then(() => {
          navigate('/auth/login')
        })
      })
    } catch (error: any) {
      Swal.fire({
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
  }

  async function handleEnableSMS() {
    setShowSMSModal(true)
  }

  async function handleEnableTOTP() {
    try {
      const totpSetupDetails = await setUpTOTP()
      const appName = 'RMI-MFA'
      const setupUri = totpSetupDetails.getSetupUri
      setQRCode(setupUri(appName).toString())
      console.log('QR Code:', setupUri(appName).toString())
      setShowTOTPModal(true)
    } catch (error: any) {
      Swal.fire({
        text: error.message || 'Failed to set up TOTP.',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
  }

  const handleEnableMFA = (method: 'TOTP' | 'SMS') => {
    if (method === 'TOTP') {
      handleEnableTOTP()
    } else if (method === 'SMS') {
      handleEnableSMS()
    }
  }

  const verifyTOTP = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await verifyTOTPSetup({ code: verifyCode.current!.value! })
      await updateMFAPreference({ totp: 'ENABLED' })
      Swal.fire({
        title: 'Register TOTP Success',
        text: 'Please log in again.',
        icon: 'success',
        confirmButtonColor: '#2563eb',
      }).then(() => {
        window.location.reload()
      })
    } catch (error: any) {
      Swal.fire({
        title: 'Error',
        text: error.message || 'An error occurred while verifying TOTP.',
        icon: 'error',
        confirmButtonColor: '#2563eb',
      })
    }
  }

  return (
    <>
      {/* TOTP Setup Modal */}
      <SetUpTOTPModal
        isOpen={showTOTPModal}
        setIsOpen={setShowTOTPModal}
        qrcode={qrcode}
        verifyTOTP={verifyTOTP}
        refTOTP={verifyCode}
        persist={false}
      />
      <SetUpSMSModal isOpen={showSMSModal} setIsOpen={setShowSMSModal} />

      <Menu as='div' className='relative'>
        <div>
          <MenuButton className='relative flex rounded-full p-0 hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500'>
            <FaUserLarge className='h-8 w-8 text-white' />
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems className='absolute right-0 z-10 mt-2 w-48 min-w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div>
              <MenuItem>
                <div className='inline-flex items-baseline gap-2 px-4 pt-2 pb-1.5 text-sm text-slate-500'>
                  <FaUserLarge /> {user?.userEmail}
                </div>
              </MenuItem>
              <MenuItem>
                <Link
                  to='/auth/change-password'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50'
                >
                  Change password
                </Link>
              </MenuItem>
              {/* Dynamically Render MFA Enable Menu Items */}
              {toBeEnabledMFA.length > 0 && (
                <>
                  {toBeEnabledMFA.map((method) => (
                    <MenuItem key={method}>
                      <button
                        onClick={() => handleEnableMFA(method)}
                        className='block px-4 py-2 w-full rounded-none bg-white text-sm text-left text-gray-700 hover:bg-indigo-50 hover:text-[#747bff] focus:outline-none'
                      >
                        Enable {method} MFA
                      </button>
                    </MenuItem>
                  ))}
                </>
              )}
            </div>
            <MenuItem>
              <button
                onClick={handleSignOut}
                className='block px-4 py-2 w-full rounded-none bg-white text-sm text-left text-gray-700 hover:bg-indigo-50 hover:text-[#747bff] focus:outline-none'
              >
                Log out
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  )
}

export default UserMenu
