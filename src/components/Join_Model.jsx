

import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import wallet from "../assets/wallet.json";
import cashback from "../assets/projectsuccess.json";
import join from "../assets/joinsucces.json";
import Loader from "./Loader";
import {
  CreateJoinProdect,
  getjoinPackage,
  getProfileData,
} from "../redux/slice/DashboardAndUser_slice";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../utils/Config";

const Join_Model = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const navigate = useNavigate();
  const allProfileData = useSelector(
    (state) => state.dashboard_profile?.profileData?.data
  );
  const Prodectpackage = useSelector(
    (state) => state.dashboard_profile?.allJoinPacakge?.data
  );
  const loading = useSelector((state) => state.DashboardAndUser_slice?.loading);

  const handleTransaction = () => {
    navigate("/admin/transaction-history");
  };

  useEffect(() => {
    setSelectedPackage("");
    setSelectedCategory("");
  }, []);

  const handleJoin = async () => {
    if (!selectedCategory || !selectedPackage) {
      showToast("Please select a category and a package", "error");
      return;
    }
    let formData = {
      user_id: userData?.user_id,
      project_id: selectedPackage,
    };
    try {
      const res = await dispatch(CreateJoinProdect(formData));
      if (res?.payload?.status === 200) {
        showToast("Joined successfully", "success");
        setShowSuccessAnimation(true);

        // Auto close modal after animation completes
        setTimeout(() => {
          setShowSuccessAnimation(false);
          onClose();
        }, 3000); // Wait for 3 seconds before closing
      } else {
        showToast(res?.payload?.msg, "error");
      }
    } catch (error) {
      showToast(error, "error");
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  // Fetch profile data on component mount
  useEffect(() => {
    dispatch(getProfileData(userData?.user_id));
  }, [dispatch, userData?.user_id]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getjoinPackage(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1F2937] bg-opacity-50 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative bg-[#1F2937] rounded-lg shadow-lg border-t-4 border-green-600 p-6 w-11/12 sm:w-[500px] max-w-full transform transition-all duration-700 ${
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <button
            className="absolute top-2 right-2 text-white text-2xl hover:text-gray-400"
            onClick={onClose}
          >
            <FaTimes />
          </button>

          {showSuccessAnimation ? (
            // Show success animation before closing
            <div className="flex items-center justify-center">
              <Lottie animationData={join} style={{ width: "300px", height: "300px" }} />
            </div>
          ) : (
            <>
              <h2 className="text-white text-lg font-bold mb-4">
                Join a Package
              </h2>

              <div className="mb-4">
                <label className="text-gray-300 block mb-2">Wallet:</label>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-md flex justify-between items-center">
                  ₹ {allProfileData?.wallet}
                  <Lottie
                    className="cursor-pointer"
                    animationData={wallet}
                    style={{ width: "20px", height: "20px" }}
                    onClick={handleTransaction}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-300 block mb-2">
                  Categories: <span className="text-red-600 ml-1"> * </span>
                </label>
                <select
                  className="bg-gray-800 text-white px-4 py-2 w-full rounded-md"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select</option>
                  <option value="1" className="text-xs">Nifty50</option>
                  <option value="2" className="text-xs">Bank Nifty</option>
                  <option value="3" className="text-xs">USD</option>
                  <option value="4" className="text-xs">Bitcoin</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="text-gray-300 block mb-2">
                  Packages: <span className="text-red-600 ml-1"> * </span>
                </label>
                <select
                  className="bg-gray-800 text-white px-4 py-2 w-full rounded-md"
                  value={selectedPackage}
                  onChange={handlePackageChange}
                >
                  <option value="">Select</option>
                  {Prodectpackage &&
                    Prodectpackage.map((ele, index) => (
                      <option
                        className="flex justify-between items-center"
                        key={index}
                        value={ele.id}
                      >
                        {ele?.product_name}
                      </option>
                    ))}
                </select>
              </div>

              <button
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                onClick={handleJoin}
              >
                Join
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Join_Model;
