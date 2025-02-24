import React from "react";
import bg from "../assets/asset 12.jpeg";
import logo from "../assets/outerbgremove.png";
import bg1 from "../assets/image2.jpg";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer
      className="text-white relative py-16 w-full"
      id="Contact"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Column 1: Logo and Description */}
          <div className="text-center">
            <div>
              <div className="mb-4">
                <a href="#">
                  <img src={logo} alt="Logo" className="h-24 w-24 mx-auto rounded-full" />
                </a>
              </div>
              <p>
                Meta Future Services pvt ltd., a dynamic platform that harnesses the
                power of collective investments to redefine real estate
                transactions.
              </p>
            </div>
          </div>

          {/* Column 2: Projects & Policies */}
          <div className="text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#A6E1FC] uppercase">
                Project's
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Property
                  </a>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-6 mb-2 text-[#A6E1FC] uppercase">
                Policy
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
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

          {/* Column 3: Contact Info */}
          <div className="text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#A6E1FC] uppercase">
                Connect with Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:underline">
                  Rishi Group of Companies Rishi Udyaan Opposite Kala Gaon Near Ram Swaroop Engineering College Faizabad Road , Lucknow., Canal Road, Anora Kala, Uttar Pradesh 226010, India
                  </a>
                </li>
                <li>+91 95549 04444</li>
                <li>
                 
               futureservices666@gmail.com
                 
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="text-center mb-10 md:mb-2">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#A6E1FC] uppercase">
                Follow Us
              </h3>
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <FaFacebookSquare size={30} className="text-blue-500" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <FaTwitter size={30} className="text-[#1DA1F1]" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <LuInstagram size={30} className="text-[#ac1313]" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <FaLinkedin size={30} className="text-[#0077b5]" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="hover:text-gray-400 transition-all duration-300"
                >
                  <ImWhatsapp size={30} className="text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area - Sticks to the bottom */}
      <div className="bg-black py-4 absolute bottom-0 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            Copyright © {new Date().getFullYear()} Meta Future Services pvt ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
