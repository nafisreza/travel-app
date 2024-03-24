'use client';
import Button from '@/components/buttons/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

// import { getSession } from "@/actions"
import { redirect } from "next/navigation"

// import { login } from "@/actions";
import { useFormState } from "react-dom";
import Forgot from './Forgot';
import Login from './Login';


const Page = async () => {
	// const [state, formAction] = useFormState<any, FormData>(login, undefined);

	// const session = await getSession()

	// if(session.isLoggedIn){
	//   redirect("/")
	// }


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
				<Login/>
			</div>
		</main>
	);
}

export default Page;