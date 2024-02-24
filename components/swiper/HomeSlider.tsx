'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './HomeSlider.css';
import slider_img1 from './slider_img1.jpg'
import slider_img2 from './slider_img2.jpeg'
import slider_img3 from './slider_img3.jpg'
import slider_img4 from './slider_img4.jpg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
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
        <SwiperSlide>
            <p className="text-white text-2xl font-semibold tracking-wider mb-1">Bangladesh</p>
          <img src="https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-white text-2xl font-semibold tracking-wider mb-1">India</p>
          <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/25112737/untitled-design-33.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-white text-2xl font-semibold tracking-wider mb-1">Singapore</p>
          <img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2019/11/15/jtgardens151124.jpg?VersionId=T.iGSdtuTaRL0HVIT9XTnFHZkUIY3cdH" />
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-white text-2xl font-semibold tracking-wider mb-1">Thailand</p>
          <img src="https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2018/02/shutterstock_232532110.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
