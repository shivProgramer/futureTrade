import React, { useState, useEffect } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import logo from "../assets/pic2.png";
import Join_Model from "../components/Join_Model";
import { Link, NavLink } from "react-router-dom";

const SideBarHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-white text-black p-3 mb-4 flex items-center justify-between customshadiw rounded-md">
      {/* Left Section */}
      <div className="text-lg font-semibold">
        <img src={logo} alt="VS Logo" className="w-14 mx-auto" />
      </div>
      

      {/* Right Section */}
      <div className="relative dropdown-container">
      <div className="flex items-center gap-4 ">
        {/* Profile Dropdown Trigger */}
        <div className="  flex items-center justify-center  ">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none text-white "
        onClick={handleOpenModal}
      >
     Join Product
      </button>
      <Join_Model isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>

        <button
          className="flex items-center gap-2 px-2 py-1 bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none text-green-400"
          onClick={toggleDropdown}
        >
          <FaUserCircle className="text-3xl text-white" />
          <FaChevronDown />
        </button>
</div>
        {/* Dropdown Box */}
        {dropdownOpen && (
          <div className="absolute right-0 z-50 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-md">
            <ul>
            <NavLink to={"/admin/profile"} >
            <li className="px-4 py-2 border-l-2  hover:border-green-500 hover:bg-gray-100 cursor-pointer">
              
                Profile
              
              </li>
              </NavLink>
              <NavLink to={"/admin/dashboard"} >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-l-2  hover:border-green-500">
                Change Password
              </li>
              </NavLink>
              <NavLink to={"/admin/dashboard"} >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-l-2  hover:border-green-500">
                Logout
              </li>
              </NavLink>
              </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default SideBarHeader;
