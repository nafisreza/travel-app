'use client';

import { setNationality, setVisaCountry } from '@/app/store/locationActions';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { BsPassport } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

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
		<div className='h-14 w-full py-2 divide-x flex items-center border-b'>
			<div className='h-full min-w-[3.25rem] flex justify-center items-center font-semibold'>
				{countryCode}
			</div>
			<div className='border-l pl-2 text-start'>
				<h5 className='text-sm font-medium'>{country}</h5>
				<p className='text-xs'>{city}</p>
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
	{ countryCode: 'BD', country: 'Bangladesh', city: 'Dhaka' },
	{ countryCode: 'TUR', country: 'Turkey', city: 'Istanbul' },
	{ countryCode: 'THAI', country: 'Thailand', city: 'Bangkok' },
	{ countryCode: 'USA', country: 'United States', city: 'New York' },
];

export function Location() {
	const [selected, setSelected] = useState<dummyDataType>(dummyData[0]);

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className='w-full relative'>
				<Listbox.Button className='rounded-xl border h-14 w-full py-2 flex items-center hover:border-gray-600'>
					<div className='h-full min-w-[3.25rem] flex justify-center items-center font-semibold'>
						{selected.countryCode}
					</div>
					<div className='border-l pl-2 text-start'>
						<h5 className='text-sm font-medium'>
							{selected.country}
						</h5>
						<p className='text-xs'>{selected.city}</p>
					</div>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacountry-100'
					leaveTo='opacountry-0'>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]'>
						{dummyData.map((person: dummyDataType, personIdx) => (
							<Listbox.Option
								key={personIdx}
								value={person}
								className={({ active }) =>
									`w-full relative cursor-default select-none ${
										active
											? 'bg-green-100 text-green-900'
											: 'text-gray-900'
									}`
								}>
								{({ selected }) => (
									<Option
										countryCode={person.countryCode}
										country={person.country}
										city={person.city}
									/>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}

interface LocationSelectProps {
	type?: 'nationality' | 'visa-country' | 'visa-category';
	activeLocation?: dummyDataType;
}

const LocationSelect: React.FC<LocationSelectProps> = ({
	type,
	activeLocation,
}) => {
	const { visaCountry, nationality } = useSelector((state: any) => state);
	const dispatch = useDispatch();

	const handleSelect = (location: dummyDataType) => {
		if (type === 'visa-country') {
			dispatch(setVisaCountry(location));
			setSelected(location);
			setfocused(false);
		} else if (type === 'nationality') {
			dispatch(setNationality(location));
			setSelected(location);
			setfocused(false);
		}
	};

	/** To filter on search */
	const [optionsClone, setoptionsClone] =
		useState<dummyDataType[]>(dummyData);
	/** Use filtered state as option list */
	const [selected, setSelected] = useState<dummyDataType>(
		activeLocation || optionsClone[0],
	);
	const [focused, setfocused] = useState<boolean>(false);
	const searchInput = useRef<HTMLInputElement | null>(null);
	const selectWrapper = useRef<HTMLInputElement | null>(null);

	// function handleSelect(location: dummyDataType) {
	//     // setSelected(dummyData[index]);
	//     setSelected(location);
	//     setfocused(false);
	// }

	function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
		if (!event.target.value) {
			setoptionsClone(dummyData);
			return;
		}
		const searchValue = event.target.value.toLowerCase();
		setoptionsClone(
			dummyData.filter((location: dummyDataType) =>
				location.country.toLowerCase().includes(searchValue),
			),
		);
	}

	useEffect(function mount() {
		window.addEventListener('click', (event: any) => {
			if (
				selectWrapper.current &&
				!selectWrapper.current.contains(event.target)
			) {
				setfocused(false);
			}
		});
		if (focused) {
			searchInput.current?.focus();
		}
	});

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
                  w-full h-full py-2 flex items-center absolute left-0 transition-all ease-out z-10 bg-white rounded-xl
                  ${focused ? 'bottom-full' : 'bottom-0'}
                `}
						onClick={() => setfocused(true)}>
						<div className='h-full min-w-[3.75rem] flex justify-center items-center font-semibold'>
							{type === 'visa-category' ? (
								<BsPassport />
							) : (
								selected.countryCode
							)}
						</div>
						<div className='border-l pl-3 text-start'>
							<h5 className='text-sm font-medium'>
								{selected.country}
							</h5>
							<p className='text-xs text-gray-400 text-light'>
								{type === 'nationality'
									? 'Nationality'
									: 'Visa ' +
									  (type === 'visa-category'
											? 'Category'
											: 'Country')}
							</p>
						</div>
					</label>
				</div>
				{focused && (
					<div className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[20]'>
						<ul>
							{optionsClone.map(
								(location: dummyDataType, locationIdx) => (
									<li
										key={locationIdx}
										className={`
                        w-full cursor-pointer hover:bg-green-100/50 hover:text-green-900
                        ${
							location.country === selected.country &&
							'bg-green-100 text-green-900'
						}
                      `}
										onClick={() => handleSelect(location)}>
										<Option
											countryCode={location.countryCode}
											country={location.country}
											city={location.city}
										/>
									</li>
								),
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default LocationSelect;
