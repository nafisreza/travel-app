import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import LocationSelect from "../form/input/LocationSelect";
import { useDispatch, useSelector } from "react-redux";
import { setFrom, setTo } from "@/app/store/locationActions";
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

export const OneWay = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-3">
      <LocationSelect type="from" />
      <LocationSelect type="to" />
      <MUIDatePicker />
      <SearchButton />
    </div>
  );
};

export default function HolidayResultForm({ openSearchForm }) {
  const { from, to } = useSelector((state) => state.location);
  const holidayCategory = useSelector(
    (state) => state.holidayCategory.holidayCategory
  ); // Add this line to get holiday category
  const dispatch = useDispatch();

  const handleFromChange = (location) => {
    dispatch(setFrom(location));
  };

  const handleToChange = (location) => {
    dispatch(setTo(location));
  };

  return (
    <div className="space-y-2 bg-slate-100">
      <div className="flex justify-between items-center text-gray-800">
      <div className='px-2 lg:px-4 py-3 flex gap-4 lg:gap-12'>
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{from.country}
						</h5>
						<p className='text-xs text-gray-400'>From</p>
					</div>
					<FaArrowRightArrowLeft size='64' />
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{to.country}
						</h5>
						<p className='text-xs text-gray-400'>To</p>
					</div>
					<div className='w-full p-2 text-start'>
						<h5 className='font-medium whitespace-nowrap'>
							{holidayCategory}
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
