import React, { useState, useEffect } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import logo from "../assets/newlogo.jpg";
import Join_Model from "../components/Join_Model";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { showToast } from "../utils/Config";

const SideBarHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    showToast("Logout successful.", "success");
    navigate("/admin/dashboard");
  };

  return (
    <header className="bg-white text-black p-3 mb-4 flex items-center justify-between shadow-md rounded-md w-full">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="VS Logo" className="w-12 h-12 object-contain" />
        <h1 className="text-lg font-bold hidden sm:block">Dashboard</h1>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4 dropdown-container">
        {/* Join Product Button */}
        <button
          className="px-3 py-2 text-sm sm:text-base bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          onClick={handleOpenModal}
        >
          Join Product
        </button>
        <Join_Model isOpen={isModalOpen} onClose={handleCloseModal} />
        
        {/* Profile Dropdown */}
        <button
          className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
          onClick={toggleDropdown}
        >
          <p className="hidden sm:block uppercase text-sm font-semibold">
            {userData?.name || "User"}
          </p>
          <FaUserCircle className="text-2xl" />
          <FaChevronDown className="hidden sm:inline" />
        </button>
        
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-4 top-14 w-48 bg-white text-gray-700 shadow-lg rounded-md overflow-hidden z-50">
            <ul>
              <NavLink to="/admin/profile">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-l-2 hover:border-green-500">Profile</li>
              </NavLink>
              <NavLink to="/admin/change-password">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-l-2 hover:border-green-500">Change Password</li>
              </NavLink>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-l-2 hover:border-red-500"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default SideBarHeader;
