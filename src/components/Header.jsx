import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/newlogo.jpg";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  
  return (
    <nav className="bg-white fixed w-full z-50 top-0 start-0 border-gray-200 dark:border-gray-600 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} alt="Logo" width={100} height={90} className="p-2" />
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex justify-center gap-5">
            <MdPhoneInTalk
              size={35}
              className="bg-[#BB9532] text-white p-2 rounded-full"
            />
            <MdOutlineEmail
              size={35}
              className="bg-[#BB9532] text-white p-2 rounded-full"
            />
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:mt-0 md:border-0 md:bg-white text-gray-600">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-700 border-r-2 font-normal text-sm border-gray-300 hover:bg-gray-100 transition-all duration-300"
                aria-current="page"
                onClick={closeMenu} // Close menu when clicked
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block py-2 px-3 text-gray-700 border-r-2 font-normal text-sm border-gray-300 hover:bg-gray-100 transition-all duration-300"
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/view_buy_project_here"
                className="block py-2 px-3 text-gray-700 border-r-2 font-normal text-sm border-gray-300 hover:bg-gray-100 transition-all duration-300"
                onClick={closeMenu} // Close menu when clicked
              >
                Buy Projects Here
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comming"
                className="block py-2 px-3 text-gray-700 border-r-2 font-normal text-sm border-gray-300 hover:bg-gray-100 transition-all duration-300"
                onClick={closeMenu} // Close menu when clicked
              >
                Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comming"
                className="block py-2 px-3 text-gray-700 border-r-2 font-normal text-sm border-gray-300 hover:bg-gray-100 transition-all duration-300"
                onClick={closeMenu} // Close menu when clicked
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-3 text-gray-800 border-r-2 font-normal text-sm hover:bg-gray-100 transition-all duration-300"
                onClick={closeMenu} // Close menu when clicked
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
