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

export const OneWay = () => {
	const activeVisaType = useSelector((state: any) => state.visaType.visaType);
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

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		router.push('/visa/search-results');
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
