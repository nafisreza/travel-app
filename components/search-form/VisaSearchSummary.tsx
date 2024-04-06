import { useState } from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import LocationSelect from '../form/input/LocationSelect';
import MUIDatePicker from '../form/input/mui-date-picker';
import { SwapButton } from '../search-form/swap-button';
import { useDispatch, useSelector } from 'react-redux';
import VisaSearch from './visa-search';

import { setNationality, setVisaCountry } from '@/app/store/locationActions';
import { setVisaTypes } from '@/app/store/visaTypeActions';

export default function VisaSearchSummary() {
  const visaCountry = useSelector((state) => state.location.visaCountry);
  const nationality = useSelector((state) => state.location.nationality);
  const visaType = useSelector((state) => state.visaType.visaTypes); // Access selected visa type
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setVisaCountry(visaCountry));
    dispatch(setNationality(nationality));
    dispatch(setVisaTypes(visaType));
  };

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const handleModify = () => {
    setIsModifyModalOpen(true);
  };

  return (
    <>
      <div className="space-y-2 bg-slate-100">
        <div className="flex justify-between items-center text-gray-800">
          <div className="px-2 lg:px-4 py-3 flex gap-4 lg:gap-12">
            <div className="w-full p-2 text-start">
              <h5 className="font-medium whitespace-nowrap">{visaCountry?.title || 'N/A'}</h5>
              <p className="text-xs text-gray-400">Visa Country</p>
            </div>
            <FaArrowRightArrowLeft size="64" />
            <div className="w-full p-2 text-start">
              <h5 className="font-medium whitespace-nowrap">{nationality?.title || 'N/A'}</h5>
              <p className="text-xs text-gray-400">Nationality</p>
            </div>
            <div className="w-full p-2 text-start">
              <h5 className="font-medium whitespace-nowrap">{visaType && visaType.length > 0 ? visaType[0].title : 'N/A'}</h5> {/* Display selected visa type */}
              <p className="text-xs text-gray-400">Category</p>
            </div>
          </div>
          <div className="px-4 py-2">
            <h4 className="">
              <button
                type="button"
                onClick={handleModify}
                className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2"
              >
                Modify
              </button>
            </h4>
          </div>
        </div>
      </div>
      <div>
        {isModifyModalOpen && <VisaSearch />}
      </div>
    </>
  );
}
