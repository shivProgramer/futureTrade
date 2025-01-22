import React, { useEffect, useState } from "react";
import SideBarHeader from "./SideBarHeader";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json";
import moneygif from "../assets/money.json";
import active from "../assets/active.json";
import totatPayout from "../assets/payout.json";
import Team from "../assets/team.json";
import totalaily from "../assets/total-daily-incom.json";
import totalIncome from "../assets/total-income.json";
import wallet from "../assets/wallet.json";
import cashback from "../assets/cashback.json";


const Dashboard = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 200); // Delay for animation
    return () => clearTimeout(timeout);
  }, []);

  const cards = [
    {
      id: 1,
      animation: active,
      value: "29,34",
      label: "Active Downline",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      animation: cashback,
      value: "20,000",
      label: "Team Income",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      animation: totatPayout,
      value: "10,000",
      label: "Total Payout",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      animation: Team,
      value: "20,000",
      label: "Today Team Business",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      animation: daily,
      value: "20,000",
      label: "Daily Income",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 6,
      animation: totalaily,
      value: "20,000",
      label: "Total Daily Income",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 7,
      animation: totalIncome,
      value: "22,000",
      label: "Total Income",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 8,
      animation: wallet,
      value: "15,000",
      label: "Wallet Balance",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 9,
      animation: moneygif,
      value: "50,000",
      label: "Cashback Income",
      borderColor: "border-green-500",
      bgColor: "bg-pink-50",
    },
    {
      id: 10,
      animation: totatPayout,
      value: "10,000",
      label: "Today Payout",
      borderColor: "border-pink-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <>
      <SideBarHeader />
      <div className="flex-1 px-6 py-2">
        <h1 className="text-xl mb-4 font-semibold text-gray-800 text-shadow">
          Downline Details
        </h1>
        <hr />

        <div className="bg-gray-100 border border-gray-300 rounded-md shadow-md p-4 flex items-center mt-4">
        {/* Left Section */}
        <div className="bg-green-500 text-white font-semibold text-sm px-3 py-3 w-[10%] text-center rounded-l-md">
        Note
        </div>

        {/* Marquee Section */}
        <div className="flex-1 bg-white p-2 overflow-hidden ">
          <marquee className="text-gray-700 font-medium">
            This is a scrolling marquee text. Add your content here to make it
            scroll across the screen!
          </marquee>
        </div>

      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white p-[0.5rem] border-t-2 hover:shadow-xl ${card.borderColor} rounded-lg shadow-md flex items-center justify-between gap-4 transform transition-all duration-500 ease-in-out ${
                showCards
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${card.bgColor} p-3 rounded-full`}>
                <Lottie
                  animationData={card.animation}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold text-xl">
                  {card.value}
                </span>
                <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
