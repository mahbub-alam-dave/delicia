import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosSearch } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { Fade } from "react-awesome-reveal";

/* import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; */

const Banner = () => {
  return (
    <div className="mt-8">
      {/*       <Swiper
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
        </Swiper> */}
      <div
        className="w-full h-[650px] flex justify-center flex-col gap-5 rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom left, rgba(184, 134, 11, 0.0), rgba(0, 0, 0, 100)), url('https://i.ibb.co/KcZNxGns/pizza.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-12 px-10 sm:px-16">
          <div className="flex flex-col gap-4 w-full xl:max-w-[55%]">
            <Fade direction="down"><h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-[40px] md:leading-[54px] lg:leading-[65px] font-bold">
            You don't know how to make the dish you have in mind?
          </h1>
          </Fade>
          <p className="text-lg sm:text-lg lg:text-xl font-medium text-[rgba(202,200,200,0.93)]">
            Feed your imagination and spark your creativity. From cravings to
            creations, let your ideas flourish and uncover the perfect
            recipe waiting to be discovered.
          </p>
          </div>
          <Fade direction="up">
        <div className="flex flex-col gap-4 w-full xl:w-[50%]">
          <label className="input w-full focus:outline-none focus:border-none h-14 bg-white">
          <ImSpoonKnife className="text-2xl lg:text-3xl text-[#ff3539]"/>
          <input type="text" className="input text-base lg:text-lg w-full focus:outline-none focus:border-none" placeholder="Find what you want to cook today" />
          <button className="btn bg-[#ff3539] text-white"><IoIosSearch className="text-2xl lg:text-3xl"/></button>
        </label>
        <span className="text-sm text-[rgba(255,255,255,0.47)]">Type a keyword and discover recipes that turn your cravings into delicious reality!</span>
        </div>
        </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
