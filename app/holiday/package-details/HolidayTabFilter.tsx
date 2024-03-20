import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const TripData = [
  {
    id: 1,
    catalogue: "Private Transfer",
    started: "10:00 PM",
    title: "Airport to Hotel",
    city: "Bangkok",
    plan: "Stay in Hotel Radisson",
    current: "BDT 3000",
    selected: false,
    category: "Transfers",
    status: "R",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
  },
  {
    id: 2,
    catalogue: "Climbing",
    started: "03:05 am",
    title: "Day one starter",
    city: "Cox's Bazar",
    plan: "Himchari Fountain and Hill",
    current: "BDT 2,475",
    selected: false,
    category: "Activities",
    status: "R",
    img: "https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar.jpg",
  },
  {
    id: 3,
    catalogue: "Lunch Break",
    started: "03:05 am",
    title: "Day one starter",
    city: "Cox's Bazar",
    plan: "Himchari Fountain and Hill",
    current: "BDT 2,475",
    selected: false,
    category: "Foods",
    status: "R",
    img: "https://www.forbes.com/health/wp-content/uploads/2022/08/workday_lunch_ideas.jpeg.jpg",
  },
  {
    id: 4,
    catalogue: "Bus Tour",
    started: "03:05 am",
    title: "Day one starter",
    city: "Cox's Bazar",
    plan: "Himchari Fountain and Hill",
    current: "BDT 2,475",
    selected: false,
    category: "Transfer",
    status: "R",
    img: "https://cityredbus.com/wordpress/wp-content/uploads/CITY-TOUR-+-FICO-OPEN-BUS-2018.jpg",
  },
  {
    id: 5,
    catalogue: "Swimming",
    started: "03:05 am",
    title: "Day one starter",
    city: "Cox's Bazar",
    plan: "Himchari Fountain and Hill",
    current: "BDT 2,475",
    selected: false,
    category: "Activities",
    status: "R",
    img: "https://cdn.britannica.com/66/162466-131-47ADB66F/Man-butterfly-stroke-pool.jpg"
  },
  {
    id: 6,
    catalogue: "Hotel Stay",
    started: "03:05 am",
    title: "Day one starter",
    city: "Cox's Bazar",
    plan: "Himchari Fountain and Hill",
    current: "BDT 2,475",
    selected: false,
    category: "Accomodation",
    status: "R",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=700&h=-1&s=1",
  },
];

const Buttons = ({ filterItem, setItem, menuItems, selectedCategory }) => {
  return (
    <>
      <div className="flex justify-center">
        {menuItems.map((category, id) => {
          return (
            <button
              className={`px-5 py-2 rounded-lg shadow border mr-5 ${
                category === selectedCategory ? "bg-green-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => filterItem(category)}
              key={id}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

const Card = ({ trip }) => {
  return (
    <div className="flex justify-between items-center mt-5 shadow p-4 rounded-lg">
      <div className="left">
        <div className="flex gap-1 items-center">
          <p className="font-semibold">{trip.catalogue}</p>
          <GoDotFill color="#00BE16" />
          <p className="text-gray-500">{trip.started}</p>
        </div>
        <p className="text-gray-500 text-sm">
          {trip.title}, {trip.city}
        </p>
        <p className="text-gray-500 text-sm">{trip.plan}</p>
        <img
          src={trip.img}
          alt="Transport"
          className="w-24 h-16 mt-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-end">
          <p className="font-semibold text-lg">{trip.current}</p>
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

const HolidayTabFilter: React.FC = () => {
  const [item, setItem] = useState(TripData);
  const [menuItems, setMenuItems] = useState([
    "Day Plan", "Accomodation", "Transfers", "Activities", "Foods"
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Day Plan");

  const filterItem = (curcat: string) => {
    let newItem;
    if (curcat === "Day Plan") {
      newItem = TripData;
    } else {
      newItem = TripData.filter((newVal) => newVal.category === curcat);
    }
    setItem(newItem);
    setSelectedCategory(curcat); // Update the selected category
  };

  return (
        <div className="mt-5">
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
            selectedCategory={selectedCategory} // Pass selectedCategory to Buttons
          />
          <div>
            {item.map((trip) => (
              <Card key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
  );
};

export default HolidayTabFilter;
