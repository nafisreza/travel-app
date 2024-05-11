import axios from "axios";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import {
  Box,
  Button,
  Drawer,
  ImageList,
  ImageListItem,
  Modal,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const [showPricesDrawer, setShowPricesDrawer] = useState(false); // State to control the visibility of price drawer

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setSelectedOption(null); // Reset selected option when closing the drawer
    setShowPricesDrawer(false); // Reset showPricesDrawer state when closing the drawer
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowPricesDrawer(true); // Show prices drawer after selecting an option
    setDrawerOpen(true); // Open the prices drawer when an option is selected
  };

  const handlePriceSelect = (price) => {
    setDrawerOpen(!drawerOpen);
    setShowPricesDrawer(!showPricesDrawer);
    setSelectedPrice(price);
  };

  const [itinerary, setItenerary] = useState([]);
  const searchParams = useSearchParams();

  const packageId = searchParams.get("packageId");
  const productId = product.id;
  const iteneraryId = product.options[0].id;

  useEffect(() => {
    const fetchItenerary = async () => {
      try {
        const response = await axios.get(
          `https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products/${productId}/itineraries/${iteneraryId}`,
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
            {product.options[0].category} - {product.options[0].catalogue}
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
            <p
              className="text-green-500 text-xs font-semibold uppercase cursor-pointer"
              onClick={handleOpen}
            >
              Details
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-green-500 text-xs font-semibold uppercase cursor-pointer">
              Remove
            </p>
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
            <button
              className={`w-20 flex shadow-lg border flex-col justify-center items-center p-3 rounded-lg ${
                activeDate === item.link
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setActiveDate(item.link)}
            >
              <p className="font-semibold text-xl">{item.plan.slice(-1)}</p>
              <p>Day</p>
            </button>
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
