import React, { useState, useEffect } from "react";
import SideBarHeader from "./SideBarHeader";

const Withdrawal = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [password, setPassword] = useState("");
  const [showContent, setShowContent] = useState(false); // For animation

  const predefinedAmounts = [300, 500, 1000, 2000, 5000, 10000, 49999];

  useEffect(() => {
    // Introduce a delay for animation
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 200);
    return () => clearTimeout(timeout); // Cleanup
  }, []);

  const handleAmountClick = (amount) => {
    setWithdrawAmount(amount.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Withdrawal request submitted!");
    console.log({ withdrawAmount, password });
  };

  return (
    <>
    
      <div className=" text-black flex flex-col items-center">
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 py-4 flex items-center justify-between px-6">
          <button className="text-white text-lg"></button>
          <h1 className="text-xl font-semibold text-white">Withdrawal</h1>
          <div />
        </header>

        {/* Balance Section */}
        <section
          className={`my-6 text-center transition-all duration-500 ease-in-out transform ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h2 className="text-lg font-semibold">
            BALANCE: <span className="text-blue-400">0.00</span>
            <span className="ml-2 px-2 py-1 text-sm rounded-full">ALL</span>
          </h2>
        </section>

        {/* Withdrawal Form */}
        <div
          className={`w-full max-w-3xl bg-gray-900 rounded-lg p-6 shadow-lg transition-all duration-500 ease-in-out transform ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Predefined Amount Buttons */}
            <div className="flex flex-wrap justify-between gap-2">
              {predefinedAmounts.map((amount, index) => (
                <button
                  type="button"
                  key={amount}
                  className={`bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition focus:ring-2 focus:ring-blue-400 transform transition-all duration-500 ease-in-out ${
                    showContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }} // Stagger animation
                  onClick={() => handleAmountClick(amount)}
                >
                  ₹ {amount}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              {/* Withdraw Amount Input */}
              <div className="relative">
                <label htmlFor="withdrawAmount" className="sr-only">
                  Enter Withdraw Amount
                </label>
                <input
                  type="number"
                  id="withdrawAmount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Enter Withdraw Amount"
                  className="w-full p-3 pl-12 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                  ₹
                </span>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full p-3 pl-12 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700 transition"
            >
              WITHDRAWAL REQUEST
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <footer
          className={`mt-8 transition-all duration-500 ease-in-out transform ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <p className="text-gray-500 text-sm">Note: Withdrawal page</p>
        </footer>
      </div>
    </>
  );
};

export default Withdrawal;
