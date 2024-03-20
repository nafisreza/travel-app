import { Fragment, useState } from "react";
import RangeSlider from "@/components/range-slider/range-slider";
import Link from "next/link";
import { FilterPrice } from "@/components/input/select/FilterPrice";
import { MdLocationOn } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

export type HolidayProps = {
  title: string;
  image: string;
  video?: string;
  rating: number;
  location: string;
  agency: string;
  originalPrice: string;
  discountedPrice: string;
  currency: string;
  numberOfPerson: number;
};

export const HolidayCard: React.FC<HolidayProps> = ({
  title,
  image,
  video,
  rating,
  location,
  agency,
  originalPrice,
  discountedPrice,
  currency,
  numberOfPerson,
}) => {
  return (
    <Link href={video ? 'video-link' : "package-details"} className="p-2 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="relative">
        {video && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BsPlayCircle size="48" color="#fff" />
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="h-[172px] w-[410px] object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2 w-16 flex justify-center items-center rounded-lg gap-2 shadow bg-yellow-100">
          <FaStar color="#FFD700" />
          <p className="text-gray-700 font-semibold">{rating}</p>
        </div>
        <div className="absolute -bottom-3 shadow right-2 bg-gray-100 p-2 rounded-full">
          <FaBookmark />
        </div>
      </div>
      <div className="mt-3 ml-1">
        <p className="font-semibold text-lg">{title}</p>
      </div>
      <div className="flex justify-between mx-1">
        <div className="left">
          <div className="location flex items-center gap-2 my-1">
            <div className="bg-green-200 rounded-full p-1">
              <MdLocationOn color="#00BE16" />
            </div>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="travel-agency flex items-center gap-2">
            <div className="bg-green-200 rounded-full p-1">
              <IoIosBriefcase color="#00BE16" />
            </div>
            <p className="text-sm text-gray-500">{agency}</p>
          </div>
        </div>
        <div className="right flex flex-col items-end">
          {originalPrice !== discountedPrice && (
            <del className="text-red-500">
              <span className="text-gray-500 font-light text-sm">{originalPrice} {currency}</span>
            </del>
          )}
          <p className="font-semibold text-xl">
            {discountedPrice} {currency}
          </p>
          <p className="text-[10px]">Starts from (per {numberOfPerson > 1 ? `${numberOfPerson} persons` : "person"})</p>
        </div>
      </div>
    </Link>
  );
};

const holidayData = [
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://a.cdn-hotels.com/gdcs/production191/d1048/12cf2938-a25a-493a-9a6f-5fd5723b01b0.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    video: "https://example.com/video.mp4",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '60,000',
    discountedPrice: '25,000',
    currency: 'BDT',
    numberOfPerson: 1,
  },
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://www.laughtraveleat.com/wp-content/uploads/2020/04/loh-samah-bay-koh-phi-phi-thailand-laugh-travel-eat.jpg",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '120,000',
    discountedPrice: '15,000',
    currency: 'BDT',
    numberOfPerson: 2,
  },
  ,
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://www.laughtraveleat.com/wp-content/uploads/2020/04/loh-samah-bay-koh-phi-phi-thailand-laugh-travel-eat.jpg",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '120,000',
    discountedPrice: '95,000',
    currency: 'BDT',
    numberOfPerson: 2,
  },
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://www.laughtraveleat.com/wp-content/uploads/2020/04/loh-samah-bay-koh-phi-phi-thailand-laugh-travel-eat.jpg",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '120,000',
    discountedPrice: '175,000',
    currency: 'BDT',
    numberOfPerson: 2,
  },
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://www.laughtraveleat.com/wp-content/uploads/2020/04/loh-samah-bay-koh-phi-phi-thailand-laugh-travel-eat.jpg",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '120,000',
    discountedPrice: '10,000',
    currency: 'BDT',
    numberOfPerson: 2,
  },
  {
    title: "Phi Phi Island Bachelor's Tour",
    image: "https://www.laughtraveleat.com/wp-content/uploads/2020/04/loh-samah-bay-koh-phi-phi-thailand-laugh-travel-eat.jpg",
    rating: 4.5,
    location: "Krabi, Thailand",
    agency: "Virgin Holidays Limited",
    originalPrice: '120,000',
    discountedPrice: '69,000',
    currency: 'BDT',
    numberOfPerson: 2,
  },
  
];

export default function HolidaySearchCard() {
  const [filteredHolidays, setFilteredHolidays] = useState(holidayData);

  const handleFilterSelect = (option: string) => {
    let sortedHolidays = [...holidayData];
    switch (option) {
      case "Price (Low to High)":
        sortedHolidays.sort((a, b) =>
          parseInt(a.discountedPrice.replace(",", "")) - parseInt(b.discountedPrice.replace(",", ""))
        );
        break;
      case "Price (High to Low)":
        sortedHolidays.sort((a, b) =>
          parseInt(b.discountedPrice.replace(",", "")) - parseInt(a.discountedPrice.replace(",", ""))
        );
        break;
      default:
        break;
    }
    setFilteredHolidays(sortedHolidays);
  };

  const handleRangeChange = (range: number[]) => {
    const filtered = holidayData.filter(
      (holiday) =>
        parseInt(holiday.discountedPrice.replace(",", "")) >= range[0] &&
        parseInt(holiday.discountedPrice.replace(",", "")) <= range[1]
    );
    setFilteredHolidays(filtered);
  };

  return (
    <section className="space-y-2">
      <div className="flex justify-center flex-col xl:flex-row items-start gap-12">
        <form className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg border space-y-4">
          <h3 className="text-lg font-semibold p-4 border-b">Filter</h3>
          <div className="flex flex-col items-center gap-6 px-4 lg:px-6 py-8">
            <RangeSlider onChange={handleRangeChange} />
            <div className="w-full">
              <FilterPrice onSelect={handleFilterSelect} />
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2"
            >
              Apply
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {filteredHolidays.map((holiday, index) => (
            <HolidayCard key={index} {...holiday} />
          ))}
        </div>
      </div>
    </section>
  );
};