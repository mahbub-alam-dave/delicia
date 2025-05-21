import React from 'react';
import { LuChefHat } from "react-icons/lu";
import { LuPizza } from "react-icons/lu";
import { Link } from 'react-router';

const NotFound = () => {
    return (
<div className="flex flex-col items-center justify-center h-screen bg-white text-black p-4">
      <div className="text-center flex flex-col items-center scale-120 animate-pulse p-4">
        <div className="flex justify-center mb-6">
          <LuPizza  className="text-5xl sm:text-7xl md:text-9xl text-[#ff3539] animate-bounce" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">404 - Page Not Found!</h1>
        <p className="text-base lg:text-lg mb-6">
          Looks like this page got eaten. 🍕 Let’s get you back to safety!
        </p>
        <Link to={'/'}>
        <button className="hover:bg-orange-500 bg-[#ff3539] text-white px-3 md:px-6 py-1 sm:py-[6px] md:py-2 lg:py-3 rounded-xl text-lg shadow-lg flex gap-2 items-center justify-center">
          <LuChefHat className=" text-lg" /> Go Home
        </button>
        </Link>
      </div>
    </div>
    );
};

export default NotFound;