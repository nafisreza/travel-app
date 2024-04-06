import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react"


function SigninWithGithub() {
  return (
    <div>
        <div onClick={() => signIn('github')} className='flex justify-center gap-2 mt-5 cursor-pointer'>
        <p>Sign in with Github </p>
        <FaGithub size='24'/>
        </div>
    </div>
  )
}

export default SigninWithGithub