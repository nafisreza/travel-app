'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { countries } from '../../../lib/countries'
import RangeSlider from '@/components/range-slider/range-slider'
import Link from 'next/link'
import { SelectCountry } from '@/components/input/select/CountrySelect'

export type Props = { link?: string }

export const CardItem: React.FC<Props> = ({ link }) => {
    return (
        <Link href={link || "details"} className="flex flex-wrap justify-between items-center p-4 bg-white text-gray-800 rounded-xl space-y-3 md:space-y-6 shadow">
            <figure className="flex gap-3 items-center">
                <img src="/assets/images/flight.png" alt="profile" className="w-16 md:w-20 h-24 md:h-28 object-cover" />
                <div className='space-y-1'>
                    <h5 className="text-base font-medium">Thynk Travels</h5>
                    <p className="text-sm">Travel Visa</p>
                </div>
            </figure>
            <div className='flex flex-col sm:items-end gap-1'>
                <p className="text-sm">Start From</p>
                <h5 className="text-base font-medium">Case of Hit &amp; Run</h5>
                <p className="text-sm">Earn BDT 400</p>
            </div>
        </Link>
    )
}

export default function VisaSearchCard() {
    return (
        <section className="space-y-2">
            <div className="flex flex-col xl:flex-row items-start gap-6">
                <form className="flex-shrink-0 w-72 bg-white rounded-xl shadow space-y-4">
                    <h3 className='text-lg font-semibold p-4 border-b'>Filter</h3>
                    <div className="flex flex-col items-center gap-6 px-4 lg:px-6 py-8">
                        <RangeSlider />
                        <div className="w-full"><SelectCountry /></div>
                        <button type="submit" className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2">Modify</button>
                    </div>
                </form>
                <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </section>
    )
}
