import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const handleMenuBtn = () => {
        setDisplayMenu(display => !display)
    }
    return ( 
        <div className='border-b border-[rgba(163,163,163,0.44)]'>
        <div className='p-4 max-w-11/12 mx-auto flex justify-between items-center '>
            <div className='flex gap-2 items-center'>
                <img src="https://i.ibb.co/xtwSqrXY/delicia-logo.png" alt="" />
                <h2 className='rancho text-3xl font-bold'>delicia</h2>
            </div>

            <nav className='hidden lg:flex gap-4 lg:gap-6 '>
                <NavLink to={'/'} className='font-semibold text-base'><span>Home</span></NavLink>
                <NavLink to={'/all-recipes'} className='font-semibold text-base'><span>All recipe</span></NavLink>
            </nav>

            <div className='flex gap-4 items-center'>
            <div className='hidden md:flex gap-2 '>
            <button className='btn bg-[#ff3539] text-lg font-semibold text-white'>Login</button>
            <button className='btn text-lg font-semibold'>Register</button>
            </div>
            <CiMenuFries onClick={handleMenuBtn} className='text-3xl font-bold block lg:hidden'/>
            </div>
                <div onClick={()=> setDisplayMenu(display => !display)} className={`max-w-[300px] w-full bg-white shadow-lg h-screen fixed top-0 transition-all duration-600 ease-in-out block lg:hidden ${displayMenu ? "right-0" : "right-[-300px]"} z-10`}>
                <div className='flex flex-col  gap-4 p-6 mt-10'>
                <IoMdClose size={22}/>
                <NavLink to={'/'} className='font-semibold text-base'><span>Home</span></NavLink>
                <NavLink to={'/all-recipes'} className='font-semibold text-base'><span>All recipe</span></NavLink> 
                </div>
            </div>

        </div>
        </div>
    );
};

export default Header;