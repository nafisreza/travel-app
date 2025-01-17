import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

type FilterPriceProps = {
  onSelect: (option: string) => void;
};

export const FilterPrice: React.FC<FilterPriceProps> = ({ onSelect }) => {
  const options = ["Default", "Price (Low to High)", "Price (High to Low)"];
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="relative">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg border bg-white p-2 lg:py-3 md:py-4 md:px-4 md:text-base pr-10 text-left shadow-md+ focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
            <span className="block truncate text-xs md:text-base text-gray-500">
              {selected}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default text-start select-none py-2 pl-4 pr-4 ${
                      active ? "bg-green-100 text-green-900" : "text-gray-500"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-xs md:text-base ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
