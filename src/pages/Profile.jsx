import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  getSupportAbout_usPrivacyTermStatusDatetimeProfileData,
  updateProfile,
} from "../redux/slice/DashboardAndUser_slice";
import Loader from "../components/Loader";
import { use } from "react";
import { showToast } from "../utils/Config";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowProfile(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleImageUpdate = async () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Image = reader.result.split(",")[1];
        try {
          const res = await dispatch(
            updateProfile({
              id: userData.user_id,
              newData: { img: base64Image },
            })
          );
          if (res?.payload?.status === 200) {
            showToast(res?.payload?.msg, "success");
            dispatch(getProfileData(userData?.user_id));
          } else {
            showToast(res?.payload?.msg, "error");
          }
        } catch (error) {
          showToast("Error updating profile image. Please try again.", "error");
        }
      };
      reader.readAsDataURL(imageFile);
    } else {
      showToast("Please select an image to upload.", "error");
    }
  };

  const allProfileData = useSelector(
    (state) => state.dashboard_profile?.profileData?.data
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);
  const phone = useSelector(
    (state) => state.dashboard_profile?.SupportAb_us_Term_Status?.data
  );
  console.log("phone", phone?.support);

  useEffect(() => {
    dispatch(getProfileData(userData?.user_id));
  }, [dispatch, userData?.user_id]);

  useEffect(() => {
    dispatch(getSupportAbout_usPrivacyTermStatusDatetimeProfileData());
  }, [dispatch]);

  const handleNavigation = (path) => {
    if (path === "/admin/profile") {
      const phoneNumber = phone?.support?.replace("https://wa.me/", "");
      const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Hello, I need support.&type=phone_number&app_absent=0`;
      window.open(url, "_blank");
    } else {
      navigate(path); 
    }
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      <SideBarHeader />
      <div
        className={`flex flex-col items-center bg-gray-50 transition-all duration-700 ease-in-out ${
          showProfile ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg mt-2 p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Profile
          </h1>

          <div className="flex flex-col items-center md:items-start my-4 shadow-lg rounded-lg p-6 gap-6">
            {/* Profile Image and Name Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center shadow-inner overflow-hidden">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : allProfileData?.photo ? (
                  <img
                    src={`https://root2.futureservices.services/uploads/${allProfileData?.photo}`}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-4xl">👤</span>
                )}
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="text-2xl font-bold text-gray-800">
                  {allProfileData?.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {allProfileData?.email || "Email not provided"}
                </p>
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-6 border-t pt-4">
              {/* User Information */}
              <div className="flex-1 text-center md:text-left">
                <p className="font-semibold text-gray-800">
                  Login Id:{" "}
                  <span className="text-gray-600">
                    {allProfileData?.user_id}
                  </span>
                </p>
                <p className="font-semibold text-gray-800">
                  Mobile No.:{" "}
                  <span className="text-gray-600">{allProfileData?.phone}</span>
                </p>
                <p className="font-semibold text-gray-800">
                  Wallet:{" "}
                  <span className="text-green-600">
                    {allProfileData?.wallet}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center gap-4">
                <label
                  htmlFor="upload-image"
                  className="text-sm text-blue-500 hover:underline cursor-pointer"
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
                <button
                  onClick={handleImageUpdate}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Add other profile elements here */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "🏦",
                label: "Bank Details",
                path: "/admin/bank-details",
              },
              { icon: "👨‍👩‍👧", label: "Team", path: "/admin/team-tree" },
              { icon: "ℹ️", label: "About Us", path: "/admin/aboutus" },
              { icon: "📋", label: "T&C", path: "/admin/term_conditions" },
              { icon: "🤝", label: "Support", path: "/admin/profile" },
              { icon: "🪪", label: "KYC", path: "/admin/kyc" },
              { icon: "🔒", label: "Privacy Policy", path: "/admin/profile" },
              
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
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "🏦",
                label: "Bank Details",
                path: "/admin/bank-details",
              },
              { icon: "👨‍👩‍👧", label: "Team", path: "/admin/team-tree" },
              { icon: "ℹ️", label: "About Us", path: "/admin/aboutus" },
              { icon: "📋", label: "T&C", path: "/admin/term_conditions" },
              { icon: "🤝", label: "Support", path: "/admin/profile" },
              { icon: "🪪", label: "KYC", path: "/admin/kyc" },
              { icon: "🔒", label: "Privacy Policy", path: "/admin/privacy" },
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
