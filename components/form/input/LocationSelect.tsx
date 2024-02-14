'use client'

import { Fragment, useEffect, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export type OptionProps = {
    cityCode: string;
    city: string;
    state: string;
    active?: boolean;
};

export const Option: React.FC<OptionProps> = ({ cityCode, city, state, active }) => {
    return (
        <div className="h-14 w-full py-2 divide-x flex items-center border-b">
            <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold">{cityCode}</div>
            <div className="border-l pl-2 text-start">
                <h5 className="text-sm font-medium">{city}</h5>
                <p className="text-xs">{state}</p>
            </div>
        </div>
    )
};

export type dummyDataType = { cityCode: string, city: string, state: string };

export const dummyData: dummyDataType[] = [
    { cityCode: "DHA", city: "Dhaka", state: "Dhaka address" },
    { cityCode: "RAJ", city: "Rajshahi", state: "Rajshahi address" },
    { cityCode: "KHU", city: "Khulna", state: "Khulna address" },
    { cityCode: "BAR", city: "Barisal", state: "Barisal address" },
];

export function Location() {
    const [selected, setSelected] = useState<dummyDataType>(dummyData[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="w-full relative">
                <Listbox.Button className="rounded-xl border h-14 w-full py-2 flex items-center hover:border-gray-600">
                    <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold">{selected.cityCode}</div>
                    <div className="border-l pl-2 text-start">
                        <h5 className="text-sm font-medium">{selected.city}</h5>
                        <p className="text-xs">{selected.state}</p>
                    </div>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]">
                        {dummyData.map((person: dummyDataType, personIdx) => (
                            <Listbox.Option key={personIdx} value={person}
                                className={({ active }) => `w-full relative cursor-default select-none ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'}`}>
                                {({ selected }) => (
                                    <Option cityCode={person.cityCode} city={person.city} state={person.state} />
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default function LocationSelect({ activeLocation }: { activeLocation?: dummyDataType }) {
    /** To filter on search */
    const [optionsClone, setoptionsClone] = useState<dummyDataType[]>(dummyData);
    /** Use filtered state as option list */
    const [selected, setSelected] = useState<dummyDataType>(activeLocation || optionsClone[0]);
    const [focused, setfocused] = useState<boolean>(false);
    const searchInput = useRef<HTMLInputElement | null>(null);
    const selectWrapper = useRef<HTMLInputElement | null>(null);

    function handleSelect(location: dummyDataType) {
        // setSelected(dummyData[index]);
        setSelected(location);
        setfocused(false);
    }

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.value) {
            setoptionsClone(dummyData);
            return;
        };
        const searchValue = event.target.value.toLowerCase();
        setoptionsClone(dummyData.filter((location: dummyDataType) => location.city.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        window.addEventListener('click', (event: any) => {
            if (selectWrapper.current && !selectWrapper.current.contains(event.target)) {
                setfocused(false);
            }
        });
        if (focused) {
            searchInput.current?.focus();
        }
    })

    return (
        <div className="w-full">
            <div className="relative" ref={selectWrapper} >
                <div className="block relative h-14 overflow-hidden rounded-xl border w-full hover:border-gray-400">
                    <input type="text" className="w-full h-full py-2 px-4 focus:border-none focus:outline-none rounded-xl" ref={searchInput} onChange={handleSearch} />
                    <label className={twMerge("w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out z-10 bg-white rounded-xl",
                        focused ? "bottom-full" : "bottom-0")} onClick={() => { setfocused(true) }}>
                        <div className="h-full min-w-[3.75rem] flex justify-center items-center font-semibold">{selected.cityCode}</div>
                        <div className="border-l pl-3 text-start">
                            <h5 className="text-sm font-medium">{selected.city}</h5>
                            <p className="text-xs">{selected.state} {JSON.stringify(focused)}</p>
                        </div>
                    </label>
                </div>
                {
                    focused &&
                    <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]">
                        <ul>
                            {optionsClone.map((location: dummyDataType, locationIdx) => (
                                <li key={locationIdx}
                                    className={twMerge('w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900', location.city === selected.city && 'bg-green-100 text-green-900')} onClick={() => { handleSelect(location) }}>
                                    <Option cityCode={location.cityCode} city={location.city} state={location.state} />
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
