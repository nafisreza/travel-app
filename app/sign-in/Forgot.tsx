'use client'
import React, { FormEvent, useState } from 'react'
import NewPasswordInput from '@/app/forgot/NewPasswordInput';
import OTPField from '@/app/forgot/OTPfield';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/navigation';
import Button from '@/components/buttons/Button';
import Input from '@/components/input/InputBox';

function Forgot() {
    const router = useRouter();
	const [open, setOpen] = useState<boolean>(false);
	const [getCodeRequested, setGetCodeRequested] = useState<boolean>(false);
	const [otpValidated, setOtpValidated] = useState<boolean>(false);

	const handleValidateOTP = () => {
		// logic to validate OTP
		// If OTP is valid, switch to the new password input view
		setOtpValidated(true);
	};

	const handleSetNewPassword = (newPassword: string) => {
		// logic to save the new password
		console.log('New Password set:', newPassword);
	};

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		router.push('/dashboard');
	}
  return (
    <>
    							<div className='flex justify-end'>
								<small
									className='font-medium text-gray-800 text-sm hover:underline cursor-pointer'
									onClick={() => {
										setOpen(true);
										setGetCodeRequested(false); // Reset the code request state when modal is opened
									}}>
									Forgot password?
								</small>
							</div>

							<Modal open={open} onClose={() => setOpen(false)}>
								{getCodeRequested ? (
									otpValidated ? (
										<NewPasswordInput
											onSetNewPassword={
												handleSetNewPassword
											}
										/>
									) : (
										<OTPField
											onValidateOTP={handleValidateOTP}
										/>
									)
								) : (
									<>
										<p className='text-md font-bold'>
											Enter your email address
										</p>
										<div className='grid grid-cols-4 gap-3 mt-5'>
											<Input
												type='text'
												placeholder='Email'
												classes='col-span-3'
											/>
											<Button
												classes='px-10 py-0 h-12 text-sm justify-center'
												onClick={() =>
													setGetCodeRequested(true)
												}>
												Get Code
											</Button>
										</div>
									</>
								)}
							</Modal>
                            </>
  )
}

export default Forgot