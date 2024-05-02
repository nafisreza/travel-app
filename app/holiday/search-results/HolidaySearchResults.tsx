import { Fragment, useState, useEffect } from "react";
import RangeSlider from "@/components/range-slider/range-slider";
import { FilterPrice } from "@/components/input/select/FilterPrice";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import axios from 'axios';
import { BsPlayCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import router from "next/router";

export type HolidayProps = {
  id: string;
  title: string;
  image: string;
  video: string;
  rating: string;
  city: string;
  company: {
    title: string;
    image: string;
  };
  payable: {
    current: string;
    regular: string;
  };
};

export const HolidayCard: React.FC<HolidayProps> = ({
  id,
  title,
  image,
  rating,
  city,
  company,
  payable,
}) => {
  const packageId = id;
  return (
    <Link href={`/package-details/${id}`} className="w-[350px] p-2 bg-white text-gray-800 rounded-lg shadow-lg border">
      <div className="relative">
        { (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BsPlayCircle size="48" color="#fff" />
          </div>
        )}

        <img
          src={image}
          alt={title}
          className="h-[150px] w-full object-cover rounded-xl"
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
        <p className="font-semibold text-md">{title}</p>
      </div>
      <div className="flex justify-between mx-1">
        <div className="left">
          <div className="location flex items-center gap-2 my-1">
            <div className="bg-green-200 rounded-full p-1">
              <MdLocationOn color="#00BE16" />
            </div>
            <p className="text-sm text-gray-500">{city}</p>
          </div>
          <div className="travel-agency flex items-center gap-2">
            <img src={company.image} alt={company.title} className="w-6 h-6 rounded-full" />
            <p className="text-sm text-gray-500">{company.title}</p>
          </div>
        </div>
        <div className="right flex flex-col items-end justify-end">
          {payable.current !== payable.regular && (
            <del className="text-red-500">
              <span className="text-gray-500 font-light text-sm">{payable.regular}</span>
            </del>
          )}
          <p className="font-semibold text-lg">
            {payable.current}
          </p>
          <p className="text-[10px]">Starts from</p>
        </div>
      </div>
    </Link>
  );
};

export default function HolidaySearchCard() {
  const [filteredHolidays, setFilteredHolidays] = useState<HolidayProps[]>([]);

  const departure = useSelector((state) => state.holiday.departure);
  const destination = useSelector((state) => state.holiday.destination);
  const category = useSelector((state) => state.holiday.category);

  useEffect(() => {
    const fetchHolidayData = async () => {
      try {
        const response = await axios.get(`https://holiday.guideasy.com/api/v1/client-management/packages?filter[departure]=${departure?.id}&filter[destination]=${destination?.id}&filter[trip]=${category?.id}&filter[genre]=price&filter[sorting]=asc`, {
          headers: {
            Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          }
        });
        const data = response.data;
        if (data.success === "200") {
          setFilteredHolidays(data.payload.packages);
        } else {
          console.error("Failed to fetch holiday data");
        }
      } catch (error) {
        console.error("Error fetching holiday data:", error);
      }
    };
    fetchHolidayData();
  }, [departure, destination, category]);


  return (
    <section className="space-y-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {filteredHolidays.map((holiday) => (
          <HolidayCard key={holiday.id} {...holiday} />
        ))}
      </div>
    </section>
  );
};
