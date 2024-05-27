import React from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { IoMdAirplane } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import {
  Drawer,
  Modal,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { setPackagePrice } from "@/app/features/holiday/holidaySlice";
import Link from "next/link";

const Card = ({ product, onOptionAndPriceChange, onRemove, onPriceUpdate }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [selectedPrice, setSelectedPrice] = useState(selectedOption.prices.find(price => price.selected === true));

  const [showPricesDrawer, setShowPricesDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setShowPricesDrawer(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedPrice(option.prices.find(price => price.selected === true));
    setShowPricesDrawer(true);
    setDrawerOpen(true);
  };

  const [itinerary, setItenerary] = useState([]);
  const searchParams = useSearchParams();

  const packageId = searchParams.get("packageId");
  const productId = product.id;
  const iteneraryId = selectedOption.id;

  const HOLIDAY_API = process.env.NEXT_PUBLIC_HOLIDAY_API;

  useEffect(() => {
    const fetchItenerary = async () => {
      try {
        const response = await axios.get(
          `${HOLIDAY_API}/packages/${packageId}/products/${productId}/itineraries/${iteneraryId}`,
          {
            headers: {
              Authorization:
                "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": "en",
            },
          }
        );
        if (response.data) setItenerary(response.data.payload);
        console.log(response.data.payload);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchItenerary();
  }, [packageId, productId, iteneraryId]);

  const galleries = itinerary?.galleries;
  const amenities = itinerary?.amenities;

  const handlePriceSelect = (price) => {
    setDrawerOpen(!drawerOpen);
    setShowPricesDrawer(!showPricesDrawer);
    setSelectedPrice(price);
  
    const updatedOption = {
      ...selectedOption,
      prices: selectedOption.prices.map((p) => ({
        ...p,
        selected: p.id === price.id,
      })),
    };
  
    if (onOptionAndPriceChange) {
      onOptionAndPriceChange({
        ...product,
        options: product.options.map((option) =>
          option.id === updatedOption.id ? updatedOption : option
        ),
      });
      
      if (onPriceUpdate) {
        onPriceUpdate();
      }
    }
  };

  const handleRemove = () => {
    if (product.status !== "D") {
      onRemove();
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="absolute w-1/3 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 p-4 bg-white rounded-lg">
          <Carousel height={200}>
            {galleries &&
              galleries.map((img, i) => <img key={i} src={img} alt="alt" />)}
          </Carousel>
          <div className="flex justify-between my-2">
            <div>
              <p className="font-semibold">{itinerary?.title}</p>
              <p className="text-xs">{itinerary?.catalogue}</p>
              <div className="flex gap-1 text-xs">
                <IoLocationSharp className="mt-1" color="#22c55e" />
                <p>
                  {itinerary?.city}, {itinerary?.state}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-green-500">{itinerary?.feature}</p>
              <p className="text-sm">{itinerary?.category}</p>
            </div>
          </div>
          <p className="text-xs font-semibold mb-1">Top Amenities:</p>
          <div className="flex gap-2">
            {amenities &&
              amenities.map((amenity, i) => (
                <div key={i} className="flex items-center flex-col">
                  <img src={amenity.icon} alt="alt" className="h-8" />
                  <p className="text-xs">{amenity.title}</p>
                </div>
              ))}
          </div>
          <p className="text-xs mt-2">{itinerary?.description}</p>
        </div>
      </Modal>

      <div className="flex justify-between items-center mt-5 shadow p-4 rounded-lg">
        <div className="left">
          <div className="flex gap-1 items-center">
            <p className="font-semibold">{product.title}</p>
            <GoDotFill color="#00BE16" />
            <p className="text-gray-500">{product.timestamp.started}</p>
          </div>
          <p className="text-gray-500 text-sm capitalize">
            {selectedOption.category} - {selectedOption.catalogue}
          </p>
          <p className="text-gray-500 text-sm">
            {product.city}, {product.country}
          </p>
          <img
            src={selectedOption.image}
            alt="Transport"
            className="w-24 h-16 mt-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-end">
            <p className="font-semibold text-lg">
              {selectedPrice.payable.current}
            </p>
            <p
              className="text-green-500 text-xs font-semibold uppercase cursor-pointer"
              onClick={handleOpen}
            >
              Details
            </p>
          </div>
          <div className="flex gap-1">
          {product.status === "D" ? ( // Conditionally render remove button based on status
        <button className="text-gray-500/70 text-xs font-semibold uppercase" disabled>
          Remove
        </button>
      ) : (
        <button className="text-green-500 text-xs font-semibold uppercase cursor-pointer" onClick={handleRemove}>
          Remove
        </button>
      )}
            <GoDotFill />
            <p
              className="text-green-500 text-xs font-semibold uppercase cursor-pointer"
              onClick={handleToggleDrawer}
            >
              Change
            </p>
          </div>
        </div>
      </div>

      <Drawer open={drawerOpen} onClose={handleToggleDrawer} anchor="right">
        <div className="p-4 w-[480px]">
          <p className="text-center">Change Items</p>
          {product.options.map((option) => (
            <div
              key={option.id}
              className="flex justify-between items-center mt-5 shadow p-4 gap-16 hover:shadow-green-400 rounded-lg cursor-pointer "
              onClick={() => handleOptionSelect(option)}
            >
              <div className="left flex items-center gap-4">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-24 h-16 mt-2 rounded-lg"
                />
                <div className="description">
                  <p className="font-semibold">{option.title}</p>
                  <p className="text-gray-500 text-sm capitalize">
                    {option.catalogue}
                  </p>
                  <p className="text-gray-500 text-sm">{option.category}</p>
                </div>
              </div>
              <div className="right flex flex-col items-end">
                <p className="font-semibold text-lg">
                  {option.prices[0].payable.current}
                </p>
                <p className="text-gray-500 text-xs font-semibold uppercase pointer whitespace-nowrap">
                  Starts From
                </p>
              </div>
            </div>
          ))}
        </div>
        <Drawer
          open={showPricesDrawer}
          onClose={() => setShowPricesDrawer(false)}
          anchor="right"
        >
          <div className="p-4 w-[480px]">
            <p className="text-center">Select Price</p>
            {selectedOption &&
              selectedOption.prices.map((price) => (
                <div
                  key={price.id}
                  className="border rounded-lg flex justify-between p-4 m-4 font-medium hover:border-green-500 cursor-pointer"
                  onClick={() => handlePriceSelect(price)}
                >
                  <p>{price.title}</p>
                  <p>{price.payable.current}</p>
                </div>
              ))}
          </div>
        </Drawer>
      </Drawer>
    </>
  );
};

const HolidayTabFilter = ({ packageId, planner }) => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const categories = ['Day Plan', 'Residence', 'Transportation', 'Activities', 'Foods']
  const [selectedCategory, setSelectedCategory] = useState("Day Plan");
  const [activeDate, setActiveDate] = useState("1");
  const [productsByDate, setProductsByDate] = useState({});
  const [totalPrice, setTotalPrice] = useState('');
  const dispatch = useDispatch()

  useEffect(() => {
    calculateTotalPrice();
  }, [productsByDate]);

  
  useEffect(() => {
    dispatch(setPackagePrice(totalPrice));
  }, [totalPrice, dispatch]);


  const filterProductsByCategory = (products, category) => {
    if (category === 'Day Plan') {
      return products;
    } else {
      const intendedMapping = {
        'Residence': 'R',
        'Transportation': 'T',
        'Foods': 'F',
        'Activities': 'A',
      };

      const intended = intendedMapping[category];

      return products.flatMap(product =>
        product.options.filter(option => option.intended === intended)
          .map(option => ({ ...product, options: [option] }))
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = {};
        for (let i = 0; i < planner.length; i++) {
          const response = await axios.get(
            `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products`,
            {
              params: {
                filter: {
                  position: i + 1,
                },
              },
              headers: {
                Authorization:
                  "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
              },
            }
          );
          const date = planner[i].date;
          responseData[date] = filterProductsByCategory(response.data.payload.products, selectedCategory);

        }

        setProductsByDate(responseData);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    if (planner && planner.length > 0) {
      fetchData();
    }
  }, [packageId, planner, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getDayNumber = (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((targetDate - today) / oneDay));
    return diffDays+1;
  };

  const dayRefs = useRef([]);

  useEffect(() => {
    // Clear the existing refs
    dayRefs.current = [];
  }, []);

  const addToDayRefs = useCallback((element) => {
    if (element) {
      dayRefs.current = [...dayRefs.current, element];
    }
  }, []);

  const scrollToDay = (dayIndex) => {
    if (dayIndex >= 0 && dayIndex < dayRefs.current.length) {
      dayRefs.current[dayIndex].scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateTotalPrice = () => {
    let tp = 0;
    let currencySymbol = '';
  
    const allProducts = Object.values(productsByDate).flat();
  
    if (allProducts && allProducts.length > 0) {
      const firstProduct = allProducts[0];
      if (firstProduct.options && firstProduct.options.length > 0) {
        const firstOption = firstProduct.options[0];
        if (firstOption.prices && firstOption.prices.length > 0) {
          const firstPrice = firstOption.prices.find(price => price.selected === true);
          if (firstPrice) {
            currencySymbol = extractSymbol(firstPrice.payable.current);
          }
        }
      }
    }
  
    allProducts.forEach((product) => {
      if (product.options && product.options.length > 0) {
        const selectedOption = product.options[0]; // Assuming the first option is the default
        const selectedPrice = selectedOption.prices.find(price => price.selected === true);
        if (selectedPrice) {
          const numericValue = extractNumericValue(selectedPrice.payable.current);
          tp += numericValue;
        }
      }
    });
  
    setTotalPrice(`${currencySymbol} ${tp.toFixed(2)}`);
  };
  const handleOptionAndPriceChange = (updatedProduct) => {
    setProductsByDate((prevProductsByDate) => {
      const updatedProductsByDate = Object.fromEntries(
        Object.entries(prevProductsByDate).map(([date, products]) => [
          date,
          products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        ])
      );
  
      calculateTotalPrice(); // calc the price after updating productsByDate
      return updatedProductsByDate;
    });
  };
  const extractSymbol = (value) => {
    const match = value.match(/[^0-9.-]+/);
    return match ? match[0] : '';
  };

  const extractNumericValue = (value) => {
    return parseFloat(value.replace(/[^0-9.-]+/g, ''));
  };

  const handleRemoveProduct = (date, productId) => {
    setProductsByDate((prevProductsByDate) => {
      const updatedProductsByDate = { ...prevProductsByDate };
      updatedProductsByDate[date] = updatedProductsByDate[date].filter(
        (product) => product.id !== productId
      );
  
      calculateTotalPrice(); // Recalculate total price after removing a product
      dispatch(setPackagePrice(totalPrice));
      return updatedProductsByDate;
    });
  };

  const handlePriceUpdate = () => {
    calculateTotalPrice();
  };


  return (
    <>
      <div className="flex space-x-4 sticky top-16 bg-white/30 backdrop-blur-sm">
        {planner &&
          planner.map((item, index) => (
            <button
              key={index}
              className={`w-20 flex shadow-lg border flex-col justify-center items-center p-3 rounded-lg ${
                activeDate === item.link
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => {
                setActiveDate(item.link);
                scrollToDay(index);
              }}
            >
              <p className="font-semibold text-xl">{item.plan.slice(-1)}</p>
              <p>Day</p>
            </button>
          ))}
      </div>
      <div className="mt-5">
      <div className="flex justify-center mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-lg shadow border mr-5 ${
                category === selectedCategory
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          <div>
            <div>
              {Object.entries(productsByDate).map(([date, products], index) => (
                <div key={index} ref={addToDayRefs}>
<div className="flex items-center mt-5">
<span className="text-green-500 font-semibold bg-green-100 rounded-r-xl whitespace-nowrap px-6 py-2">Day {getDayNumber(date)}</span>
<hr className="w-full h-1 bg-gray-200 border-0 rounded "/>
</div>
                  {products.map((product, idx) => (
                    <div key={`${index}-${idx}`}>
                      <Card key={`${index}-${idx}`} product={product} onOptionAndPriceChange={handleOptionAndPriceChange}
                      onRemove={() => handleRemoveProduct(date, product.id)}
                      onPriceUpdate={handlePriceUpdate}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Counter = ({
  onCountChange,
}: {
  onCountChange: (newCount: number) => void;
}) => {
  const [count, setCount] = useState<number>(1);

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className='md:p-2 inline-block bg-white md:border border-gray-200 md:rounded-lg'>
      <div className='flex items-center gap-x-1.5'>
        <button
          type='button'
          onClick={() => {
            handleCountChange(Math.max(count - 1, 1));
          }}
          className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
          <svg
            className='flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M5 12h14' />
          </svg>
        </button>

        <input
          className='p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0'
          type='text'
          value={count}
          onChange={(e) => {
            const newCount = parseInt(e.target.value);
            handleCountChange(isNaN(newCount) ? 1 : newCount);
          }}
        />
        <button
          type='button'
          onClick={() => {
            handleCountChange(count + 1);
          }}
          className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
          <svg
            className='flex-shrink-0 w-4 h-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M5 12h14' />
            <path d='M12 5v14' />
          </svg>
        </button>
      </div>
    </div>
  );
};

const HolidayPriceSummary = () => {
  const price = useSelector((state) => state.holiday.packagePrice); 
  return (
    <div className='bg-white rounded-xl shadow max-wd-md flex flex-col justify-center items-center p-4'>
      <div className='flex w-full justify-between items-center p-2'>
        <p className='font-semibold'>Total Price</p>
        <p>{price}</p>
      </div>
      <Link
        href='/holiday/checkout'
        className='items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white'
        type='submit'>
        Book now
      </Link>
    </div>
  );
};

export const HolidayDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("packageId");
  const departure = searchParams.get("departure");
  const departureIso = searchParams.get("depIso");
  const destination = searchParams.get("destination");
  const destinationIso = searchParams.get("desIso");
  const category = searchParams.get("category");

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await axios.get(
          `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}`,
          {
            headers: {
              Authorization:
                "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": "en",
            },
          }
        );
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

  const planner = packages.planner;

  return (
    <div className="flex w-full justify-between gap-8 p-8">
      <div className="w-2/3 p-8 rounded-xl bg-white shadow-md space-y-6">
        <div className="flex justify-between">
          <figure className="w-2/3 flex gap-8 items-center">
            <img
              src={packages.image}
              alt="package image"
              className="w-20 md:w-20 h-20 md:h-24 object-cover rounded"
            />
            <div className="space-y-1">
              <h5 className="break-words text-base font-semibold">
                {packages.title}
              </h5>
              <p className="text-sm">
                Location: {packages.city}, {packages.country}
              </p>
              <p className="text-sm">Category: {category}</p>
            </div>
          </figure>
          <div className="flex gap-8">
            <div className="p-3 flex gap-4 lg:gap-8 justify-center items-center">
              <div className="w-full space-y-1 text-start">
                <p className="text-xs text-gray-400 text-end">From</p>
                <h5 className="text-md font-semibold whitespace-nowrap">
                  {departure}
                </h5>
                <p className="text-sm flex justify-end items-center gap-2 whitespace-nowrap">
                  <IoMdAirplane className="w-5" size={18} />
                  {departureIso}
                </p>
              </div>
              <div>
                <FaArrowsAltH size="20" />
              </div>
              <div className="w-full space-y-1 text-end">
                <p className="text-xs text-gray-400">To</p>
                <h5 className="text-md font-semibold whitespace-nowrap">
                  {destination}
                </h5>
                <p className="text-sm flex justify-end items-center gap-2 whitespace-nowrap">
                  <FaLocationDot className="w-5" />
                  {destinationIso}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
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
            <HolidayTabFilter packageId={packageId} planner={planner} />
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <HolidayPriceSummary />
      </div>
    </div>
  );
};
