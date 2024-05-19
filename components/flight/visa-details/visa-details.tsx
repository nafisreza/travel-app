'use client';

import { setNationality, setVisaCountry } from '@/app/store-old/locationActions';
import { setVisaTypes } from '@/app/store-old/visaTypeActions';
import { ClockIcon } from '@heroicons/react/20/solid';
import { FaArrowsAltH } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { HiMiniCurrencyDollar } from "react-icons/hi2";

interface VisaDetailsProps {
	visaDetails: any;
  }

export const VisaDetails: React.FC<VisaDetailsProps> = ({ visaDetails }) => {
	const visaCountry = visaDetails?.package.country
	const nationality = visaDetails?.package.nationality
	const visaType = visaDetails?.category
	const entry = visaDetails?.pricing.entry

	return (
		<div className='flex flex-wrap justify-between items-center bg-white text-gray-800 rounded-xl'>
			<figure className='flex gap-3 items-center'>
				{visaDetails && <img
					src={visaDetails.package.image}
					alt='visa'
					className='w-14 h-14 object-cover'
				/>}
				<div className='space-y-1'>
					<h5 className='text-base font-semibold'>{visaType}</h5>
					<p className='text-sm'>{entry}</p>
				</div>
			</figure>
			<div className='flex gap-8'>
				<div className='p-3 flex gap-4 lg:gap-8 justify-center items-center'>
					<div className='w-full space-y-1 text-start'>
						<p className='text-xs text-gray-400'>Visa Country</p>
						<h5 className='text-md font-semibold whitespace-nowrap'>
							{visaCountry}
						</h5>
						<p className='text-sm flex items-center gap-3 whitespace-nowrap'>
							<ClockIcon className='w-5' />
							{visaDetails.package.timezone}
						</p>
					</div>
					<div>
						<FaArrowsAltH size='20' />
					</div>
					<div className='w-full space-y-1 text-end'>
						<p className='text-xs text-gray-400'>Nationality</p>
						<h5 className='text-md font-semibold whitespace-nowrap'>
						{nationality}
						</h5>
						<p className='text-sm flex items-center justify-end gap-2 whitespace-nowrap'>
							<HiMiniCurrencyDollar  size='20'/>
							{visaDetails.currency.exchange.code}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
