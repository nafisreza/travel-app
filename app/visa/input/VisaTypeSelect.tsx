import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BsPassport } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setVisaTypes } from '@/app/features/visa/visaSlice';

export type OptionProps = {
  typeOfVisa: string;
  active?: boolean;
};

export const Option: React.FC<OptionProps> = ({ typeOfVisa, active }) => {
  return (
    <div className='h-14 w-full py-2 divide-x flex items-center border-b'>
      <div className='h-full min-w-[3.25rem] flex justify-center items-center font-semibold text-sm'>
        {typeOfVisa}
      </div>
    </div>
  );
};

interface VisaSelectProps {
  activeVisa?: string;
}

interface VisaType {
  id: string;
  title: string;
}

const VisaSelect: React.FC<VisaSelectProps> = ({ activeVisa }) => {
  const [options, setOptions] = useState<VisaType[]>([]);
  const [selected, setSelected] = useState<VisaType | null>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement | null>(null);
  const selectWrapper = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  const visaCountry = useSelector((state) => state.visa.visaCountry);
  const nationality = useSelector((state) => state.visa.nationality);
  const applicable = useSelector((state) => state.visa.applicable);

  const PARTNER_API = process.env.NEXT_PUBLIC_PARTNER_API

  useEffect(() => {
    const fetchVisaTypes = async () => {
      try {
        const response = await axios.get(
          `${PARTNER_API}/categories?filter[country]=${visaCountry?.id || ''}&filter[nationality]=${nationality?.id || ''}&filter[applicable]=${applicable?.id || ''}`,
          {
            headers: {
              Authorization: 'Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2',
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Accept-Language': 'en',
            },
          }
        );
        if (response.data && response.data.payload && response.data.payload.length > 0) {
          setOptions(response.data.payload);
          if (!activeVisa) {
            setSelected(response.data.payload[0]);
          }
        } else {
          console.error("Empty response data or data not in expected format");
        }
      } catch (error) {
        console.error('Error fetching visa types:', error);
      }
    };

    fetchVisaTypes();
  }, [visaCountry, nationality, dispatch]);

  const handleSelect = (visaType: VisaType) => {
    setSelected(visaType);
    dispatch(setVisaTypes([visaType])); // Dispatching selected visa type to Redux store
    setFocused(false);
};

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) {
      setOptions([]);
      return;
    }
    const searchValue = event.target.value.toLowerCase();
    setOptions(
      options.filter((typeOfVisa: VisaType) => typeOfVisa.title.toLowerCase().includes(searchValue))
    );
  }

  useEffect(
    function mount() {
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
    },
    [focused]
  );

  return (
    <div className='w-full'>
      <div className='relative' ref={selectWrapper}>
        <div className='block relative h-14 overflow-hidden rounded-xl border w-full hover:border-gray-400'>
          <input
            type='text'
            className='w-full h-full py-2 px-4 focus:border-none focus:outline-none rounded-xl'
            ref={searchInput}
            onChange={handleSearch}
          />
          <label
            className={`
                            w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out bg-white rounded-xl
                            ${focused ? 'bottom-full' : 'bottom-0'}
                        `}
            onClick={() => setFocused(true)}>
            <div className='h-full min-w-[3.75rem] flex justify-center items-center font-semibold'>
              <BsPassport />
            </div>
            <div className='border-l pl-3 text-start'>
              <h5 className='text-sm font-medium'>
                {selected ? selected.title : ''}
              </h5>
              <p className='text-xs text-gray-400 text-light'>
                Visa Type
              </p>
            </div>
          </label>
        </div>
        {focused && (
          <div className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[2]'>
            <ul>
              {options.map((typeOfVisa: VisaType, index) => (
                <li
                  key={index}
                  className={`
                                        w-full cursor-pointer flex hover:bg-green-100/50 hover:text-green-900
                                        ${
                  typeOfVisa === selected && 'bg-green-100 text-green-900'
                  }
                                    `}
                  onClick={() => handleSelect(typeOfVisa)}>
                  <div className='p-3 flex justify-center items-center font-semibold'>
                    <BsPassport />
                  </div>
                  <div className='border-l pl-3'>
                    <Option typeOfVisa={typeOfVisa.title} />
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

export default VisaSelect;
