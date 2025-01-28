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
import { useDispatch, useSelector } from "react-redux";
import { getBankData, getDataofDashboard,  } from "../redux/slice/DashboardAndUser_slice";
import Loader from "../components/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [showCards, setShowCards] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // get data from redux ---------------
  const allDashData = useSelector(
    (state) => state.dashboard_profile?.allDashboardData?.data
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const cards = [
    {
      id: 1,
      animation: active,
      value: allDashData?.activeDdownline || 0,
      label: "Active Downline",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      animation: cashback,
      value: allDashData?.teamIncome || 0,
      label: "Team Income",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      animation: totatPayout,
      value: allDashData?.totalPayout || 0,
      label: "Total Payout",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      animation: Team,
      value: allDashData?.todayTeamBusiness || 0,
      label: "Today Team Business",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 5,
      animation: daily,
      value: allDashData?.dailyIncome || 0,
      label: "Daily Income",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 6,
      animation: totalaily,
      value: allDashData?.totalDailyIncome || 0,
      label: "Total Daily Income",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 7,
      animation: totalIncome,
      value: allDashData?.Total_income || 0,
      label: "Total Income",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 8,
      animation: wallet,
      value: allDashData?.income_wallet || 0,
      label: "Wallet Balance",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 9,
      animation: moneygif,
      value: allDashData?.cashbackIncome || 0,
      label: "Cashback Income",
      borderColor: "border-green-500",
      bgColor: "bg-pink-50",
    },
    {
      id: 10,
      animation: totatPayout,
      value: allDashData?.todayPayout || 0,
      label: "Today Payout",
      borderColor: "border-pink-500",
      bgColor: "bg-green-50",
    },
  ];

  // here is calling api
  useEffect(() => {
    dispatch(getBankData(userData?.user_id));
  }, []);



  return (
    <>
      {" "}
      {loading && <Loader loading={loading} />}
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
              className={`bg-white p-[0.5rem] border-t-2 hover:shadow-xl ${
                card.borderColor
              } rounded-lg shadow-md flex items-center justify-between gap-4 transform transition-all duration-500 ease-in-out ${
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
