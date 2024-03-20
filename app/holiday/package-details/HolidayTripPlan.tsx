import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import TabFilter from "./HolidayTabFilter";

const planner = [
    {
        "name": "Thu",
        "date": "2024-03-21",
        "plan": "Day #01",
        "link": "1"
    },
    {
        "name": "Fri",
        "date": "2024-03-22",
        "plan": "Day #02",
        "link": "2"
    },
    {
        "name": "Fri",
        "date": "2024-03-22",
        "plan": "Day #03",
        "link": "3"
    },
    {
        "name": "Fri",
        "date": "2024-03-22",
        "plan": "Day #04",
        "link": "4"
    },
    {
        "name": "Fri",
        "date": "2024-03-22",
        "plan": "Day #05",
        "link": "5"
    },
]

const HolidayTripPlan: React.FC<any> = () => {
    const [activeButton, setActiveButton] = useState("1");
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center w-full font-medium">
        <div>
          <p className="text-lg font-semibold">Itinerary / Trip Plan</p>
          <p className="text-xs text-gray-500 mb-5">
            Day wise details plans for you
          </p>
        </div>
        <FaChevronDown />
      </div>
      <div className="flex space-x-4">
      {planner.map((item, index) => (
        <Link key={index} 
        href="#"
        // href={`/${item.link}`} 
        className={`w-20 flex shadow-lg border flex-col justify-center items-center p-3 rounded-lg ${activeButton === item.link ? 'bg-green-500 text-white' : 'bg-white'}`}
            onClick={() => setActiveButton(item.link)}
        >
          <p className="font-semibold text-xl">{item.plan.slice(-1)}</p>
          <p>Day</p>
        </Link>
      ))}
    </div>
    <TabFilter/>
    </div>
  );
};

export default HolidayTripPlan;
