import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const Buttons = ({ setItem, menuItems, selectedCategory, products, handleCategoryChange }) => {
  const handleClick = (category) => {
    handleCategoryChange(category);
    setItem(category === "Day Plan" ? products : products.filter(product => {
      const option = product.options.find(option => {
        switch (category) {
          case "Transfers":
            return option.intended === "T";
          case "Accommodation":
            return option.intended === "R";
          case "Activities":
            return option.intended === "A";
          case "Foods":
            return option.intended === "F";
          default:
            return false;
        }
      });
      return !!option;
    }));
  };

  return (
    <div className="flex justify-center">
      {menuItems.map((category, id) => (
        <button
          className={`px-5 py-2 rounded-lg shadow border mr-5 ${
            category === selectedCategory ? "bg-green-500 text-white" : "bg-white text-black"
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
        <p className="text-gray-500 text-sm capitalize">{product.options[0].catalogue}</p>
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
          <p className="font-semibold text-lg">{product.options[0].prices[0].payable.current}</p>
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

const HolidayTabFilter: React.FC = ({ packageId }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [item, setItem] = useState([]);
  const [menuItems, setMenuItems] = useState([
    "Day Plan", "Accommodation", "Transfers", "Activities", "Foods"
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Day Plan");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://holiday.guideasy.com/api/v1/client-management/packages/${packageId}/products`, {
          headers: {
            Authorization: "Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2",
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          }
        });
        if (response.data) {
          setProducts(response.data.payload.products);
          setFiltered(response.data.payload.filtered);
          if (selectedCategory === "Day Plan") {
            setItem(response.data.payload.products);
          } else {
            setItem(response.data.payload.products.filter(product => product.options.some(option => option.feature === selectedCategory)));
          }
        } else {
          console.error("Failed to fetch package data");
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchProducts();
  }, [packageId, selectedCategory]);

  console.log(selectedCategory)

  return (
    <div className="mt-5">
      <Buttons
        setItem={setItem}
        menuItems={menuItems}
        selectedCategory={selectedCategory}
        products={products}
        handleCategoryChange={handleCategoryChange}
      />
      <div>
        {item.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HolidayTabFilter;
