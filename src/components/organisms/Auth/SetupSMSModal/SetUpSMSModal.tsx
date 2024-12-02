import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import CustomContextModal from '@/components/molecules/Modal/CustomContextModal';
import { updateUserAttributes, updateMFAPreference } from '@aws-amplify/auth';
import Input from '@/components/atoms/Auth/Input';

export type SetUpSMSModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export async function handleEnableSMS(
  phoneRef: React.RefObject<HTMLInputElement>,
  selectedCountry: string,
  onEnabledEnd: () => void
) {
  try {
    const phoneNumber = `${selectedCountry}${phoneRef.current!.value}`;

    // Update user attributes with the phone number
    await updateUserAttributes({
      userAttributes: {
        phone_number: phoneNumber,
      },
    });

    // Enable SMS MFA after setting the phone number
    await updateMFAPreference({ sms: 'ENABLED' });

    Swal.fire({
      title: 'SMS MFA Enabled',
      text: 'SMS-based multi-factor authentication has been enabled.',
      icon: 'success',
      confirmButtonColor: '#2563eb',
    });
    onEnabledEnd();
  } catch (error: any) {
    console.error('Error updating phone number:', error);
    Swal.fire({
      title: 'Error',
      text: error.message || 'An error occurred while updating your phone number.',
      icon: 'error',
      confirmButtonColor: '#2563eb',
    });
  }
}

export function SetUpSMSModal({ isOpen, setIsOpen }: SetUpSMSModalProps) {
  const [selectedCountry, setSelectedCountry] = useState('+66');
  const phone = useRef<HTMLInputElement>(null);

  function validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^[0-9]{7,15}$/; // Adjust length as needed
    return phoneRegex.test(phoneNumber);
  }

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();
    const phoneNumber = phone.current?.value || '';

    if (!validatePhoneNumber(phoneNumber)) {
      Swal.fire({
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number with only digits (7-15 characters).',
        icon: 'warning',
        confirmButtonColor: '#f6c23e',
      });
      return;
    }

    handleEnableSMS(phone, selectedCountry, () => setIsOpen(false));
  }

  return (
    <CustomContextModal isOpenModal={isOpen} setIsOpenModal={setIsOpen}>
      <div className="flex min-h-full container w-[28rem] items-center justify-center">
        <div className="bg-white w-full rounded-lg">
          <h1 className="text-xl font-bold text-center">Register SMS</h1>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col align-middle justify-center space-y-4 mt-4"
          >
            <div className="mt-4 my-2">
              <label
                htmlFor="phone"
                className="block text-base font-medium leading-6 text-gray-900"
              >
                电话 (Phone)
              </label>
              <div className="grid grid-cols-[35%,65%] xl:grid-cols-[30%,70%] gap-1 mt-2">
                <div>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 px-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  >
                    <option value="+66">Thailand (+66)</option>
                    <option value="+86">China (+86)</option>
                  </select>
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    inputRef={phone}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 py-2 px-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg p-2"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </CustomContextModal>
  );
}
