'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFrom, setTo } from '../store/locationActions';
import HolidayCategorySelect from './HolidayCategory';
import { FormBox, SearchButton } from '@/components/search-form/flight-search';
import { SwapButton } from '@/components/search-form/swap-button';
import LocationSelect from '@/components/form/input/LocationSelect';

export default function HolidaySearch() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [fromLocation, setFromLocation] = useState<any>(null);
  const [toLocation, setToLocation] = useState<any>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/holiday/search-results');
  }

  return (
    <div className='max-w-screen-xl mx-auto+ space-y-2'>
      <form className='bg-white p-2 md:p-4 rounded-xl space-y-6' onSubmit={handleSubmit}>
        <div className='z-[1]'>
          <FormBox>
            <div className='w-full relative flex items-center'>
              <LocationSelect type='from' onSelect={(location: any) => dispatch(setFrom(location))} />
              <SwapButton />
            </div>
            <LocationSelect type='to' onSelect={(location: any) => dispatch(setTo(location))} />
            <HolidayCategorySelect />
            <SearchButton />
          </FormBox>
        </div>
      </form>
    </div>
  );
}
