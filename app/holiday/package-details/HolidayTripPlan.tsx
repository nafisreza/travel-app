import React from "react";
import { FaChevronDown } from "react-icons/fa";
import TabFilter from "./HolidayTabFilter";

const HolidayTripPlan: React.FC<any> = ({planner, packageId}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full font-medium">
        <div>
          <p className="text-lg font-semibold">Itinerary / Trip Plan</p>
          <p className="text-xs text-gray-500 mb-5">
            Day wise details plans for you
          </p>
        </div>
        <FaChevronDown />
      </div>
    <TabFilter packageId={packageId} planner={planner}/>
    </div>
  );
};

export default HolidayTripPlan;
