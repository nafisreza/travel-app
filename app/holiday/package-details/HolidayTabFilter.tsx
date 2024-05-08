import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const Buttons = ({
  setItem,
  menuItems,
  selectedCategory,
  handleCategoryChange,
}) => {
  const handleClick = (category) => {
    handleCategoryChange(category);
  };

  return (
    <div className="flex justify-center">
      {menuItems.map((category, id) => (
        <button
          className={`px-5 py-2 rounded-lg shadow border mr-5 ${
            category === selectedCategory
              ? "bg-green-500 text-white"
              : "bg-white text-black"
          }`}
          key={id}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Card = ({ product }) => {
  return (
    <div className="flex justify-between items-center mt-5 shadow p-4 rounded-lg">
      <div className="left">
        <div className="flex gap-1 items-center">
          <p className="font-semibold">{product.title}</p>
          <GoDotFill color="#00BE16" />
          <p className="text-gray-500">{product.timestamp.started}</p>
        </div>
        <p className="text-gray-500 text-sm capitalize">
          {product.options[0].catalogue}
        </p>
        <p className="text-gray-500 text-sm">
          {product.city}, {product.country}
        </p>
        <img
          src={product.options[0].image}
          alt="Transport"
          className="w-24 h-16 mt-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-end">
          <p className="font-semibold text-lg">
            {product.options[0].prices[0].payable.current}
          </p>
          <p className="text-green-500 text-xs font-semibold uppercase">
            Details
          </p>
        </div>
        <div className="flex gap-1">
          <p className="text-green-500 text-xs font-semibold uppercase">
            Remove
          </p>
          <GoDotFill />
          <p className="text-green-500 text-xs font-semibold uppercase">
            Change
          </p>
        </div>
      </div>
    </div>
  );
};

const HolidayTabFilter = ({ packageId, planner }) => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [filteredTabs, setFilteredTabs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Day Plan");
  const [activeDate, setActiveDate] = useState("1");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedCategory === "Day Plan") {
          response = await axios.get(
            `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products`,
            {
              params: {
                filter: {
                  position: activeDate,
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
        } else {
          response = await axios.get(
            `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products`,
            {
              params: {
                filter: {
                  property: selectedCategory.toLowerCase(),
                  position: activeDate,
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
        }

        if (response.data) {
          setProducts(response.data.payload.products);
          setFilteredTabs(response.data.payload.filtered);
          setItem(response.data.payload.products);
        } else {
          console.error("Failed to fetch package data");
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchProducts();
  }, [packageId, selectedCategory, activeDate]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex space-x-4">
        {planner &&
          planner.map((item) => (
            <Link
              key={item.link}
              href="#"
              className={`w-20 flex shadow-lg border flex-col justify-center items-center p-3 rounded-lg ${
                activeDate === item.link
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setActiveDate(item.link)}
            >
              <p className="font-semibold text-xl">{item.plan.slice(-1)}</p>
              <p>Day</p>
            </Link>
          ))}
      </div>
      <div className="mt-5">
        <Buttons
          setItem={setItem}
          menuItems={filteredTabs.map((tab) => tab.name)}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
        <div>
          {item.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HolidayTabFilter;
