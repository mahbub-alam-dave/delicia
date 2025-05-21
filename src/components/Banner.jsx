import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    return (
      <div className=''>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => 
        console.log('slide change')}
 
    >
      <SwiperSlide>
        <img src="public/desert-fruit.jpg" alt="" className='w-full max-h-[550px] object-cover' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="public/desert-fruit.jpg"  alt="" className='w-full max-h-[550px] object-cover' />
      </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;