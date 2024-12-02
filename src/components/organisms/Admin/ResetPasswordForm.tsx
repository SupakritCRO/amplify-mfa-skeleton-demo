
import Button from "@/components/atoms/Auth/Button"
import PasswordInput from "@/components/atoms/Auth/PasswordInput"
import PasswordRequirement from "@/components/molecules/Auth/PasswordRequirement"
import { checkPwnedPassword } from "@/utils/CheckPwnedPassword"
import { isPasswordMeetRequirements } from "@/utils/IsPasswordMeetRequirements"
import encryptWithPublicKey from "@/utils/PemKeyHandler"
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Swal from "sweetalert2"

interface ResetPasswordFormProps {
    setIsresetPasswordModalOpen: Dispatch<SetStateAction<boolean>>
    targetResetPassword: string
}

const ResetPasswordForm = ({ setIsresetPasswordModalOpen, targetResetPassword }: ResetPasswordFormProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [isPasswordFoucs, setIsPasswordFocus] = useState<boolean>(false)
    const password = useRef<HTMLInputElement>(null)
    const [currentPass, setCurrentPass] = useState<string>('')

    function checkDataCollectness() {
        const passwordMeetReqirementStatus = isPasswordMeetRequirements(
            password.current!.value,
        )
        if (!passwordMeetReqirementStatus.status) {
            return { status: false, error: passwordMeetReqirementStatus.message }
        }
        return { status: true, error: '' }
    }


    async function submitHandler(event: FormEvent<HTMLElement>, userId: string) {
        event.preventDefault()
        const status = checkDataCollectness()
        if (await checkPwnedPassword(password)) {
            Swal.fire({
                title: 'Password has been branched',
                text: 'Please try another password',
                icon: 'error',
                confirmButtonColor: '#2563eb',
            })
            return
        }
        if (!status!.status) {
            Swal.fire({
                title: String(status.error),
                icon: 'warning',
                confirmButtonColor: '#2563eb',
            })
            return
        }

        const publicKeyPem = import.meta.env.VITE_PUBLIC_KEY?.replace(/\\n/g, '\n');
        try {
            if (publicKeyPem) {
                const encrypted = encryptWithPublicKey(publicKeyPem, password.current!.value);
                if (!encrypted) {
                    throw new Error("Error with encrypted data")
                }
                await UserService.resetPasswordUser({
                    userId: userId,
                    requestBody: {
                        password: encrypted
                    }
                }).then(() => {
                    Swal.fire({
                        title: 'Reset user password successful',
                        text: 'Reset user password successful.',
                        icon: 'success',
                        confirmButtonColor: '#2563eb',
                    })
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Error while reseting password',
                text: 'Please try again or contact it support.',
                icon: 'error',
                confirmButtonColor: '#2563eb',
            })
        }

    }

    return (
        <div className='w-[1000px] mt-6 sm:mx-auto sm:w-full sm:max-w-sm xl:max-w-md'>
            <div className='rounded-lg shadow bg-white px-6 lg:px-10 py-6 lg:py-8'>
                <form className='grid space-y-6' >
                    <div>
                        <div>
                            <label className='block text-base font-medium leading-6 text-gray-900'>
                                New Password
                            </label>
                        </div>
                        <div className='mt-2 relative'>
                            <PasswordInput
                                type={visible ? 'text' : 'password'}
                                className='block w-full rounded-md border-0 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-300 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
                                placeholder='Password'
                                inputRef={password}
                                show={true}
                                required
                                onFocus={() => {
                                    setIsPasswordFocus(true)
                                    setCurrentPass(password.current?.value ?? '')
                                }}
                                onBlur={() => {
                                    setIsPasswordFocus(false)
                                }}
                                handlePassRequirement={(pass: string) => {
                                    setCurrentPass(pass)
                                }}
                            />
                            <span
                                onClick={() => setVisible(!visible)}
                                style={{
                                    position: 'absolute',
                                    right: '3%',
                                    top: '0.75rem',
                                    cursor: 'pointer',
                                }}
                                className='text-slate-700'
                            >
                                {visible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {isPasswordFoucs && (
                            <div className='mt-2'>
                                <div className='w-full h-fit bg-gray-100 p-2 shadow-md'>
                                    <PasswordRequirement password={currentPass} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex gap-2'>
                        <button
                            type='button'
                            onClick={() => setIsresetPasswordModalOpen(false)}
                            className='flex w-1/2 justify-center items-center rounded-md bg-slate-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus:outline-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 ease-linear'
                        >
                            Back
                        </button>
                        <Button
                            onClick={(e: FormEvent<HTMLElement>) => submitHandler(e, targetResetPassword)}
                            text='Change password'
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 hover:border-indigo-700 focus:outline-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ease-linear'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordForm
