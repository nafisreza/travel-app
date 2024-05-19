import Link from "next/link";
import RangeSlider from "@/components/range-slider/range-slider";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type Props = { link?: string, visa?: any };

export const CardItem: React.FC<Props> = ({ link, visa }) => {
  const packageId = visa.id;
  const productId = visa.product.id; 
  return (
    <Link
      href={{
        pathname: '/visa/details',
        query: {
          packageId: packageId,
          productId: productId
        }
      }}
      className="flex flex-wrap justify-between items-center p-4 bg-white text-gray-800 rounded-xl space-y-3 md:space-y-6 shadow"
    >
      <div className="flex justify-center items-center gap-4">
        <img
          src={visa.image}
          alt="Visa"
          className="w-32 object-cover"
        />
        <div>
          <h5 className="text-lg font-medium">{visa.product.category}</h5>
          <p className="text-sm">{visa.product.company.title}</p>
        </div>
      </div>

      <div className="right flex flex-col items-end">
        <div className="flex">
          <FaStar color="#FFD700" />
          <p className="text-gray-700 font-xs mt-[-2px]">{visa.product.rating}</p>
        </div>
        <del className="text-red-500">
          <span className="text-gray-500 font-light text-sm">
            {visa.product.payable.regular}
          </span>
        </del>
        <p className="font-semibold text-md">{visa.product.payable.offered}</p>
      </div>
    </Link>
  );
};

export default function VisaSearchCard() {
  const [visas, setVisas] = useState([]);

  const dispatch = useDispatch();
  const visaCountry = useSelector((state) => state.visa.visaCountry);
  const nationality = useSelector((state) => state.visa.nationality);
  const visaType = useSelector((state) => state.visa.visaTypes);
  const applicable = useSelector((state) => state.visa.applicable);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        if (!visaCountry || !visaType.length) return;
        const response = await axios.get(`http://endorse.guideasy.com/api/v1/partner-management/packages?filter[country]=${visaCountry?.id}&filter[nationality]=${nationality?.id}&filter[applicable]=${applicable[0]?.id}&filter[category]=${visaType[0]?.id}`, {
          headers: {
            Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
            'X-App-Latitude': 23.6101974,
            'X-App-Longitude': 90.4597919,
            'X-App-Currency': 'BDT'
          },
        });
        setVisas(response.data.payload ? response.data.payload : []);
      } catch (error) {
        console.error("Error fetching visas:", error);
      }
    };
  
    fetchVisas();
  }, [visaCountry]);
  
  return (
    <section className="space-y-2">
      <div className="flex flex-col xl:flex-row items-start gap-6">
        <form className="flex-shrink-0 w-72 bg-white rounded-xl shadow space-y-4">
          <h3 className="text-lg font-semibold p-4 border-b">Filter</h3>
          <div className="flex flex-col items-center gap-6 px-4 lg:px-6 py-8">
            <RangeSlider />
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center gap-2"
            >
              Modify
            </button>
          </div>
        </form>
        <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
          { visas && visas.map((visa, index) => (
            <CardItem key={index} visa={visa} />
          ))}
        </div>
      </div>
    </section>
  );
}
