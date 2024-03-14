'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationSelect from '@/components/form/input/LocationSelect';
import { FormBox, SearchButton } from '@/components/search-form/flight-search';
import { SwapButton } from '@/components/search-form/swap-button';
import HolidayCategorySelect from './HolidayCategory';

export default function HolidaySearch() {
  const [fromLocation, setFromLocation] = useState<any>(null);
  const [toLocation, setToLocation] = useState<any>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/holiday/search-results');
  }

  return (
    <div className='max-w-screen-xl mx-auto+ space-y-2'>
      <form
        className='bg-white p-2 md:p-4 rounded-xl space-y-6'
        onSubmit={handleSubmit}>
        <div className='z-[1]'>
          <FormBox>
            <div className='w-full relative flex items-center'>
              <LocationSelect type='from' />
              <SwapButton />
            </div>
            <LocationSelect type='to' activeLocation={{ countryCode: 'THAI', country: 'Thailand', city: 'Bangkok' }} />
			<HolidayCategorySelect/>
            <SearchButton />
          </FormBox>
        </div>
      </form>
    </div>
  );
}
