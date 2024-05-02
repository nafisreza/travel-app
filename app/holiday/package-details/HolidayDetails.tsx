import { ClockIcon } from '@heroicons/react/20/solid';
import { FaArrowsAltH } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setFrom, setTo } from '@/app/store-old/locationActions'
import { setHolidayCategory } from '@/app/store-old/holidayCategoryActions';
import { RootState } from '@/app/store-old/store';

export const HolidayDetails: React.FC = () => {
    const { from, to } = useSelector((state: RootState) => state.location);
    const holidayCategory = useSelector((state: RootState) => state.holidayCategory.holidayCategory); 
    const dispatch = useDispatch();

    const handleFromCountryChange = (country: string) => {
        dispatch(setFrom(country));
    };

    const handleToCountryChange = (country: string) => {
        dispatch(setTo(country));
    };

    const handleHolidayCategoryChange = (category: string) => {
        dispatch(setHolidayCategory(category));
    };

    return (
        <div className='flex flex-wrap justify-between items-center bg-white text-gray-800 rounded-xl'>
            <figure className='flex gap-3 items-center'>
                <img
                    src='https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg'
                    alt='profile'
                    className='w-20 md:w-20 h-20 md:h-24 object-cover'
                />
                <div className='space-y-1'>
                    <h5 className='text-base font-semibold'>Thynk Travels</h5>
                    <p className='text-sm'>{holidayCategory}</p>
                </div>
            </figure>
            <div className='flex gap-8'>
                <div className='p-3 flex gap-4 lg:gap-8 justify-center items-center'>
                    <div className='w-full space-y-1 text-start'>
                        <p className='text-xs text-gray-400'>From</p>
                        <h5 className='text-md font-semibold'>
                            {from.country}
                        </h5>
                        <p className='text-sm flex items-center gap-3 whitespace-nowrap'>
                            <ClockIcon className='w-5' />
                            GMT +8
                        </p>
                    </div>
                    <div>
                        <FaArrowsAltH size='20' />
                    </div>
                    <div className='w-full space-y-1 text-end'>
                        <p className='text-xs text-gray-400'>To</p>
                        <h5 className='text-md font-semibold'>
                            {to.country}
                        </h5>
                        <p className=' text-sm'>{to.countryCode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

