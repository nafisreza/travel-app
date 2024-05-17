import { ClockIcon } from '@heroicons/react/20/solid';
import { FaArrowsAltH } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store-old/store';
import { useSearchParams } from 'next/navigation';
import { IoMdAirplane } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import HolidayTripPlan from "./HolidayTripPlan";
import { useEffect, useState } from 'react';
import axios from 'axios';
import HolidayPriceSummary from './HolidayPriceSummary';

export const HolidayDetails: React.FC = () => {
    // const departure = useSelector((state: RootState) => state.holiday.departure);
    // const destination = useSelector((state: RootState) => state.holiday.destination);
    // const category = useSelector((state: RootState) => state.holiday.category); 
    // const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const packageId = searchParams.get('packageId')
    const departure = searchParams.get('departure')
    const departureIso = searchParams.get('depIso')
    const destination = searchParams.get('destination')
    const destinationIso = searchParams.get('desIso')
    const category = searchParams.get('category')

    const [packages, setPackages] = useState([])
    useEffect(() => {
        const fetchPackage = async () => {
          try {
            const response = await axios.get(`https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}`, {
              headers: {
                Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
              }
            });
            if (response.data) {
              setPackages(response.data.payload);
              
            } else {
              console.error("Failed to fetch package data");
            }
          } catch (error) {
            console.error("Error fetching package data:", error);
          }
        };
        fetchPackage();
      }, []);

      const booking = packages.booking
      const company = packages.company 
      const payable = packages.payable 
      const planner = packages.planner 
      const date = packages.booking;


    return (
      <div className='flex w-full justify-between gap-8 p-8'>
        <div className='w-2/3 p-8 rounded-xl bg-white shadow-md space-y-6'>
        <div className='flex justify-between'>
        <figure className='w-2/3 flex gap-8 items-center'>
                <img
                    src={packages.image}
                    alt='package image'
                    className='w-20 md:w-20 h-20 md:h-24 object-cover rounded'
                />
                <div className='space-y-1'>
                    <h5 className='break-words text-base font-semibold'>{packages.title}</h5>
                    <p className='text-sm'>Location: {packages.city}, {packages.country}</p>
                    <p className='text-sm'>Category: {category}</p>

                </div>
            </figure>
            <div className='flex gap-8'>
                <div className='p-3 flex gap-4 lg:gap-8 justify-center items-center'>
                    <div className='w-full space-y-1 text-start'>
                        <p className='text-xs text-gray-400 text-end'>From</p>
                        <h5 className='text-md font-semibold whitespace-nowrap'>
                            {departure}
                        </h5>
                        <p className='text-sm flex justify-end items-center gap-2 whitespace-nowrap'>
                            <IoMdAirplane className='w-5' size={18} />
                            {departureIso}
                        </p>
                    </div>
                    <div>
                        <FaArrowsAltH size='20' />
                    </div>
                    <div className='w-full space-y-1 text-end'>
                        <p className='text-xs text-gray-400'>To</p>
                        <h5 className='text-md font-semibold whitespace-nowrap'>
                            {destination}
                        </h5>
                        <p className='text-sm flex justify-end items-center gap-2 whitespace-nowrap'>
                            <FaLocationDot className='w-5' />
                            {destinationIso}
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='w-full mt-10'>
            <HolidayTripPlan planner={planner} packageId={packageId}/>
            </div>
        </div >
        <div className='w-1/3'>
        <HolidayPriceSummary/>
        </div>
        </div>
    );
};

