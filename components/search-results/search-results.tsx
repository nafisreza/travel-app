'use client'

import LocationSelect from "../form/input/LocationSelect"
import { IoSearch } from "react-icons/io5"
import { useState } from "react"
import MUIDatePicker from "../form/input/mui-date-picker"
import { ArrowSwapHorizontal } from "iconsax-react"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { ArrowsRightLeftIcon } from "@heroicons/react/20/solid"
import {SwapButton} from "../search-form/swap-button"

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

export const SearchButton = () => (
    <div>
        <button type="submit" className="border h-14 w-14 aspect-square rounded-xl grid place-items-center hover:border-gray-600">
            <IoSearch className="text-2xl" />
        </button>
    </div>
)

export const OneWay = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-3">
            <div className="relative flex items-center">
                <LocationSelect />
                <SwapButton />
            </div>
            <LocationSelect />
            <MUIDatePicker />
            <SearchButton />
        </div>
    )
}

export const RoundTrip = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-3">
            <div className="relative flex items-center">
                <LocationSelect />
                <SwapButton />
            </div>
            <LocationSelect />
            <MUIDatePicker />
            <SearchButton />
        </div>
    )
}

export const MultiTrip = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-3">
            <div className="relative flex items-center">
                <LocationSelect />
                <SwapButton />
            </div>
            <LocationSelect />
            <MUIDatePicker />
            <SearchButton />
        </div>
    )
}

export default function VisaResultForm({ openSearchForm }: { openSearchForm: () => void }) {
    const [way, setway] = useState<string>("");
    function handleWay(way: string) { setway(way); }

    const [travellers, settravellers] = useState<string>("");
    function handleTravellers(way: string) { settravellers(way); }

    return (
        <div className="space-y-2 bg-slate-100">
            <div className="flex justify-between items-center text-gray-800">
                <div className="px-3 lg:px-4 py-3 flex gap-4 lg:gap-12">
                    <div className="w-full p-2 text-start">
                        <h5 className="font-medium">China</h5>
                        <p className="text-xs text-gray-400">Visa</p>
                    </div>
                    <ArrowsRightLeftIcon className="min-w-[1.5rem] w-[1.5rem]" />
                    <div className="w-full p-2 text-start">
                        <h5 className="font-medium">Spain</h5>
                        <p className="text-xs text-gray-400">Nationality</p>
                    </div>
                    <div className="w-full p-2 text-start">
                        <h5 className="font-medium whitespace-nowrap">Travel Visa</h5>
                        <p className="text-xs text-gray-400">03 Jan 2023</p>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <h4 className="">
                        <button type="button" onClick={openSearchForm} className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2">Modify</button>
                    </h4>
                </div>
            </div>
        </div>
    )
}