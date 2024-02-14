import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'

export const visaClass = ["Economy", "Premium", "Business", "First Class"]

export default function VisaClass() {
    const [selected, setSelected] = useState(visaClass[0])

    return (
        <div className="w-full sm:w-44 md:w-48">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-green-500/10 h-9 md:h-11 pl-3 md:pl-4 pr-10 text-left shadow-md+ focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block text-green-500 font-medium text-sm">{selected}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ArrowDown2 className="w-4 h-4 text-green-500" />
                        </span>
                    </Listbox.Button>
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[11]">
                            {visaClass.map((person, personIdx) => (
                                <Listbox.Option key={personIdx} value={person}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-2 md:pl-4 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'}`}>
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium text-green-500' : 'font-normal'}`}>
                                                {person}
                                            </span>
                                            {/* {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null} */}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
