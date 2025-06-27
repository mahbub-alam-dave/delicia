import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { ContextValues } from "../contexts/ContextProvider";
import Swal from "sweetalert2";
import ToggleIcon from "./ToggleIcon";

const Header = () => {
  const { logOutUser, user, setUser, lightMode } =
    useContext(ContextValues);

  const [displayMenu, setDisplayMenu] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const [displayHeader, setDisplayHeader] = useState(true);
  const [triggeredAction, setTriggeredAction] = useState(false);
  const handleMenuBtn = () => {
    setDisplayMenu((display) => !display);
  };

  useEffect(() => {
    let stopTimeout;
    const handleScrollTop = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setTriggeredAction(false);
        setDisplayHeader(true);
      }

      if (scrollTop > 0 && !triggeredAction) {
        setTriggeredAction(true);
        setDisplayHeader(false);

        clearTimeout(stopTimeout);

        stopTimeout = setTimeout(() => {
          setDisplayHeader(true);
        }, 500);
      }
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
      clearTimeout(stopTimeout);
    };
  }, [triggeredAction]);

  // const handleToggleLightMode = () => {
  //   setLightMode((mode) => !mode);
  //   if (displayMenu) {
  //     setDisplayMenu(false);
  //   }
  // };

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        // user logged out successfully
        setUser(null);
        if (displayMenu) {
          setDisplayMenu(false);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleLoginAndRegisterForMenu = () => {
    if (displayMenu) {
      setDisplayMenu(false);
    }
  };

  const getNavItems = () => {
    return user ? (
      <div className="flex gap-2 items-center">
          {/* <input
            type="checkbox"
            onChange={handleToggleLightMode}
            defaultChecked="checked"
            className="hidden lg:toggle border-indigo-600 bg-[#ff3539] checked:border-orange-500 checked:bg-orange-400 checked:text-orange-600"
          /> */}
          <div className="hidden lg:flex items-center">
            <ToggleIcon
              setDisplayMenu={setDisplayMenu}
              displayMenu={displayMenu}
            />
          </div>

        <div
          onClick={() => setShowUserInfo((userInfo) => !userInfo)}
          className="relative cursor-pointer"
        >
          <div
            className={`bg-gray-200 shadow p-2 ${
              showUserInfo ? "flex items-start flex-col gap-2" : "hidden"
            } absolute top-12 `}
          >
            <h2 className="text-sm">
              <span className="font-semibold">User: </span>
              {user.displayName}
            </h2>
            <button
              onClick={handleLogOutUser}
              className="btn btn-sm bg-[#ff3539] text-white text-sm"
            >
              Logout
            </button>
          </div>
          <div className="border border-gray-300 dark:border-white rounded-[50%]">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "https://i.ibb.co/FLrrTVtL/man.png"
            }
            alt={user?.displayName}
            className="w-12 h-12 object-cover rounded-[50%]"
          />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex items-center gap-2">
        <Link to={"/login"}>
          <button
            onClick={handleLoginAndRegisterForMenu}
            className="btn bg-[#ff3539] text-lg font-semibold text-white"
          >
            Login
          </button>
        </Link>
        <Link to={"/register"}>
          <button
            onClick={handleLoginAndRegisterForMenu}
            className="btn text-lg font-semibold"
          >
            Register
          </button>
        </Link>
        {/* <input
          type="checkbox"
          defaultChecked="checked"
          onChange={handleToggleLightMode}
          className="hidden lg:toggle border-indigo-600 bg-[#ff3539] checked:border-orange-500 checked:bg-orange-400 checked:text-orange-600"
        /> */}
        <div className="hidden lg:block">
          <ToggleIcon
            setDisplayMenu={setDisplayMenu}
            displayMenu={displayMenu}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${
        displayHeader ? "top-[-100px]" : "top-0"
      } border-b border-[rgba(163,163,163,0.44)] sticky z-1000 header transition-all duration-400 ease-in-out bg-gray-50 dark:bg-[#070F2B]`}
    >
      <div
        className={`p-4 max-w-11/12 mx-auto flex justify-between items-center`}
      >
        <div
          className={`flex gap-2 items-center ${
            lightMode ? "text-[#fff]" : "text-[#121212]"
          }`}
        >
          <img src="https://i.ibb.co/xtwSqrXY/delicia-logo.png" alt="" />
          <h2 className="rancho text-3xl text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] font-bold">delicia</h2>
        </div>

        <nav
          className={`hidden lg:flex gap-4 lg:gap-6 dark:text-gray-200`}
        >
          <NavLink to={"/"} className="font-semibold text-base">
            <span>Home</span>
          </NavLink>
          <NavLink to={"/all-recipes"} className="font-semibold text-base">
            <span>All recipes</span>
          </NavLink>
          {/* <NavLink to={"/add-recipe"} className="font-semibold text-base">
            <span>Add recipe</span>
          </NavLink> */}
          {user && (
            <>
              {/* <NavLink to={"/my-recipes"} className="font-semibold text-base">
                <span>My Recipes</span>
              </NavLink> */}
              <NavLink to={"/dashboard"} className="font-semibold text-base">
                <span>Dashboard</span>
              </NavLink>
            </>
          )}
        </nav>

        <div className="flex gap-4 items-center">
          <div className="hidden md:block">{getNavItems()}</div>
          <CiMenuFries
            onClick={handleMenuBtn}
            className={`text-3xl font-bold block lg:hidden ${
              lightMode ? "text-white" : "text-black"
            }`}
          />
        </div>
        <div
          className={`max-w-[300px] w-full bg-white shadow-lg h-screen fixed top-0 transition-all duration-600 ease-in-out block lg:hidden ${
            displayMenu ? "right-0" : "right-[-300px]"
          } z-10`}
        >
          <div className="flex flex-col  gap-4 p-6 mt-10">
            <IoMdClose
              onClick={() => setDisplayMenu((display) => !display)}
              size={22}
            />
            <NavLink
              onClick={() => setDisplayMenu((display) => !display)}
              to={"/"}
              className="font-semibold text-base"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              onClick={() => setDisplayMenu((display) => !display)}
              to={"/all-recipes"}
              className="font-semibold text-base"
            >
              <span>All recipes</span>
            </NavLink>
            <NavLink
              onClick={() => setDisplayMenu((display) => !display)}
              to={"/add-recipe"}
              className="font-semibold text-base"
            >
              <span>Add recipe</span>
            </NavLink>
            {user && (
              <NavLink
                onClick={() => setDisplayMenu((display) => !display)}
                to={"/my-recipes"}
                className="font-semibold text-base"
              >
                <span>My Recipes</span>
              </NavLink>
            )}
            {/*             <input
              type="checkbox"
              defaultChecked="checked"
              onChange={handleToggleLightMode}
              className="toggle border-indigo-600 bg-[#ff3539] checked:border-orange-500 checked:bg-orange-400 checked:text-orange-600"
            /> */}
            <div className="">
              <ToggleIcon
                setDisplayMenu={setDisplayMenu}
                displayMenu={displayMenu}
              />
            </div>
            <div className="md:hidden">{getNavItems()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* 
https://i.ibb.co/FLrrTVtL/man.png
https://i.ibb.co/xKX7yb4V/boy.png
https://i.ibb.co/yFQK0Jpr/man-1.png */
