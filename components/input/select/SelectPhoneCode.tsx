import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "@/app/redux/slice/apiSlice";
import InputMask from "react-input-mask";

export default function SelectPhoneCode() {
  const dispatch = useDispatch();
  const phoneCodes = useSelector((state) => state.api.data);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  useEffect(() => {
    if (phoneCodes && phoneCodes.length > 0) {
      setSelected(phoneCodes[0]);
    }
  }, [phoneCodes]);

  return (
    <>
      <div className="relative">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default p-2 pr-10 md:pr-20 lg:py-3 md:py-4 md:px-4 md:text-base text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              <span className="block truncate text-xs md:text-base text-gray-500">
                {selected?.dialing}
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
                {phoneCodes &&
                  phoneCodes.map((phoneCode, index) => (
                    <Listbox.Option
                      key={index}
                      value={phoneCode}
                      className={({ active }) =>
                        `relative text-xs md:text-base cursor-default text-start select-none py-2 px-2 ${
                          active
                            ? "bg-green-100 text-green-900"
                            : "text-gray-500"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate text-xs md:text-base ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {phoneCode.dialing}
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
      <div>
        <InputMask
          mask={selected?.regex.replaceAll("#", "9")}
          maskPlaceholder="_"
          type="tel"
          placeholder="Phone"
          name="phone"
          className="text-xs md:text-base outline-none focus-visible:shadow-none placeholder:text-gray-500"
          required
        />
      </div>
    </>
  );
}
