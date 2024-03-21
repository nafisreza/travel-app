'use client';
import Button from '@/components/buttons/Button';
import Input from '@/components/input/InputBox';
import NewPasswordInput from '@/app/forgot/NewPasswordInput';
import OTPField from '@/app/forgot/OTPfield';
import Modal from '@/components/modal/Modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function Page({}) {
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
		<main className='bg-signin'>
			<div className='lg:flex'>
				<div className='flex-grow'>
					<div className='p-8 lg:p-16 max-w-screen-lg lg:mt-20'>
						<p>
							<Link
								href='/'
								className='mt-4 uppercase text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white sm:text-4xl'>
								Guideasy
							</Link>
						</p>
						<p className='my-4 text-sm lg:text-lg lg:leading-8 text-white'>
							Discover the vast world of Guideasy, your gateway to
							over 300,000 products worldwide. Join our global
							community and explore a universe of choices and
							proud to be our valuable partner.
						</p>

						<div className="flex">
                            <Button classes="p-3 md:py-3 md:px-6 flex gap-3 bg-green-500 rounded-sm md:mt-4"> <div className="text-xs md:text-lg"> Become Our Partner</div> <HiArrowRight /></Button> 
                            </div>
					</div>
				</div>
				<div className='flex-shrink-0 w-full lg:max-w-md bg-white min-h-screen grid place-items-center relative'>
					<div className='w-full overflow-hidden max-w-md rounded-lg py-12 lg:py-16 px-12 text-center'>
						<div className='mb-10 text-center md:mb-12'>
							<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
								Sign In
							</h1>
						</div>
						<form className='w-full' onSubmit={handleSubmit}>
							<Input type='text' placeholder='Email' />
							<Input type='password' placeholder='Password' />
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

							<div className='my-6 lg:my-16'>
								<Button classes='py-3 px-10 text-sm'>
									Sign In
								</Button>
							</div>
						</form>

						<div className="flex gap-1 justify-center">
						<p className='text-gray-800 text-sm text-nowrap'>
							Not a partner?
						</p>
						<Link
								href='/sign-up'
								className='mb-2 inline-block text-sm text-nowrap text-green-500 hover:text-primary hover:underline'>
								Become a partner now
							</Link>
						</div>
					</div>
					<img
						src='/assets/images/signin/top-ellipse.png'
						alt='ellipse'
						className='w-32 lg:w-40 absolute top-0 right-0'
					/>
					<img
						src='/assets/images/signin/bottom-ellipse.png'
						alt='ellipse'
						className='w-32 lg:w-40 absolute left-0 bottom-0'
					/>
				</div>
			</div>
		</main>
	);
}
