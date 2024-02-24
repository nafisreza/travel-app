"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HomeSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function HomeSlider() {

// Array of countries which will be mapped
  const countries = [
    {
      name: "Bangladesh",
      img: "https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg",
    },
    {
      name: "Thailand",
      img: "https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2018/02/shutterstock_232532110.webp",
    },
    {
      name: "Indonesia",
      img: "https://link.rentalwisecdn.com/pms/property/614/image/bali-beauty.jpeg",
    },
    {
      name: "Maldives",
      img: "https://static.vecteezy.com/system/resources/previews/028/802/576/large_2x/beautiful-sunset-in-maldives-with-palm-trees-and-water-bungalows-sunset-picturesque-summer-sunset-in-maldives-luxury-resort-villas-seascape-with-soft-led-lights-under-colorful-sky-ai-generated-free-photo.jpg",
    },
    {
      name: "Nepal",
      img: "https://pics.craiyon.com/2023-09-21/8496b2511d534528b3f5c9487bd6e0c8.webp",
    },
    {
      name: "India",
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/25112737/untitled-design-33.jpeg",
    },
    {
      name: "Singapore",
      img: "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2019/11/15/jtgardens151124.jpg?VersionId=T.iGSdtuTaRL0HVIT9XTnFHZkUIY3cdH",
    },
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {countries.map((country, index) => (
          <SwiperSlide key={index}>
            <p className="text-white text-2xl font-semibold tracking-wider mb-1">
              {country.name}
            </p>
            <img src={country.img} alt={country.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
