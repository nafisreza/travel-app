import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPassport } from "react-icons/bs";
import { Listbox, Transition } from "@headlessui/react";
import {
  setNationality,
  setVisaCountry,
  setFrom,
  setTo,
} from "@/app/store/locationActions";

export type OptionProps = {
  countryCode: string;
  country: string;
  city: string;
  active?: boolean;
};

export const Option: React.FC<OptionProps> = ({
  countryCode,
  country,
  city,
  active,
}) => {
  return (
    <div className="h-14 w-full py-2 divide-x flex items-center border-b">
      <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold">
        {countryCode}
      </div>
      <div className="border-l pl-2 text-start">
        <h5 className="text-sm font-medium">{country}</h5>
        <p className="text-xs">{city}</p>
      </div>
    </div>
  );
};

export type dummyDataType = {
  countryCode: string;
  country: string;
  city: string;
};

export const dummyData: dummyDataType[] = [
  { countryCode: "BD", country: "Bangladesh", city: "Dhaka" },
  { countryCode: "TUR", country: "Turkey", city: "Istanbul" },
  { countryCode: "THAI", country: "Thailand", city: "Bangkok" },
  { countryCode: "USA", country: "United States", city: "New York" },
];

interface LocationSelectProps {
  type?: "nationality" | "visa-country" | "visa-category" | "from" | "to";
  activeLocation?: dummyDataType;
  onSelect?: Function;
}

const LocationSelect: React.FC<LocationSelectProps> = ({
  type,
  activeLocation,
}) => {
  const { visaCountry, nationality } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<dummyDataType>(
    activeLocation || dummyData[0]
  );
  const [focused, setFocused] = useState<boolean>(false);
  const [optionsClone, setOptionsClone] = useState<dummyDataType[]>(dummyData);

  const searchInput = useRef<HTMLInputElement | null>(null);
  const selectWrapper = useRef<HTMLInputElement | null>(null);

  const handleSelect = (location: dummyDataType) => {
    if (type === "visa-country") {
      dispatch(setVisaCountry(location));
      setSelected(location);
      setFocused(false);
    } else if (type === "nationality") {
      dispatch(setNationality(location));
      setSelected(location);
      setFocused(false);
    } else if (type === "from") {
      dispatch(setFrom(location));
      setSelected(location);
      setFocused(false);
    } else if (type === "to") {
      dispatch(setTo(location));
      setSelected(location);
      setFocused(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setOptionsClone(dummyData);
      return;
    }
    const searchValue = event.target.value.toLowerCase();
    setOptionsClone(
      dummyData.filter((location: dummyDataType) =>
        location.country.toLowerCase().includes(searchValue)
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectWrapper.current &&
        !selectWrapper.current.contains(event.target as Node)
      ) {
        setFocused(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
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
              w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out bg-white rounded-xl
              ${focused ? "bottom-full" : "bottom-0"}
            `}
            onClick={() => setFocused(true)}
          >
            <div className="h-full min-w-[3.75rem] flex justify-center items-center font-semibold">
              {type === "visa-category" ? <BsPassport /> : selected.countryCode}
            </div>
            <div className="border-l pl-3 text-start">
              <h5 className="text-sm font-medium">{selected.country}</h5>
              <p className="text-xs text-gray-400 text-light">
                {type === "nationality"
                  ? "Nationality"
                  : type === "visa-country"
                  ? "Visa Country"
                  : type === "from"
                  ? "From"
                  : type === "to"
                  ? "To"
                  : ""}
              </p>
            </div>
          </label>
        </div>
        {focused && (
          <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[2]">
            <ul>
              {optionsClone.map((location: dummyDataType, index) => (
                <li
                  key={index}
                  className={`
                    w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900
                    ${
                      location.country === selected.country
                        ? "bg-green-100 text-green-900"
                        : ""
                    }
                  `}
                  onClick={() => handleSelect(location)}
                >
                  <Option
                    countryCode={location.countryCode}
                    country={location.country}
                    city={location.city}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;
