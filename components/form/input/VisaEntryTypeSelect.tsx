import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IoMdArrowDropdown } from "react-icons/io";

export type OptionProps = {
    entryType: string;
    active?: boolean;
};

export const Option: React.FC<OptionProps> = ({ entryType, active }) => {
    return (
        <div className="h-14 w-full py-2 divide-x flex ml-5 items-center border-b">
            <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold">{entryType}</div>
        </div>
    );
};

const entryTypes: string[] = [
    'Single Entry - 30 days (Sticker)',
    'Multiple Entry - 180 days (Sticker)',
    'Single Entry - 30 days (e-Visa)',
    'Multiple Entry - 180 days (e-Visa)',
    'On Arrival Visa'
];

interface VisaEntryTypeSelectProps {
    activeEntryType?: string;
}

const VisaEntryTypeSelect: React.FC<VisaEntryTypeSelectProps> = ({ activeEntryType }) => {
    const [optionsClone, setOptionsClone] = useState<string[]>(entryTypes);
    const [selected, setSelected] = useState<string>(activeEntryType || optionsClone[0]);
    const [focused, setFocused] = useState<boolean>(false);
    const searchInput = useRef<HTMLInputElement | null>(null);
    const selectWrapper = useRef<HTMLInputElement | null>(null);

    function handleSelect(entryType: string) {
        setSelected(entryType);
        setFocused(false);
    }

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.value) {
            setOptionsClone(entryTypes);
            return;
        }
        const searchValue = event.target.value.toLowerCase();
        setOptionsClone(entryTypes.filter((type: string) => type.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        window.addEventListener('click', (event: any) => {
            if (selectWrapper.current && !selectWrapper.current.contains(event.target)) {
                setFocused(false);
            }
        });
        if (focused) {
            searchInput.current?.focus();
        }
    }, [focused]);

    return (
        <div className="w-full px-4 py-3">
            <div className="relative" ref={selectWrapper}>
                <div className="block relative h-14 overflow-hidden rounded-xl border w-full hover:border-gray-400">
                    <input
                        type="text"
                        className="w-full h-full py-2 px-4 focus:border-none focus:outline-none rounded-xl"
                        ref={searchInput}
                        onChange={handleSearch}
                    />
                    <label
                        className={`
                            w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out z-10 bg-white rounded-xl
                            ${focused ? 'bottom-full' : 'bottom-0'}
                        `}
                        onClick={() => setFocused(true)}
                    >
                        <div className="w-full border-l px-3 flex justify-between">
                            <h5 className="text-sm font-medium">{selected}</h5>
                            <IoMdArrowDropdown />
                        </div>
                    </label>
                </div>
                {focused && (
                    <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]">
                        <ul>
                            {optionsClone.map((entryType: string, index) => (
                                <li
                                    key={index}
                                    className={`
                                        w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900
                                        ${entryType === selected && 'bg-green-100 text-green-900'}
                                    `}
                                    onClick={() => handleSelect(entryType)}
                                >
                                    <Option entryType={entryType} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisaEntryTypeSelect;