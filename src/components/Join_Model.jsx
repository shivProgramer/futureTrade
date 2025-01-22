import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons
import { useNavigate } from "react-router-dom";
import wallet from "../assets/wallet.json";
import Lottie from "lottie-react";
const Join_Model = ({ isOpen, onClose }) => {
  const nevigate = useNavigate();
const handleTrnasaction = () =>{
  nevigate("/admin/transaction-history")
}
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1F2937] bg-opacity-50 transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-[#1F2937] rounded-lg shadow-lg p-6 w-11/12 sm:w-[500px] max-w-full transform transition-all duration-700 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close Button in Top-Right Corner */}
        <button
          className="absolute top-2 right-2 text-white text-2xl hover:text-gray-400"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <h2 className="text-white text-lg font-bold mb-4">Modal Title</h2>

        {/* Wallet Section */}
        <div className="mb-4">
          <label className="text-gray-300 block mb-2">Wallet:</label>{" "}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-md flex justify-between items-center">
            ₹110000.00   <Lottie className="cursor-pointer"
                animationData={wallet}
                style={{ width: "20px", height: "20px" }}
                onClick={handleTrnasaction}
              />
          </div>
         
            
           
        </div>

        {/* Categories Section */}
        <div className="mb-4">
          <label className="text-gray-300 block mb-2">Categories:</label>
          <select className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 w-full rounded-md">
            <option>Select</option>
            {/* Add options dynamically */}
          </select>
        </div>

        {/* Packages Section */}
        <div className="mb-6">
          <label className="text-gray-300 block mb-2">Packages:</label>
          <select className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 w-full rounded-md">
            <option>Select</option>
            {/* Add options dynamically */}
          </select>
        </div>

        {/* Join Button */}
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          onClick={onClose}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Join_Model;
