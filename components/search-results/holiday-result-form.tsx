import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";

export const SearchButton = () => (
  <div>
    <button
      type="submit"
      className="border h-14 w-14 aspect-square rounded-xl grid place-items-center hover:border-gray-600"
    >
      <IoSearch className="text-2xl" />
    </button>
  </div>
);

export default function HolidayResultForm({ openSearchForm }) {
    const departure = useSelector((state) => state.holiday.departure);
    const destination = useSelector((state) => state.holiday.destination);
    const category = useSelector((state) => state.holiday.category); 
    const dispatch = useDispatch();

  // const handleFromChange = (location) => {
  //   dispatch(setFrom(location));
  // };

  // const handleToChange = (location) => {
  //   dispatch(setTo(location));
  // };

  return (
    <div className="space-y-2 bg-slate-100">
      <div className="flex justify-between items-center text-gray-800">
      <div className='px-2 lg:px-4 py-3 flex gap-4 lg:gap-12'>
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{departure.title}
						</h5>
						<p className='text-xs text-gray-400'>From</p>
					</div>
					<FaArrowRightArrowLeft size='64' />
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{destination.title}
						</h5>
						<p className='text-xs text-gray-400'>To</p>
					</div>
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{category.title}
						</h5>
						<p className='text-xs text-gray-400'>Category</p>
					</div>
				</div>
        <div className="px-4 py-2">
          <h4 className="">
            <button
              type="button"
              onClick={openSearchForm}
              className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2"
            >
              Modify
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
}
