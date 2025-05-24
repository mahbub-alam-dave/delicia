import React, { useContext, useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Typewriter } from 'react-simple-typewriter'
import { Tooltip } from 'react-tooltip'
import { ContextValues } from "../contexts/ContextProvider";


const HomeExtraSec = () => {


  const [blogs, setBlogs] = useState([]);
  const {lightMode} = useContext(ContextValues)
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="pb-12">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">
          Our Hot Deals
        </h2>
        <p className={`text-base md:text-lg text-center ${lightMode ? "text-white" : "text-black"}`}>Savor exclusive recipe deals! Book your favorite dishes, secret menus, and chef specials at mouth-watering discounts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div
            style={{
              backgroundImage: "linear-gradient(to bottom left, rgba(184, 134, 11, 0.0), rgba(0, 0, 0, 100)), url('https://i.ibb.co/4wZdyhSK/image-two.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-[800px] rounded-2xl px-4 sm:px-6 lg:px-12 flex flex-col gap-32  justify-center items-start"
          >
            <div className=" flex flex-col gap-4 mt-12">
              <span className="text-2xl md:text-3xl font-light text-[rgb(255,236,66)]">
                Join our upcoming
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-[40px] lg:text-5xl font-black text-white  ">
                Masterclass: <Typewriter
            words={["Secrets of Italian Cuisine", "Secrets of Italian Cuisine", "Secrets of Italian Cuisine"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
              </h2>
              <span className="text-2xl font-semibold text-[rgb(255,236,66)]">
                On June 10, 2025
              </span>
            </div>
            <div className="flex justify-end items-end">
              <button className="outline text-xl md:text-2xl bg-[#ff3539] text-white px-6 py-3 rounded-xl">
                Register Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div
              className="w-full h-[388px] rounded-2xl px-4 sm:px-6 lg:px-12 flex flex-col gap-6 items-start justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom left, rgba(184, 134, 11, 0.0), rgba(0, 0, 0, 100)), url('https://i.ibb.co/mVKrcngv/image-three.jpg')",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-3xl font-bold text-white">
                Battle of the Plates
              </h2>
              <p className="text-lg md:text-xl font-medium text-[#c9c9c9]">
                Register now and show off your signature dish. Winner gets a
                feature spot and surprise culinary gifts!
              </p>
              <button className="btn text-white bg-[#ff3539]">
                Register Now
              </button>
            </div>
            <div
              className="w-full h-[388px] rounded-2xl px-4 sm:px-6 lg:px-12 flex flex-col gap-6 items-start justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom left, rgba(184, 134, 11, 0.0), rgba(0, 0, 0, 100)), url('https://i.ibb.co/S4Y3df2G/image-four.jpg')",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-3xl font-bold text-white">
                2025 Food Contest
              </h2>
              <p className="text-lg md:text-xl font-medium text-[#c9c9c9]">
                Register now and show off your signature dish. Winner gets a
                feature spot and surprise culinary gifts!
              </p>
              <button className="btn text-white bg-[#ff3539]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center py-12">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="rancho text-3xl font-semibold md:text-4xl text-[#ff3539] text-center">
            Our Latest Blogs
          </h2>
          <p className={`text-base sm:text-lg leading-[30px] ${lightMode ? "text-white" : "text-black"}`}>
            Discover stories, tips, and trends to inspire your culinary journey
            and creativity!
          </p>
        </div>
        <div className="w-full ">
            <Slider {...settings} className="flex gap-4">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={`flex flex-col ml-4 focus:outline-none ${lightMode ? "bg-gray-900" : "bg-gray-50"}`}>
                <img
                  className="w-full h-[320px] object-cover"
                  src={blog.thumbnail}
                  alt=""
                />
                <div className="p-4">
                  <h2 className={`text-2xl font-semibold ${lightMode ? "text-white" : "text-black"}`}>{blog.title.length < 25 ? blog.title : <a data-tooltip-id="my-tooltip" data-tooltip-content={blog.title}>{blog.title.slice(0, 25) + "..."}</a>}</h2>
                  <div className="flex justify-between mt-2">
                    <div>
                      <span className="font-medium text-[#858383]">by </span>
                      <span className={`font-bold ${lightMode ? "text-white" : "text-black"}`}>{blog.author}</span>
                    </div>
                    <div className={`flex gap-2 items-center ${lightMode ? "text-white" : "text-black"}`}>
                      <IoTimeOutline size={20} />
                      <span>{blog.publishDate}</span>
                    </div>
                    <div className={`flex gap-1 items-center ${lightMode ? "text-white" : "text-black"}`}>
                      <RiMessage2Line size={20} />
                      <span>{blog.commentCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </Slider>
        </div>
        <button className=" bg-[#ff3539] text-white font-semibold text-lg md:text-xl px-4 py-2">See All Blogs</button>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default HomeExtraSec;

/* 
https://i.ibb.co/RG1SKjbh/image-one.jpg
https://i.ibb.co/4wZdyhSK/image-two.jpg
https://i.ibb.co/mVKrcngv/image-three.jpg
https://i.ibb.co/S4Y3df2G/image-four.jpg */
