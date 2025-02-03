import React, { useState, useEffect } from "react";
import { getTransactionHistory } from "../redux/slice/Wallet_slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const transactions = [
  {
    type: "CR",
    title: "Add amount via Netbanking",
    date: "6 Jan, 02:53 PM",
    amount: "+₹225000",
    status: "Pending",
    color: "text-green-500",
  },
  {
    type: "CR",
    title: "Add amount via Cash",
    date: "6 Jan, 02:52 PM",
    amount: "+₹10000",
    status: "Pending",
    color: "text-green-500",
  },
  {
    type: "DR",
    title: "Join project",
    date: "4 Jan, 12:00 AM",
    amount: "-₹10000",
    status: "Success",
    color: "text-red-500",
  },
  {
    type: "DR",
    title: "Join project",
    date: "1 Jan, 12:00 AM",
    amount: "-₹10000",
    status: "Success",
    color: "text-red-500",
  },
];

const TransactionHistory = () => {
  const dispatch = useDispatch();
  const [showTransactions, setShowTransactions] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // get data from redux ---------------
  const allTransaction = useSelector(
    (state) => state.Wallet?.transactionData?.data
  );
  
  const loading = useSelector((state) => state.Wallet?.loading);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTransactions(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    dispatch(getTransactionHistory(userData?.user_id));
  }, []);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div className="text-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-center py-4">
          <h1 className="text-lg font-bold">Transaction History</h1>
        </div>

        {/* Transaction List with Animation */}
        <div className="p-4 space-y-4">
          {allTransaction?.map((transaction, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-gray-900 rounded-lg p-4 shadow transform transition-all duration-500 ease-in-out ${
                showTransactions
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation for each transaction
            >
              {/* Left Section */}
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {transaction.type === "1" ? "CR" : "DR"}
                </div>

                {/* Transaction Details */}
                <div>
                  <h2 className="text-sm font-bold">{transaction.description}</h2>
                  <p className="text-xs text-gray-400">{transaction.datetime}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="text-right">
                <p className={`text-sm font-bold ${transaction.color}`}>
                  {transaction.amount}
                </p>
                <p
                  className={`text-xs ${
                    transaction.status_label === "Pending"
                      ? "text-yellow-400":transaction.status_label === "Failed"
                      ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {transaction.status_label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
