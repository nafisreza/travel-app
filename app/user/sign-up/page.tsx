'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { SelectCountry } from "@/components/input/select/CountrySelect";
import SelectPhoneCode from "@/components/input/select/SelectPhoneCode";
import SignupButton from "../../../components/buttons/SignupButton";
import Button from "@/components/buttons/Button";
import { HiArrowRight } from "react-icons/hi";

export default function Page() {
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <main className=" min-h-screen">
            <div className="w-full flex flex-col p-6 md:p-10 space-y-8">
                <div className="flex-grow">
                    <div className="max-w-screen-lg mt-8 md:mt-10 lg:mt-20">
                        <p>
                            <Link href="/" className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white sm:text-4xl">GuideEasy</Link>
                        </p>
                        <p className="mt-4 text-lg leading-8 text-white font-normal">
                            Discover the vast world of Guideasy, your gateway to over 300,000 products worldwide. Join our global community and explore a universe of choices and proud to be our valuable partner.
                        </p>
                    </div>
                </div>
                <div className="lg:self-end md:max-w-4xl rounded-2xl md:rounded-3xl flex-shrink-0 w-full bg-black/20 grid place-items-center relative">
                    <div className="w-full rounded-lg p-6 md:p-10 text-center">
                        <form className="w-full space-y-6 lg:space-y-10" onSubmit={handleSubmit}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white w-full">Become our valuable partner</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                <div className="">
                                    <SelectCountry />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Business Name" name="businessName" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="First Name" name="firstName" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" required />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Last Name" name="lastName" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" />
                                </div>
                                <div className="relative">
                                    <div className="w-full rounded-lg bg-white text-base text-body-color placeholder:text-gray-500 flex items-center gap-2">
                                        <SelectPhoneCode />
                                        <input type="text" placeholder="Phone" name="phone" className="outline-none focus-visible:shadow-none" required />
                                    </div>
                                </div>
                                <div className="relative">
                                    <input type="email" placeholder="Email" name="email" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" required />
                                </div>
                                <div className="relative">
                                    <input type="password" placeholder="Password" name="password" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" required />
                                </div>
                                <div className="relative">
                                    <input type="password" placeholder="Confirm Password" name="confirmPassword" className="w-full rounded-lg bg-white py-3 md:py-4 px-4 text-base text-body-color placeholder:text-gray-500 outline-none focus:border-primary focus-visible:shadow-none" required />
                                </div>
                            </div>
                            <div className="flex justify-center">
                            <Button classes="py-3 px-6 flex gap-3">Become Our Partner <div className="mt-1"><HiArrowRight /></div> </Button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main >
    )
}