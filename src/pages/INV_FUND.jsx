import React, { useEffect, useState } from "react";
import SideBarHeader from "./SideBarHeader";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json"
import { getEnvFund } from "../redux/slice/EnvFund_slice";
import { useDispatch, useSelector } from "react-redux";
const INV_FUND = () => {
  const products = [
    {
      name: "Product 1",
      roi: 10.0,
      price: 10000,
      joinDate: "1 Jan 2025, 12:00 AM",
    },
    {
      name: "Product 2",
      roi: 10.0,
      price: 10000,
      joinDate: "4 Jan 2025, 12:00 AM",
    },
    {
      name: "Product 3",
      roi: 12.5,
      price: 15000,
      joinDate: "10 Jan 2025, 10:00 AM",
    },
    {
      name: "Product 4",
      roi: 8.0,
      price: 8000,
      joinDate: "15 Jan 2025, 8:00 PM",
    },
    {
      name: "Product 5",
      roi: 12.5,
      price: 15000,
      joinDate: "10 Jan 2025, 10:00 AM",
    },
    {
      name: "Product 6",
      roi: 8.0,
      price: 8000,
      joinDate: "15 Jan 2025, 8:00 PM",
    },
  ];
  const [showCards, setShowCards] = useState(false);
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem("userData"));

  // get data from redux ---------------
  const allEnvFund = useSelector(
    (state) => state.env_store?.allEnvFund?.data
  );
  const loading = useSelector((state) => state.env_store?.loading);

  console.log("allEnvFund ---- " , allEnvFund)

  useEffect(() => {
    // Delays the animation slightly
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 200); // 200ms delay
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

   // here is calling api
    useEffect(() => {
      dispatch(getEnvFund(userData?.user_id));
    }, []);
  

  return (
    <>
      <SideBarHeader />
      <div className="">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-start text-black font-bold mb-2">
            My Project
          </h1>
          <hr />
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Static Cards with Animation */}
            {allEnvFund && allEnvFund.map((product, index) => (
              <div
                key={index}
                className={`bg-gray-800 border-t-2 border-green-500 text-white p-2 px-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
                  showCards
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }} // Stagger animation
              >
                <h2 className="text-xl font-bold">{product.product_name}</h2>
                <p className="text-sm text-gray-300">ROI: {product.roi}%</p>
                <div className="flex justify-between items-center"> 
                <div className="mt-4">
                  <p className="text-lg text-green-400 font-semibold">
                    Price: ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-300">
                    Join Date: {product.join_date}
                  </p>
                </div>
                <Lottie animationData={daily} style={{ width: "50px" ,height:"50px", color:"green" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default INV_FUND;
