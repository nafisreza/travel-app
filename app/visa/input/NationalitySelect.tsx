import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNationality } from "@/app/features/visa/visaSlice";
import axios from "axios";

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
}) => {
  return (
    <div className="h-14 w-full py-4 divide-x flex items-center border-b">
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
export interface Country {
  countryCode: string;
  country: string;
  city: string;
  id: string;
  title: string;
  iso2: string;
}

const NationalitySelect: React.FC<any> = ({
  type,
  activeLocation,
}) => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(activeLocation || null);
  const [focused, setFocused] = useState<boolean>(false);

  const PARTNER_API = process.env.NEXT_PUBLIC_PARTNER_API

  const URL = `${PARTNER_API}/nationalities`;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
        });
        if (response.data && response.data.payload && response.data.payload.length > 0) {
          setOptions(response.data.payload);
          if (!activeLocation) {
            setSelected(response.data.payload[0]);
          }
        } else {
          console.error("Empty response data or data not in expected format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, [activeLocation]);

  const handleSelect = (location: Country) => {
    setSelected(location);
    setFocused(false);
    dispatch(setNationality(location));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredOptions = options.filter((option) =>
      option.title.toLowerCase().includes(searchValue)
    );
    setOptions(filteredOptions);
  };

  const selectWrapper = useRef<HTMLInputElement | null>(null);

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
            onChange={handleSearch}
          />
          <label
            className={`
              w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out bg-white rounded-xl
              ${focused ? "bottom-full" : "bottom-0"}
            `}
            onClick={() => setFocused(true)}
          >
            <div className="h-full min-w-[3rem] flex justify-center items-center font-semibold">
              {selected?.iso2}
            </div>
            <div className="border-l pl-3 text-start">
              <h5 className="text-sm font-medium ">{selected?.title}</h5>
              <p className="text-xs text-gray-400 text-light">
                Nationality
              </p>
            </div>
          </label>
        </div>
        {focused && (
          <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[2]">
            <ul>
              {options.map((location: Country) => (
                <li
                  key={location.id}
                  className={`
                    w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900
                    ${location.id === selected?.id ? "bg-green-100 text-green-900" : ""}
                  `}
                  onClick={() => handleSelect(location)}
                >
                  <Option
                    countryCode={location.iso2}
                    country={location.title}
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

export default NationalitySelect;
