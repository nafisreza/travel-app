'use client';

import { setNationality, setVisaCountry } from '@/app/store/locationActions';
import { setVisaTypes } from '@/app/store/visaTypeActions';
import { ClockIcon } from '@heroicons/react/20/solid';
import { FaArrowsAltH } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { HiMiniCurrencyDollar } from "react-icons/hi2";

interface VisaDetailsProps {
	visaDetails: any;
  }

export const VisaDetails: React.FC<VisaDetailsProps> = ({ visaDetails }) => {
	const visaCountry = useSelector((state) => state.location.visaCountry);
    const nationality = useSelector((state) => state.location.nationality);
    const visaType = useSelector((state) => state.visaType.visaTypes);

	return (
		<div className='flex flex-wrap justify-between items-center bg-white text-gray-800 rounded-xl'>
			<figure className='flex gap-3 items-center'>
				{visaDetails && <img
					src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Singapore/garden-in-the-city-singapore.jpg?imwidth=680'
					alt='profile'
					className='w-14 h-14 object-cover'
				/>}
				<div className='space-y-1'>
					<h5 className='text-base font-semibold'>{visaType[0]?.title || 'N/A'}</h5>
					<p className='text-sm'>Single Entry</p>
				</div>
			</figure>
			<div className='flex gap-8'>
				<div className='p-3 flex gap-4 lg:gap-8 justify-center items-center'>
					<div className='w-full space-y-1 text-start'>
						<p className='text-xs text-gray-400'>Visa Country</p>
						<h5 className='text-md font-semibold'>
							{visaCountry?.title || 'N/A'}
						</h5>
						<p className='text-sm flex items-center gap-3 whitespace-nowrap'>
							<ClockIcon className='w-5' />
							{visaDetails.detail.timezone}
						</p>
					</div>
					<div>
						<FaArrowsAltH size='20' />
					</div>
					<div className='w-full space-y-1 text-end'>
						<p className='text-xs text-gray-400'>Nationality</p>
						<h5 className='text-md font-semibold'>
						{nationality?.title || 'N/A'}
						</h5>
						<p className='text-sm flex items-center justify-end gap-2 whitespace-nowrap'>
							<HiMiniCurrencyDollar  size='20'/>
							{visaDetails.detail.currency}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
