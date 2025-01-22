import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";
import Salary from "../components/Salary";

const PromotionPage = () => {
  const invitationCode = "FUTURETRADE01";
  const invitationLink = `https://web.futureservices.services/register?refcode=${invitationCode}`;

  const invitationHistory = [
    { name: "ROCKY", products: 8, status: "Success" },
    { name: "Foundercodetesting", products: 0, status: "Pending" },
  ];

  const [showInvitation, setShowInvitation] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeSalary, setActiveSalary] = useState(false);
  const [activeRefer, setActiveRefer] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setShowInvitation(true), 200);
    const timeout2 = setTimeout(() => setShowHistory(true), 600);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  const handleSalaryClick = () => {
    setActiveRefer(false);
    setActiveSalary(true);
  };
  const handleReferClick = () => {
    setActiveRefer(true);
    setActiveSalary(false);
  };

  return (
    <>
      <SideBarHeader />
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex flex-col items-center">
            <h1 className="text-4xl font-extrabold">Promotion</h1>
            <div className="flex gap-6 mt-4">
              <button className={`text-base  font-medium hover:underline cursor-pointer ${activeRefer ? "text-green-600" : "text-white"}`} onClick={handleReferClick}>
                Refer & Earn
              </button>
              <button
                className={`text-base  font-medium hover:underline cursor-pointer ${activeSalary ? "text-green-600" : "text-white"}`}
                onClick={handleSalaryClick}
              >
                Salary
              </button>
            </div>
          </div>
        </header>

        {/* Main Section */}
        {activeRefer && (
          <main className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-10">
            {/* Invitation Code Section */}
            <div
              className={`flex-1 bg-white border border-green-600 rounded-lg p-6 shadow-lg transition-transform duration-500 ease-out ${
                showInvitation ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <h2 className="text-2xl font-bold text-center text-black mb-6">
                Invitation Code
              </h2>
              <p className="text-lg font-semibold text-center text-black">
                {invitationCode}
              </p>
              <p className="text-sm text-center text-gray-600 mt-2">
                Invite Link
              </p>

              <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 my-4">
                <p className="text-center text-sm text-gray-600">
                  {invitationLink}
                </p>
              </div>

              <div className="text-center">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                  onClick={() => navigator.clipboard.writeText(invitationLink)}
                >
                  Copy Invitation Link
                </button>
              </div>
            </div>

            {/* Invitation History Section */}
            <div
              className={`flex-1 bg-white border border-green-600 rounded-lg p-6 shadow-lg transition-transform duration-500 ease-out ${
                showHistory ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <h2 className="text-2xl font-bold text-center text-black mb-6">
                Invitation History
              </h2>
              <div className="divide-y divide-gray-200">
                {invitationHistory.map((invite, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 transition-opacity duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {invite.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {invite.products} Product Purchase
                      </p>
                    </div>
                    <p
                      className={`text-sm font-bold ${
                        invite.status === "Success"
                          ? "text-green-600"
                          : "text-black"
                      }`}
                    >
                      {invite.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}
        {activeSalary && <Salary />}
      </div>
    </>
  );
};

export default PromotionPage;
