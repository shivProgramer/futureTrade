import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json";
import SideBarHeader from "./SideBarHeader";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../redux/slice/DashboardAndUser_slice";
import Loader from "../components/Loader";
const Wallet = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [showCards, setShowCards] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);
  // Fetch data from Redux
  const allProfileData = useSelector(
    (state) => state.dashboard_profile?.profileData?.data
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);

 
  const handleWithdrawal = (item) => {
    localStorage.setItem("amount", item.amount); 
    nevigate("/admin/withdrawal", { state: { type: item.type } }); 
  };

  const handleAddCash = () => {
    nevigate("/admin/add-cash");
  };
  const handleTransaction = () => {
    nevigate("/admin/transaction-history");
  };
  // Fetch profile data on component mount
  useEffect(() => {
    dispatch(getProfileData(userData?.user_id));
  }, [dispatch, userData?.user_id]);

  const data = [
    { title: "Deposits", amount: "₹0.00" },
    { title: "ROI", amount: allProfileData?.roi_comission, type: 1 },
    { title: "Salary", amount: allProfileData?.salary, type: 2 },
    { title: "CashBack", amount: allProfileData?.cashback, type: 3 },
    { title: "Bonus Reward", amount: allProfileData?.bonus, type: 4 },
  ];

  return (
    <>
      {loading && <Loader loading={loading} />} <SideBarHeader />
      <div className="p-4 text-black">
        {/* Total Balance */}
        <div className="bg-white border-t-2 border-gray-700 text-gray-600 p-5 rounded-lg shadow-lg mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Total Balance</h2>
              <p className="text-2xl font-bold text-green-600">
                {allProfileData?.wallet}
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 text-white border-t-2 border-green-400 px-4 py-2 rounded-lg shadow-lg flex justify-between items-center transform transition-all duration-500 ease-in-out ${
                showCards
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger animation
            >
              <div>
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-lg font-bold">{item.amount}</p>
              </div>
              <div className="flex flex-col items-center">
                <Lottie
                  animationData={daily}
                  style={{ width: "50px", height: "50px" }}
                />

                {/* Conditional button rendering */}
                {item.title === "Deposits" ? (
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 mt-5 rounded-md font-medium shadow-md"
                    onClick={handleAddCash}
                  >
                    + Add Cash
                  </button>
                ) : (
                  <button
                    className="bg-green-600 hover:bg-gray-800 text-white py-2 px-4 mt-4 rounded-md font-medium shadow-md"
                    onClick={() => handleWithdrawal(item)}
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transaction History */}
        <div
          className="bg-white border-t-2 border-gray-700 text-black mt-8 p-4 rounded-lg shadow-lg flex justify-between items-center"
          onClick={handleTransaction}
        >
          <div className="py-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            {/* <div className="mt-4">
              <p className="text-gray-500">No transactions yet</p>
            </div> */}
          </div>
          <div className="cursor-pointer">
            <IoIosArrowForward className="text-green-600" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
