'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <main className="bg-signin">
            <div className="lg:flex">
                <div className="flex-grow">
                    <div className="p-8 lg:p-16 max-w-screen-lg lg:mt-20">
                        <p>
                            <Link href="/" className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white sm:text-4xl">GuideEasy</Link>
                        </p>
                        <p className="mt-4 text-lg leading-8 text-white">
                            Discover the vast world of Guideasy, your gateway to over 300,000 products worldwide. Join our global community and explore a universe of choices and proud to be our valuable partner.
                        </p>
                        <div className="mt-4 lg:mt-6 flex">
                            <Link className="rounded-md bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-base font-medium" href="/user/sign-up">
                                Become our partner
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full lg:max-w-md bg-white min-h-screen grid place-items-center relative">
                    <div className="w-full overflow-hidden max-w-md rounded-lg py-12 lg:py-16 px-12 text-center">
                        <div className="mb-10 text-center md:mb-12">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Sign In</h1>
                        </div>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <input type="text" placeholder="Email" className="w-full rounded-md bg-green-50/80 py-3 px-4 text-base text-body-color placeholder:text-green-500 text-green-500 outline-none focus:border-primary focus-visible:shadow-none" spellCheck="false" />
                            </div>
                            <div className="mb-5 space-y-2">
                                <input type="password" placeholder="Password" className="w-full rounded-md bg-green-50/80 py-3 px-4 text-base text-body-color placeholder:text-green-500 text-green-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                <div className="flex justify-end">
                                    <small className="font-medium text-gray-800 text-sm hover:underline">Forgot password?</small>
                                </div>
                            </div>
                            <div className="my-16">
                                <input type="submit" className="rounded-md py-3 px-12 text-sm font-medium text-white transition bg-green-500 hover:bg-green-600" defaultValue="Sign In" />
                            </div>
                        </form>
                        {/* <p className="mb-6 text-base text-gray-700">Connect With</p>
                        <ul className="mb-12 flex justify-between">
                            <li className="w-full px-2">
                                <a href="" className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90">
                                    <svg width={10} height={20} viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z" fill="white" /></svg>
                                </a>
                            </li>
                            <li className="w-full px-2">
                                <a href="" className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90">
                                    <svg width={22} height={16} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                            <li className="w-full px-2">
                                <a href="" className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90">
                                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z" fill="white" />
                                    </svg>
                                </a>
                            </li>
                        </ul> */}
                        <p className="text-gray-800">Not a partner? <Link href="/user/sign-up" className="mb-2 inline-block text-base text-green-500 hover:text-primary hover:underline">Become a partner now</Link>
                        </p>
                    </div>
                    <img src="/assets/images/signin/top-ellipse.png" alt="ellipse" className="w-32 lg:w-40 absolute top-0 right-0" />
                    <img src="/assets/images/signin/bottom-ellipse.png" alt="ellipse" className="w-32 lg:w-40 absolute left-0 bottom-0" />
                </div>
            </div>
        </main >
    )
}