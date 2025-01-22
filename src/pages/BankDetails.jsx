import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json";
import SideBarHeader from "./SideBarHeader";

const BankDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFields, setShowFields] = useState(false);

  useEffect(() => {
    const formTimeout = setTimeout(() => {
      setShowForm(true);
    }, 200); // Delay for form appearance

    const fieldsTimeout = setTimeout(() => {
      setShowFields(true);
    }, 400); // Delay for fields stagger animation

    return () => {
      clearTimeout(formTimeout);
      clearTimeout(fieldsTimeout);
    };
  }, []);

  return (
    <>
      <SideBarHeader />

      <div className="  flex items-center justify-center">
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } w-full max-w-5xl bg-white shadow-lg rounded-lg p-8`}
        >
          <div className="flex items-center justify-between mb-6">
            <button className="text-blue-500 text-xl">
              <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="text-3xl font-bold text-blue-700">Bank Details</h1>
            <Lottie
              animationData={daily}
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          <form>
            <div className="space-y-6">
              {[
                { label: "Account Holder Name", placeholder: "e.g., John Doe" },
                { label: "Account Number", placeholder: "e.g., 1234567890" },
                { label: "Bank Name", placeholder: "e.g., ABC Bank" },
                { label: "Branch", placeholder: "e.g., Downtown Branch" },
                { label: "IFSC Code", placeholder: "e.g., ABCD0123456" },
              ].map((field, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ease-in-out transform ${
                    showFields
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
