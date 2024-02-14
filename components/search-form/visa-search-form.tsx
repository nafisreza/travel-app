'use client'

import VisaClass from "./visa-class"
import CheckButton, { wayArray } from "./checkbutton"
import Travellers from "./tavellers"
import LocationSelect, { Location, dummyDataType } from "../form/input/LocationSelect"
import { IoClose, IoSearch } from "react-icons/io5"
import { ReactNode, useState } from "react"
import MUIDatePicker from "../form/input/mui-date-picker"
import { ArrowSwapHorizontal } from "iconsax-react"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/navigation"
import Styles from './visa-search-form.module.css'
import { PlusIcon } from "@heroicons/react/20/solid"

export const travellers = [
    ["Adults", "12 years & above"],
    ["Children", "From 5 to under 12"],
    ["Kids", "From 2 to under 5"],
    ["Infants", "Under 2 years"]
]

export const destination = [
    {
        code: "AAA",
        country: "Vietnam",
        location: "Ho Chi Minh City"
    },
    {
        code: "AAA",
        country: "Thailand",
        location: "Ho Chi Minh City"
    },
    {
        code: "AAA",
        country: "Singapore",
        location: "Ho Chi Minh City"
    },
    {
        code: "AAA",
        country: "Malaysia",
        location: "Ho Chi Minh City"
    },
    {
        code: "AAA",
        country: "Indonesia",
        location: "Ho Chi Minh City"
    },
]

export const CloseForm = ({ handleClick }: { handleClick: () => void }) => (
    <button type="button" onClick={handleClick} className="border h-14 w-14 aspect-square rounded-xl grid place-items-center hover:border-gray-400">
        <IoClose className="text-2xl" />
    </button>
)

export const SearchButton = () => (
    <div>
        <button type="submit" className="border h-14 w-14 aspect-square rounded-xl grid place-items-center hover:border-gray-400">
            <IoSearch className="text-2xl" />
        </button>
    </div>
)

export const FormBox = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-wrap md:flex-nowrap w-full items-center gap-3">
        {children}
    </div>
)

export const AbsoluteButton = () => (
    <button type="button" className={twMerge(
        "absolute z-[11]",
        "right-4 md:-right-[22px]",
        "-bottom-5 md:bottom-auto",
    )}>
        <div className={twMerge("bg-white rounded-full h-8 w-8 grid place-items-center border relative") + ` ${Styles.swapBtn}`}>
            <div className={twMerge("bg-gray-200 rounded-full p-1 hover:bg-gray-100")}>
                <ArrowSwapHorizontal size="16" color="currentColor" className={twMerge("rotate-90 md:rotate-0")} />
            </div>
        </div>
    </button>
)

export const OneWay = () => {
    return (
        // grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        <FormBox>
            <div className="w-full relative flex items-center">
                <LocationSelect />
                <AbsoluteButton />
            </div>
            <LocationSelect />
            <MUIDatePicker />
            <SearchButton />
        </FormBox>
    )
}

export const RoundTrip = () => {
    return (
        <FormBox >
            <div className="w-full relative flex items-center">
                <LocationSelect />
                <AbsoluteButton />
            </div>
            <LocationSelect />
            <MUIDatePicker />
            <MUIDatePicker />
            <SearchButton />
        </FormBox>
    )
}

export const MultiTrip = () => {
    const [locations, setlocations] = useState<dummyDataType[]>([{ cityCode: "AAA", city: "Vietnam", state: "Ho Chi Minh City" }]);
    function handleAddLocation() {
        setlocations([...locations, { cityCode: "AAA", city: "Vietnam", state: "Ho Chi Minh City" }]);
    }
    function handleRemoveLocation(idx: number) {
        if (idx < 1) { return; }
        setlocations(locations.filter((e, i) => i !== idx));
    }
    return (
        <div className="space-y-4">
            <ul className="space-y-4">
                {locations.map((location, idx) => (
                    <li key={idx}>
                        <FormBox>
                            <div className="w-full relative flex items-center">
                                <LocationSelect />
                                <AbsoluteButton />
                            </div>
                            <LocationSelect />
                            <MUIDatePicker />
                            <MUIDatePicker />
                            <CloseForm handleClick={() => { handleRemoveLocation(idx); }} />
                        </FormBox>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center">
                <button type="button" className="flex gap-1" onClick={handleAddLocation}><PlusIcon className="w-5 h-5" /> Add more flight</button>
                <SearchButton />
            </div>
        </div>
    )
}

export default function VisaSearchForm() {
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
                <div className="w-full flex flex-wrap lg:flex-nowrap+ justify-between gap-y-3 z-[2]">
                    <CheckButton handleWay={handleWay} />
                    <div className="flex gap-2 md:gap-3">
                        <Travellers />
                        <VisaClass />
                    </div>
                </div>
                <div className="z-[1]">
                    {way == wayArray[0] && <OneWay />}
                    {way == wayArray[1] && <RoundTrip />}
                    {way == wayArray[2] && <MultiTrip />}
                </div>
            </form>
        </div>
    )
}