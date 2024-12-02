// src/components/MFASelectionModal.tsx

import CustomContextModal from '@/components/molecules/Modal/CustomContextModal'
import { FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { Dispatch, SetStateAction, useState } from 'react'

interface MFASelectionModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onSelect: (mfaType: 'TOTP' | 'SMS') => void
}

const MFASelectionModal: React.FC<MFASelectionModalProps> = ({
  isOpen,
  setIsOpen,
  onSelect,
}) => {
  const [selectedMFA, setSelectedMFA] = useState<'TOTP' | 'SMS' | null>('TOTP')

  const handleContinue = () => {
    if (selectedMFA) {
      onSelect(selectedMFA)
      setIsOpen(false)
      setSelectedMFA(null)
    }
  }

  const handleCancel = () => {
    setIsOpen(false)
    setSelectedMFA(null)
  }

  return (
    <CustomContextModal
      isOpenModal={isOpen}
      setIsOpenModal={setIsOpen}
      className="max-w-md w-full"
      persist
    >
      <div className="flex flex-col items-center">
        {/* Modal Title */}
        <h2 className="text-xl font-semibold mb-6">Choose MFA Method</h2>

        {/* MFA Options */}
        <div className="w-full space-y-4">
          {/* TOTP Option */}
          <label className="flex items-center p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-indigo-50 transition duration-200">
            <input
              type="radio"
              name="mfaType"
              value="TOTP"
              className="hidden"
              checked={selectedMFA === 'TOTP'}
              onChange={() => setSelectedMFA('TOTP')}
            />
            <div className="flex items-center">
              <FaShieldAlt className="text-indigo-600 w-6 h-6 mr-4" />
              <span className="text-gray-700">Authenticator App (TOTP)</span>
            </div>
            {selectedMFA === 'TOTP' && (
              <HiCheckCircle className="text-green-500 w-6 h-6 ml-auto" />
            )}
          </label>

          {/* SMS Option */}
          <label className="flex items-center p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-indigo-50 transition duration-200">
            <input
              type="radio"
              name="mfaType"
              value="SMS"
              className="hidden"
              checked={selectedMFA === 'SMS'}
              onChange={() => setSelectedMFA('SMS')}
            />
            <div className="flex items-center">
              <FaMobileAlt className="text-indigo-600 w-6 h-6 mr-4" />
              <span className="text-gray-700">SMS</span>
            </div>
            {selectedMFA === 'SMS' && (
              <HiCheckCircle className="text-green-500 w-6 h-6 ml-auto" />
            )}
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full mt-6 space-x-4">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
          >
            Cancel
          </button>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedMFA}
            className={`flex-1 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 ${
              !selectedMFA ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </CustomContextModal>
  )
}

export default MFASelectionModal
