'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationSelect from '../form/input/LocationSelect';
import VisaTypeSelect from '../form/input/VisaTypeSelect';
import { wayArray } from './checkbutton';
import { FormBox, SearchButton } from './flight-search';
import { SwapButton } from './swap-button';
import VisaCountrySelect from '@/app/visa/input/VisaCountrySelect';
import NationalitySelect from '@/app/visa/input/NationalitySelect';
import { useSearchParams } from 'next/navigation'; 

export const OneWay = () => {
	return (
		<FormBox>
			<div className='w-full relative flex items-center'>
				<VisaCountrySelect/>
				<SwapButton />
			</div>
			<NationalitySelect />
			<VisaTypeSelect />
			<SearchButton />
		</FormBox>
	);
};

export default function VisaSearch() {
	const [way, setway] = useState<string>(wayArray[0]);
	function handleWay(way: string) {
		setway(way);
	}

	const [travellers, settravellers] = useState<string>(wayArray[0]);
	function handleTravellers(way: string) {
		settravellers(way);
	}

	
	const router = useRouter();

	const visaCountry = useSelector((state) => state.visa.visaCountry);
	const nationality = useSelector((state) => state.visa.nationality);
	const visaType = useSelector((state) => state.visa.visaTypes);

	const searchParams = useSearchParams()
	 
	const search = searchParams.get('search')

	console.log(search)


	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const queryString = `?country=${visaCountry?.title}&nationality=${nationality?.title}&category=${visaType[0].title}`;

        router.push(`/visa/search-results${queryString}`);
    }

	return (
		<div className='max-w-screen-xl mx-auto+ space-y-2'>
			<form
				className='bg-white p-2 md:p-4 rounded-xl space-y-6'
				onSubmit={handleSubmit}>
				<div className='z-[1]'>
					<OneWay />
				</div>
			</form>
		</div>
	);
}
