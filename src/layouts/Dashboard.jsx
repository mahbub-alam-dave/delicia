import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='mt-0 '>
  {/* Full width navbar */}
  <div className="navbar flex justify-end bg-base-300 w-full lg:hidden">
    <div className="flex-none lg:hidden">
      <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-6 w-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
  </div>

  {/* Add a container here */}
  <div className="w-full xl:max-w-11/12 mx-auto bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]">
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col px-4 md:px-6 py-8 min-h-[98vh] text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">
        {/* Page content here */}
        <Outlet />
      </div>

{/* bg-[#ff3539] */}
      <div className="drawer-side bg-white dark:bg-gray-800 max-w-[370px] lg:max-w-[500px] shadow-sm">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu text-base-content min-h-full w-80 p-4">
            <div className={`flex gap-2 items-center mt-6 mb-5`}>
          <img src="https://i.ibb.co/xtwSqrXY/delicia-logo.png" alt="" />
          <h2 className="rancho text-3xl font-bold text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]">delicia</h2>
        </div>
          {/* Sidebar content here */}
          <li><NavLink className='text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]' to={'/'}>Home</NavLink></li>
          <li><Link className={'text-green-600 font-semibold'} to={'/dashboard'}>Overview</Link></li>
          <li><NavLink className={'text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]'} to={'/dashboard/add-recipe'}>Add Recipe</NavLink></li>
          <li><NavLink className={'text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]'} to={'/dashboard/my-recipes'}>My Recipes</NavLink></li>
          <li><NavLink className='text-[var(--color-text-light)] dark:text-[var(--color-text-dark)]' to={'/dashboard/my-profile'}>My Profile</NavLink></li>
        </ul>
      </div>
    </div>
  </div>
</div>

    );
};

export default Dashboard;