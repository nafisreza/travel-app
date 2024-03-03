'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";
import './VisaSlider.css'

const cardItems = [
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link1",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link2",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link1",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link2",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link1",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link2",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link2",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link1",
  },
  {
    imgSrc: "/assets/images/offer/offer.png",
    linkHref: "#link2",
  },
];

export default function VisaCard() {
  return (
    <section className="space-y-2">
      <h1 className="text-md font-semibold" id="multiplefeatures">
        Visa Offer
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <Swiper
          direction="horizontal"
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}   // Disable pagination bullet points
          className="mySwiper3"
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-2xl block overflow-hidden">
                <a href={item.linkHref}>
                  <figure className="bg-gray-50">
                    <img
                      className="w-full h-40 object-cover"
                      src={item.imgSrc}
                      alt={`product-${index}`}
                    />
                  </figure>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
