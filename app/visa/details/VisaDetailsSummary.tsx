"use client";

import Link from "next/link";
import Accordion from "./Accordion";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export type OptionProps = {
  entry: entryType;
  active?: boolean;
};

export const Option: React.FC<OptionProps> = ({ entry, active }) => {
  return (
    <div className="h-14 w-full py-2 divide-x flex ml-5 items-center border-b">
      <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold">
        {entry.name}
      </div>
    </div>
  );
};

type entryType = {
  id: number;
  name: string;
  entry: string;
  maxStay: string;
  validity: string;
  fee: number;
};

const entryTypes: entryType[] = [
  {
    id: 1,
    name: "Single Entry - 30 days (Sticker)",
    entry: "Single",
    maxStay: "30 days",
    validity: "90 days",
    fee: 900,
  },
  {
    id: 2,
    name: "Multiple Entry - 180 days (Sticker)",
    entry: "Multiple",
    maxStay: "180 days",
    validity: "300 days",
    fee: 3100,
  },
  {
    id: 3,
    name: "Multiple Entry - 180 days (e-Visa)",
    entry: "Multiple",
    maxStay: "180 days",
    validity: "200 days",
    fee: 3299,
  },
  {
    id: 4,
    name: "On Arrival Visa",
    entry: "Multiple",
    maxStay: "30 days",
    validity: "90 days",
    fee: 4500,
  },
];

interface VisaEntryTypeSelectProps {
  activeEntryType?: string;
  onEntryTypeSelect?: any;
}

const VisaEntryTypeSelect: React.FC<VisaEntryTypeSelectProps> = ({
  activeEntryType,
  onEntryTypeSelect, // Add this prop
}) => {
  const [optionsClone, setOptionsClone] = useState<entryType[]>(entryTypes);
  const [selected, setSelected] = useState<entryType>(
    entryTypes.find((entry) => entry.name === activeEntryType) || entryTypes[0]
  );
  const [focused, setFocused] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement | null>(null);
  const selectWrapper = useRef<HTMLInputElement | null>(null);

  function handleSelect(entry: entryType) {
    setSelected(entry);
    setFocused(false);
    onEntryTypeSelect(entry); // Notify parent component about the selected entry
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      setOptionsClone(entryTypes);
      return;
    }
    const searchValue = event.target.value.toLowerCase();
    setOptionsClone(
      entryTypes.filter((entry) =>
        entry.name.toLowerCase().includes(searchValue)
      )
    );
  }
  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      if (
        selectWrapper.current &&
        !selectWrapper.current.contains(event.target)
      ) {
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
                            ${focused ? "bottom-full" : "bottom-0"}
                        `}
            onClick={() => setFocused(true)}
          >
            <div className="w-full border-l px-3 flex justify-between">
              <h5 className="text-sm font-medium">{selected.name}</h5>
              <IoMdArrowDropdown />
            </div>
          </label>
        </div>
        {focused && (
          <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]">
            <ul>
              {optionsClone.map((entry, index) => (
                <li
                  key={index}
                  className={`
                                        w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900
                                        ${
                                          entry === selected &&
                                          "bg-green-100 text-green-900"
                                        }
                                    `}
                  onClick={() => handleSelect(entry)}
                >
                  <Option entry={entry} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export const Counter = ({
  onCountChange,
}: {
  onCountChange: (newCount: number) => void;
}) => {
  const [count, setCount] = useState<number>(1);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
    onCountChange(newCount); // Notify the parent component about the count change
  };

  return (
    <div className="md:p-2 inline-block bg-white md:border border-gray-200 md:rounded-lg">
      <div className="flex items-center gap-x-1.5">
        <button
          type="button"
          onClick={() => {
            handleCountChange(Math.max(count - 1, 1));
          }}
          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>

        <input
          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
          type="text"
          value={count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value);
            handleCountChange(isNaN(newCount) ? 1 : newCount);
          }}
        />
        <button
          type="button"
          onClick={() => {
            handleCountChange(count + 1);
          }}
          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const VisaDetailsSummary: React.FC<any> = () => {
  const [selectedEntryType, setSelectedEntryType] = useState<entryType | null>(
    entryTypes[0]
  );
  const [count, setCount] = useState<number>(1);

  const handleEntryTypeSelect = (entryType: entryType) => {
    setSelectedEntryType(entryType);
  };

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  useEffect(() => {
    console.log(selectedEntryType);
  }, [selectedEntryType, count]);

  return (
    <div className="bg-white rounded-xl shadow max-w-md">
      <form className="">
        <div className="flex justify-between items-center px-4 py-3">
          <p className="font-semibold">Quantity</p>
          <Counter onCountChange={handleCountChange} />
        </div>
        <VisaEntryTypeSelect
          activeEntryType={selectedEntryType?.name}
          onEntryTypeSelect={handleEntryTypeSelect} // Pass the callback function
        />
        <Accordion
          defaultOpen={true}
          title="Single Entry"
          body={
            <div className="items-center flex flex-col gap-6 px-4 lg:px-6 py-4">
              <div className="w-full flex justify-between items-center">
                <ul className="w-full space-y-1 text-gray-700 list-disc">
                  <li>Entry: {selectedEntryType?.entry}</li>
                  <li>Max Stay: {selectedEntryType?.maxStay}</li>
                  <li>Validity: {selectedEntryType?.validity}</li>
                </ul>
                <div className="w-auto">
                  <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                    BDT {selectedEntryType?.fee * count}
                  </h2>
                  <p className="text-sm font-medium text-gray-400">
                    Embassy Fee
                  </p>
                </div>
              </div>
              <Link
                href="/visa/checkout"
                className="items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white"
                type="submit"
              >
                Book now
              </Link>
            </div>
          }
        />
      </form>
    </div>
  );
};

export default VisaDetailsSummary;
