import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowProfile(true);
    }, 200); 
    return () => clearTimeout(timeout);
  }, []);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <SideBarHeader />
      <div
        className={` flex flex-col items-center bg-gray-50 transition-all duration-700 ease-in-out ${
          showProfile ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg mt-4 p-4">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Profile
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-gray-800">
                Login Id: <span className="text-gray-600">111</span>
              </p>
              <p className="font-semibold text-gray-800">
                Mobile No.: <span className="text-gray-600">7705015444</span>
              </p>
              <p className="font-semibold text-gray-800">
                Wallet: <span className="text-green-600">₹110000.00</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-inner overflow-hidden">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-4xl">👤</span>
                )}
              </div>
              <p className="mt-2 font-bold text-gray-800">Future Trade</p>
              <label
                htmlFor="upload-image"
                className="mt-2 text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Update Image
              </label>
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "🏦",
                label: "Bank Details",
                path: "/admin/bank-details",
              },
              { icon: "👨‍👩‍👧", label: "Team", path: "/admin/profile" },
              { icon: "ℹ️", label: "About Us", path: "/admin/profile" },
              { icon: "📋", label: "T&C", path: "/admin/profile" },
              { icon: "🤝", label: "Support", path: "/admin/profile" },
              { icon: "🪪", label: "KYC", path: "/admin/kyc" },
              { icon: "🔒", label: "Privacy Policy", path: "/admin/profile" },
              { icon: "🚪", label: "Logout", path: "/admin/profile" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transform transition-all duration-500 ${
                  showProfile
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
