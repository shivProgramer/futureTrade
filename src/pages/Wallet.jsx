import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json";
import SideBarHeader from "./SideBarHeader";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Wallet = () => {
  const nevigate = useNavigate();
  const data = [
    { title: "Deposits", amount: "₹0.00" },
    { title: "ROI", amount: "₹0.00" },
    { title: "Salary", amount: "₹0.00" },
    { title: "CashBack", amount: "₹0.00" },
    { title: "Bonus Reward", amount: "₹0.00" },
  ];

  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Delays the animation slightly
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 200); // 200ms delay
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  const handleWithdrawal = () => {
    nevigate("/admin/withdrawal");
  };

  const handleAddCash = () => {
    nevigate("/admin/add-cash");
  };

  const handleTransaction = () => {
    nevigate("/admin/transaction-history");
  };


  return (
    <>
      {" "}
      <SideBarHeader />
      <div className="p-4 text-black">
        {/* Total Balance */}
        <div className="bg-white border-t-2 border-gray-700 text-gray-600 p-5 rounded-lg shadow-lg mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Total Balance</h2>
              <p className="text-2xl font-bold text-green-600">₹110000.00</p>
            </div>
          </div>
        </div>

        {/* Cards Section with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 text-white border-t-2 border-pink-400 px-4 py-2 rounded-lg shadow-lg flex justify-between items-center transform transition-all duration-500 ease-in-out ${
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
                    onClick={handleWithdrawal}
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transaction History */}
        <div className="bg-white border-t-2 border-gray-700 text-black mt-8 p-4 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <div className="mt-4">
              <p className="text-gray-500">No transactions yet</p>
            </div>
          </div>
          <div onClick={handleTransaction} className="cursor-pointer">
            <IoIosArrowForward className="text-green-600" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
