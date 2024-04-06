import Button from '@/components/buttons/Button'
import Input from '@/components/input/InputBox'
import Link from 'next/link'
import React from 'react'
import Forgot from './Forgot'
import SigninWithGithub from './SigninWithGithub'


function Login() {
  return (
    <div className='flex-shrink-0 w-full lg:max-w-md bg-white min-h-screen grid place-items-center relative'>
    <div className='w-full overflow-hidden max-w-md rounded-lg py-12 lg:py-16 px-12 text-center'>
        <div className='mb-10 text-center md:mb-12'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                Sign In
            </h1>
        </div>
        <form className='w-full'>
            <Input type='text' name='username' placeholder='Username' />
            <Input type='password' name='password' placeholder='Password' />
            <Forgot/>

            <div className='my-6 lg:my-16'>
                <Button classes='py-3 px-10 text-sm'>
                    Sign In
                </Button>
                <div>
                <SigninWithGithub/>
                </div>
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
  )
}

export default Login