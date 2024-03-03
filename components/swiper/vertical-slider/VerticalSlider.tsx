'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './VerticalSlider.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function VerticalSlider() {
	// Array of countries which will be mapped
	const continents = [
		'Africa',
		'Asia',
		'Europe',
		'America',
		'Australia',
		'Antarctica',
	];
	return (
		<>
			<Swiper
				direction='vertical'
				// height={window.innerHeight}
				effect={'coverflow'}
				spaceBetween='0px'
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={3}
				initialSlide={1}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 0,
					scale: 0.6,
					stretch: 0,
					depth: 100,
					modifier: 0.5,
					slideShadows: false,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className='mySwiper2'>
				{continents.map((continent, index) => (
					<SwiperSlide key={index} className='text-slide'>
						<p className='text-white text-7xl font-bold tracking-tight'>
							{continent}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
