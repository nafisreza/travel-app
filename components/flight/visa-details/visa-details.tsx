'use client'

import { ClockIcon } from "@heroicons/react/20/solid"
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline"
import { FaArrowsAltH } from "react-icons/fa";

export type Props = { link?: string }

export const VisaDetails: React.FC<Props> = ({ link }) => {
    return (
        <div className="flex flex-wrap justify-between items-center bg-white text-gray-800 rounded-xl">
            <figure className="flex gap-3 items-center">
                <img src="/assets/images/flight.png" alt="profile" className="w-20 md:w-20 h-20 md:h-24 object-cover" />
                <div className='space-y-1'>
                    <h5 className="text-base font-semibold">Thynk Travels</h5>
                    <p className="text-sm">Travel Visa</p>
                </div>
            </figure>
            <div className='flex gap-8'>
                <div className="p-3 flex gap-4 lg:gap-8 justify-center items-center">
                    <div className="w-full space-y-1 text-start">
                        <p className="text-xs text-gray-400">Visa Country</p>
                        <h5 className="text-md font-semibold">China</h5>
                        <p className="text-sm flex items-center gap-3 whitespace-nowrap">
                            <ClockIcon className="w-5" />GMT +8
                        </p>
                    </div>
                    <div >
                    <FaArrowsAltH size="20"/>
                    </div>
                    <div className="w-full space-y-1 text-end">
                        <p className="text-xs text-gray-400">Nationality</p>
                        <h5 className="text-md font-semibold">Spain</h5>
                        <p className=" text-sm">AED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
