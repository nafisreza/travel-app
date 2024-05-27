// HolidayCategorySelect.js

'use client'

import React, { useEffect, useRef, useState } from 'react';
import { GiPalmTree } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/holiday/holidaySlice';

export type OptionProps = {
  category: string;
  active?: boolean;
};

export const Option: React.FC<OptionProps> = ({ category, active }) => {
  return (
    <div className="h-14 w-full py-2 divide-x flex items-center border-b">
      <div className="h-full min-w-[3.25rem] flex justify-center items-center font-semibold text-sm">
        {category}
      </div>
    </div>
  );
};

interface HolidayCategorySelectProps {
  activeCategory?: string;
}

const HolidayCategorySelect: React.FC<HolidayCategorySelectProps> = ({
  activeCategory,
}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement | null>(null);
  const selectWrapper = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const selectedHolidayCategory = useSelector(
    (state: any) => state.holiday.category,
  );

  const departure = useSelector((state) => state.holiday.departure);
  const destination = useSelector((state) => state.holiday.destination);

  const HOLIDAY_API = process.env.NEXT_PUBLIC_HOLIDAY_API;

  const URL = `${HOLIDAY_API}/trips?filter[departure]=${departure?.id}&filter[destination]=${destination?.id}`

  async function fetchCategories() {
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
          Accept: "application/json",
          "Content-Type": "application/json",
          "Accept-Language": "en",
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        const categories = data.payload;
        setOptions(categories);
      } else {
        console.error('Failed to fetch categories:', data.message);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [departure, destination, dispatch]);

  function handleSelect(category: any) {
    dispatch(setCategory(category)); // Dispatch the entire category object
    setFocused(false);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = event.target.value.toLowerCase();
    setOptions(
      options.filter((category: any) =>
        category.title.toLowerCase().includes(searchValue),
      ),
    );
  }

  useEffect(() => {
    window.addEventListener('click', (event: any) => {
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
                            ${focused ? 'bottom-full' : 'bottom-0'}
                        `}
            onClick={() => setFocused(true)}
          >
            <div className="h-full min-w-[3.75rem] flex justify-center items-center font-semibold">
              <GiPalmTree />
            </div>
            <div className="border-l pl-3 text-start">
              <h5 className="text-sm font-medium">{selectedHolidayCategory ? selectedHolidayCategory.title : 'Select a category'}</h5>
              <p className="text-xs text-gray-400 text-light">
                Category
              </p>
            </div>
          </label>
        </div>
        {focused && (
          <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[2]">
            <ul>
              {options.map((category: any, index) => (
                <li
                  key={index}
                  className={`
                                        w-full cursor-pointer flex hover:bg-green-100/50 hover:text-green-900
                                        ${
                                          category === selectedHolidayCategory &&
                                          'bg-green-100 text-green-900'
                                        }
                                    `}
                  onClick={() => handleSelect(category)}
                >
                  <div className="p-3 flex justify-center items-center font-semibold">
                    <GiPalmTree />
                  </div>
                  <div className="border-l pl-3">
                    <Option category={category.title} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HolidayCategorySelect;
