import React, { useState, useEffect } from "react";
import { withdrawal } from "../redux/slice/Wallet_slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../utils/Config";

const Withdrawal = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const predefinedAmounts = [300, 500, 1000, 2000, 5000, 10000, 49999];
  const loading = useSelector((state) => state.Wallet?.loading);
  const balance = JSON.parse(localStorage.getItem("amount"));
  const nevigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type;

  console.log("type ---", type);
  console.log("password ---", password);
  console.log("withdrawAmount ---", withdrawAmount);
  console.log("userData ---", userData?.user_id);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleAmountClick = (amount) => {
    setWithdrawAmount(amount.toString());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(
        withdrawal({
          user_id: userData?.user_id,
          amount: withdrawAmount,
          pass: password,
          type:type
        })
      );
      if(res?.payload?.status == 400){
        showToast(res?.payload?.msg, "error")
      }else{
        showToast(res?.payload?.msg, "success")
        nevigate("/admin/wallet"); 
      }
      
      console.log("Response in withdrawal:", res);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {" "}
      {loading && <Loader loading={loading} />}
      <div className="text-black flex flex-col items-center">
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-blue-500 to-blue-600 py-4 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-white">Withdrawal</h1>
        </header>
        {/* Balance Section */}
        <section
          className={`my-6 text-center transition-all duration-500 ease-in-out transform ${
            showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h2 className="text-lg font-semibold">
            BALANCE: <span className="text-blue-400">{balance}.00 </span>
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
                  className={`bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700  focus:ring-2 focus:ring-blue-400 transform transition-all duration-500 ease-in-out ${
                    showContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
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
                  required
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full p-3 pl-12 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🔒"}
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
