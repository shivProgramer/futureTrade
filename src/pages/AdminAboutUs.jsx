import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSupportAbout_usPrivacyTermStatusDatetimeProfileData } from "../redux/slice/DashboardAndUser_slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const AdminAboutUs = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const aboutData = useSelector(
    (state) => state.dashboard_profile?.SupportAb_us_Term_Status?.data
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);



  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(getSupportAbout_usPrivacyTermStatusDatetimeProfileData());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div className="flex flex-col bg-gray-50">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-400 to-gray-800 text-white shadow-lg">
          <div className="container mx-auto py-4 px-6 flex items-center justify-between">
            <button
              className="text-2xl hover:text-gray-200 transition"
              onClick={() => navigate(-1)}
            >
              ←
            </button>
            <h1 className="text-2xl font-bold">About Us</h1>
          </div>
        </header>

        {/* Content Section */}
        <main className="flex-grow container mx-auto px-6 mt-8">
          <div
            className={`bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Render the about_us data as raw HTML */}
            <div
              dangerouslySetInnerHTML={{
                __html: aboutData?.about_us || "<p>No data available.</p>",
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminAboutUs;
