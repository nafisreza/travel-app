'use client'

import { wayArray } from "./checkbutton"
import LocationSelect from "../form/input/LocationSelect"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormBox, SearchButton } from "./flight-search"
import { SwapButton } from "./swap-button"
import VisaTypeSelect from "../form/input/VisaTypeSelect"

export const OneWay = () => {
    return (
        <FormBox>
            <div className="w-full relative flex items-center">
                <LocationSelect type="visa-country" />
                <SwapButton />
            </div>
            <LocationSelect type="nationality" />
            {/* <LocationSelect type="visa-category"/> */}
            <VisaTypeSelect/>
            <SearchButton />
            
        </FormBox>
    )
}

export default function VisaSearch() {
    const [way, setway] = useState<string>(wayArray[0]);
    function handleWay(way: string) { setway(way); }

    const [travellers, settravellers] = useState<string>(wayArray[0]);
    function handleTravellers(way: string) { settravellers(way); }

    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push('/visa/search-results');
    }

    return (
        <div className="max-w-screen-xl mx-auto+ space-y-2">
            <h1 className="text-xl font-semibold" id="multiplefeatures">Search Visa</h1>
            <form className="bg-white p-2 md:p-4 rounded-xl border space-y-6" onSubmit={handleSubmit}>
                <div className="z-[1]">
                    <OneWay />
                </div>
            </form>
        </div>
    )
}