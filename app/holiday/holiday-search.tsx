'use client'

import { useRouter } from 'next/navigation';
import HolidayCategorySelect from './HolidayCategory';
import { FormBox, SearchButton } from '@/components/search-form/flight-search';
import { SwapButton } from '@/components/search-form/swap-button';
import HolidayDepartureSelect from './HolidayDepartureSelect';
import HolidayDestinationSelect from './HolidayDestinationSelect';
import { useSelector } from 'react-redux';

export default function HolidaySearch() {
  const departure = useSelector((state) => state.holiday.departure)
  const destination = useSelector((state) => state.holiday.destination)
  const category = useSelector((state) => state.holiday.category)

  const departureId = departure.id
  const destinationId = destination.id
  const categoryId = category.id
  
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      departure: departureId,
      destination: destinationId,
      category: categoryId
    });
    router.push(`/holiday/search-results/?${queryParams.toString()}`);
  }


  return (
    <div className='max-w-screen-xl mx-auto+ space-y-2'>
      <form className='bg-white p-2 md:p-4 rounded-xl space-y-6' onSubmit={handleSubmit}>
        <div className='z-[1]'>
          <FormBox>
            <div className='w-full relative flex items-center'>
              <HolidayDepartureSelect/>
              <SwapButton />
            </div>
              <HolidayDestinationSelect/>
            <HolidayCategorySelect />
            <SearchButton />
          </FormBox>
        </div>
      </form>
    </div>
  );
}
