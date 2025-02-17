import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/loginlogo.png";
import wallet from "../assets/wallet.json";
import home from "../assets/home.json";
import Fund from "../assets/fund.json";
import permotion from "../assets/promotion.json";
import kyc from "../assets/kyc.json";
// import home from "../assets/";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import { getKyc } from "../redux/slice/KyC_slice";
// import wallet from "../assets/wallet.json";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));
   // get data from redux
   const allkycdata = useSelector((state) => state.kyc?.keydata?.data);
  const loading = useSelector((state) => state.kyc?.loading);
  const [animation, setAnimation] = useState(kyc);

  useEffect(() => {
    if (!allkycdata) return; 

    const status = allkycdata?.status;

    if (status === 1) {
      setAnimation(kyc); 
      return;
    }

    const colorMap = {
      0: [1, 1, 0, 1], 
      2: [1, 0, 0, 1], 
    };

    if (!colorMap[status]) return; 
    let updatedAnimation = JSON.parse(JSON.stringify(kyc));
    updatedAnimation.layers.forEach((layer) => {
      if (layer.shapes) {
        layer.shapes.forEach((shape) => {
          if (shape.it) {
            shape.it.forEach((item) => {
              if (item.c && colorMap[status]) {
                item.c.k = colorMap[status];
              }
            });
          }
        });
      }
    });

    setAnimation(updatedAnimation);
  }, [allkycdata]); 

    useEffect(() => {
      dispatch(getKyc(userData?.user_id));
    }, []);
  

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0  z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 lg:w-64 w-3/4`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('path_to_your_background_image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay", 
        }}
      >
        <h2 className="text-3xl rounded-b-2xl  p-2 font-bold text-center bg-[#ffffff]  text-blue-500 mb-5">
          <img
            src={logo}
            alt="VS Logo"
            className="w-24 h-16 my-1 mx-auto"
          />
        </h2>
        <ul className="mt-10">
          <li className="mb-3">
            <Link
              to="/admin/dashboard"
              className={`py-2.5 my-1 gap-4 pl-4 cursor-pointer rounded-sm flex items-center transition-all ${
                isActive("/admin/dashboard")
                  ? "bg-gray-500 text-white border-l-2 rounded-sm border-green-500"
                  : "hover:bg-gray-700 hover:border-l-2 rounded-sm hover:border-green-500 text-white"
              }`}
              onClick={toggleSidebar}
            >
              <Lottie
                animationData={home}
                style={{ width: "30px", height: "30px" }}
              />{" "}
              Home
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/inv-fund"
              className={`py-2.5 my-1 pl-4 cursor-pointer rounded-sm flex gap-4 items-center transition-all ${
                isActive("/admin/inv-fund")
                  ? "bg-gray-500 text-white border-l-2 rounded-sm border-green-500"
                  : "hover:bg-gray-700 hover:border-l-2 rounded-sm hover:border-green-500 text-white"
              }`}
              onClick={toggleSidebar}
            >
              <Lottie
                animationData={Fund}
                style={{ width: "30px", height: "30px" }}
              />{" "}
              INV FUND
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/promotion"
              className={`py-2.5 my-1 pl-4 cursor-pointer rounded-sm flex gap-4 items-center transition-all ${
                isActive("/admin/promotion")
                  ? "bg-gray-500 text-white border-l-2 rounded-sm border-green-500"
                  : "hover:bg-gray-700 hover:border-l-2 rounded-sm hover:border-green-500 text-white"
              }`}
              onClick={toggleSidebar}
            >
              <Lottie
                animationData={permotion}
                style={{ width: "30px", height: "30px" }}
              />{" "}
              PROMOTION
            </Link>
          </li>
          <li className="mb-3">
            <Link
              to="/admin/wallet"
              className={`py-2.5 my-1 pl-4 cursor-pointer rounded-sm flex gap-4 items-center transition-all ${
                isActive("/admin/wallet")
                  ? "bg-gray-500 text-white border-l-2 rounded-sm border-green-500"
                  : "hover:bg-gray-700 hover:border-l-2 rounded-sm hover:border-green-500 text-white"
              }`}
              onClick={toggleSidebar}
            >
              <Lottie
                animationData={wallet}
                style={{ width: "30px", height: "30px" }}
              />{" "}
              WALLET
            </Link>
          </li>

          <li className="mb-3">
            <Link
              to="/admin/kyc"
              className={`py-2.5 my-1 pl-4 cursor-pointer rounded-sm flex gap-4 items-center transition-all ${
                isActive("/admin/kyc")
                  ? "bg-gray-500 text-white border-l-2 rounded-sm border-green-500"
                  : "hover:bg-gray-700 hover:border-l-2 rounded-sm hover:border-green-500 text-white"
              }`}
              onClick={toggleSidebar}
            >
              <Lottie animationData={animation} style={{ width: "30px", height: "30px" }} />
              KYC
            </Link>
          </li>
        </ul>

        {/* Close Button for Mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-white"
          onClick={toggleSidebar}
        >
          ✕
        </button>

      </div>
    </>
  );
};

export default Sidebar;
