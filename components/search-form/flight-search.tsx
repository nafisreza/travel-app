'use client';

import { PlusIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import LocationSelect, { dummyDataType } from '../form/input/LocationSelect';
import MUIDatePicker from '../form/input/mui-date-picker';
import CheckButton, { wayArray } from './checkbutton';
import { SwapButton } from './swap-button';
import Travellers from './tavellers';
import VisaClass from './visa-class';

export const travellers = [
	['Adults', '12 years & above'],
	['Children', 'From 5 to under 12'],
	['Kids', 'From 2 to under 5'],
	['Infants', 'Under 2 years'],
];

export const destination = [
	{
		code: 'AAA',
		country: 'Vietnam',
		location: 'Ho Chi Minh City',
	},
	{
		code: 'AAA',
		country: 'Thailand',
		location: 'Ho Chi Minh City',
	},
	{
		code: 'AAA',
		country: 'Singapore',
		location: 'Ho Chi Minh City',
	},
	{
		code: 'AAA',
		country: 'Malaysia',
		location: 'Ho Chi Minh City',
	},
	{
		code: 'AAA',
		country: 'Indonesia',
		location: 'Ho Chi Minh City',
	},
];

export const CloseForm = ({ handleClick }: { handleClick: () => void }) => (
	<button
		type='button'
		onClick={handleClick}
		className='border h-10 w-10 sm:h-14 sm:w-14 aspect-square rounded-xl grid place-items-center hover:border-gray-400'>
		<IoClose className='text-lg sm:text-2xl' />
	</button>
);

export const SearchButton = () => (
	<div>
		<button
			type='submit'
			className='border h-10 w-10 sm:h-14 sm:w-14 aspect-square rounded-xl grid place-items-center bg-green-500 hover:border-gray-400'>
			<IoSearch className='text-lg sm:text-2xl' color='white'/>
		</button>
	</div>
);

export const FormBox = ({ children }: { children: ReactNode }) => (
	<div className='grid md:grid-cols-4 grid-cols-2 w-full items-center gap-3'>
		{children}
	</div>
);

export const OneWay = () => {
	return (
		// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
		<FormBox>
			<div className='w-full relative flex items-center'>
				<LocationSelect type='from'/>
				<SwapButton />
			</div>
			<LocationSelect type='to'/>
			<MUIDatePicker bottomText='Journey Date'/>
			<SearchButton />
		</FormBox>
	);
};

export const RoundTrip = () => {
	return (
		<FormBox>
			<div className='w-full relative flex items-center'>
				<LocationSelect type='from' />
				<SwapButton />
			</div>
			<LocationSelect type='to' />
			<MUIDatePicker bottomText='Journey Date'/>
			<MUIDatePicker bottomText='Return Date'/>
			<SearchButton />
		</FormBox>
	);
};

export const MultiTrip = () => {
	const [locations, setlocations] = useState<dummyDataType[]>([
		{ countryCode: 'AAA', country: 'Vietnam', city: 'Ho Chi Minh City' },
	]);
	function handleAddLocation() {
		setlocations([
			...locations,
			{
				countryCode: 'AAA',
				country: 'Vietnam',
				city: 'Ho Chi Minh City',
			},
		]);
	}
	function handleRemoveLocation(idx: number) {
		if (idx < 1) {
			return;
		}
		setlocations(locations.filter((e, i) => i !== idx));
	}
	return (
		<div className='space-y-4'>
			<ul className='space-y-4'>
				{locations.map((location, idx) => (
					<li key={idx}>
						<FormBox>
							<div className='w-full relative flex items-center'>
								<LocationSelect type='from' />
								<SwapButton />
							</div>
							<LocationSelect type='to'/>
							<MUIDatePicker bottomText='Journey Date'/>
							<MUIDatePicker bottomText='Return Date'/>
							<CloseForm
								handleClick={() => {
									handleRemoveLocation(idx);
								}}
							/>
						</FormBox>
					</li>
				))}
			</ul>
			<div className='flex justify-between items-center'>
				<button
					type='button'
					className='flex gap-1'
					onClick={handleAddLocation}>
					<PlusIcon className='w-5 h-5' /> Add more flight
				</button>
				<SearchButton />
			</div>
		</div>
	);
};

export default function FlightSearch() {
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
		<div className='flex justify-center flex-col space-y-2'>
			<h1 className='text-xl font-semibold' id='multiplefeatures'>
				Search Flight
			</h1>
			<form
				className='bg-white p-2 md:p-4 rounded-xl border space-y-6'
				onSubmit={handleSubmit}>
				<div className='w-full flex flex-wrap lg:flex-nowrap+ justify-center lg:justify-between gap-y-3 z-[2]'>
					<CheckButton handleWay={handleWay} />
					<div className='flex gap-2 md:gap-3'>
						<Travellers />
						<VisaClass />
					</div>
				</div>
				<div className='z-[1]'>
					{way == wayArray[0] && <OneWay />}
					{way == wayArray[1] && <RoundTrip />}
					{way == wayArray[2] && <MultiTrip />}
				</div>
			</form>
		</div>
	);
}
