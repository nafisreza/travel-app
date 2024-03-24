'use client'
import Link from "next/link";
import Register from "./Register";
import {store} from '../redux/store'
import { Provider } from "react-redux";

export default function Page() {
    return (
        <Provider store={store}>
        <main className="bg-signin min-h-screen">
            <div className="w-full flex flex-col p-6 md:p-10 space-y-8">
                <div className="flex-grow">
                    <div className="max-w-screen-lg mt-4 md:mt-10 lg:mt-20">
                        <p>
                            <Link href="/" className="mt-4 text-3xl uppercase lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white sm:text-4xl">Guideasy</Link>
                        </p>
                        <p className=" my-4 text-sm lg:text-lg lg:leading-8 text-white font-normal">
                            Discover the vast world of Guideasy, your gateway to over 300,000 products worldwide. Join our global community and explore a universe of choices and proud to be our valuable partner.
                        </p>
                    </div>
                </div>
                <Register/>
            </div>
        </main >
        </Provider>
    )
}