

import React from "react";
import bg from "../assets/asset 12.jpeg";
import logo from "../assets/pic2.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {
  return (
    <footer
      className="footer-area pt-16 text-white relative"
      id="Contact"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-8 relative">
        <div className="flex flex-wrap -mx-4">
          {/* Column 1: Logo and Description */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="single-footer-widget">
              <div className="widget-logo mb-4">
                <a href="#">
                  <img src={logo} alt="Logo" className="h-20 w-20" />
                </a>
              </div>
              <p>
                Future trade pvt ltd., a dynamic platform that harnesses the
                power of collective investments to redefine real estate
                transactions.
              </p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <div className="single-footer-widget">
              <h3 className="text-2xl font-bold mb-4 text-shadow  text-[#A6E1FC] uppercase">Project's</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Property
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-footer-widget mt-6">
              <h3 className="text-2xl font-bold mb-4 text-shadow uppercase text-[#A6E1FC]">Policy</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect with Us */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="single-footer-widget">
              <h3 className="text-2xl font-bold mb-4 text-shadow uppercase text-[#A6E1FC] ">Connect with Us</h3>
              <ul className="flex space-x-4 mb-4">
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-400">
                    <FaFacebookSquare size={30} className="text-blue-500"/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-400">
                    <FaTwitter size={30} className=" text-[#1DA1F1]"/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="hover:text-gray-400">
                   <LuInstagram size={30} className="text-[#ac1313]"/>
                  </a>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="bx bxs-map text-xl mr-2"></i>
                  <a href="#" className="hover:underline">
                  123 Maple Street, Sector 7, Green Valley, New Delhi
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bx bxs-phone text-xl mr-2"></i>
                  + 91 9876543210
                </li>
                <li className="flex items-center">
                  <i className="bx bx-envelope text-xl mr-2"></i>
                  <a
                    href="mailto:info@vstechinfra.com"
                    className="hover:underline"
                  >
                   contact@techsolution.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Google Map */}
          <div className="w-full md:w-1/4 px-4">
            <div className="single-footer-widget">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53569.14708070958!2d83.36267310749334!3d26.772122051498176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39915b590e0dcae5%3A0x913c782be6bc3ebb!2sRapti%20Nagar%20Phase-4%2C%20Gorakhpur%2C%20Uttar%20Pradesh!3m2!1d26.736098199999997!2d83.4296686!4m5!1s0x3991456d323440f5%3A0x36eadf897ccd1c7c!2sChargawa%2C%2C%20Gorakhpur%2C%20Uttar%20Pradesh!3m2!1d26.8066878!2d83.3818885!5e1!3m2!1sen!2sin!4v1735885440257!5m2!1sen!2sin"
                width="400"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="copyright-area bg-black py-4 mt-8 relative">
        <div className="container mx-auto px-8">
          <p className="text-center text-sm">
            Copyright © {new Date().getFullYear()} Future trade pvt ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
