import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Createpayin } from "../redux/slice/Wallet_slice";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../utils/Config";
import Loader from "../components/Loader";

const AddCash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    type: "",
  });
  const userData = JSON.parse(localStorage.getItem("userData"));
  // get data from redux ---------------

  const loading = useSelector((state) => state.Wallet?.loading);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);
  const handleAddMoney = async () => {
    if (!selectedPaymentMethod) {
      showToast("Please select a payment method", "error");
      return;
    }
    if (!amount || amount <= 0) {
      showToast("Please enter a valid amount", "error");
      return;
    }
    if (selectedPaymentMethod === "CHEQUE" && !image) {
      showToast("Please upload an image of the cheque", "error");
      return;
    }
    console.log("Money added:", {
      amount,
      paymentDetails,
    });
    try {
      const formData = {
        user_id: userData?.user_id,
        amount: amount && amount,
        type: paymentDetails?.type,
        ...(image && { img: image }),
      };
      const res = await dispatch(Createpayin(formData));
      console.log("res --", res);
      if (res?.payload?.status === 200) {
        showToast(res?.payload?.msg, "success");
        setPaymentDetails({
          type: "",
        });
        setAmount("");
        setSelectedPaymentMethod("");
        setImage("");
      } else if (res?.payload?.status === "SUCCESS") {
        if (res?.payload?.payment_link) {
          window.open(res?.payload?.payment_link, "_blank");
          setPaymentDetails({
            type: "",
          });
          setAmount("");
          setSelectedPaymentMethod("");
          setImage("");
        } else {
          showToast("Payment link not available", "error");
        }
        setPaymentDetails({
          type: "",
        });
        setAmount("");
        setSelectedPaymentMethod("");
      } else {
        showToast(res?.payload?.msg, "error");
      }
    } catch (error) {
      showToast(error.message || "An error occurred", "error");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPaymentDetails((prev) => ({
          ...prev,
          type: "CHEQUE",
          data: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const paymentMethods = [
    {
      method: "Cash",
      type: "CASH",
      description: "Use Cash for payment",
      icon: "💵",
    },
    {
      method: "Cheque",
      type: "CHEQUE",
      description: "Upload Cheque for payment",
      icon: "📄",
    },
    {
      method: "UPI",
      type: "UPI",
      description: "Use UPI for payment",
      icon: "📱",
    },
    {
      method: "Debit/NetBanking",
      type: "NETBANKING",
      description: "Use Debit card or NetBanking for payment",
      icon: "💳",
    },
  ];

  return (
    <>
      {" "}
      {loading && <Loader loading={loading} />}
      <div className="p-0 md:p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-4 text-white font-bold text-lg">
          Deposit
        </div>

        {/* Main Content */}
        <div
          className={`mt-6 bg-white shadow-md rounded-lg p-6 mb-6 transform transition-all duration-500 ease-in-out ${
            showContent
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 translate-y-5"
          }`}
        >
          {/* Enter Amount Section */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Enter Amount <span className="text-red-600 pl-2">*</span>
            </label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount here"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {[10000, 25000, 50000, 100000, 200000, 500000].map(
                (quickAmount) => (
                  <button
                    key={quickAmount}
                    onClick={() => setAmount(quickAmount)}
                    className="bg-gray-100 hover:bg-blue-100 text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300"
                  >
                    + ₹{quickAmount.toLocaleString()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-black text-white shadow-md rounded-lg p-2 md:p-6 mt-6">
            <p className="text-sm font-medium mb-4">
              Get cashback on deposit above ₹100
            </p>
            <div className="space-y-4">
              {paymentMethods.map((payment, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-4 border-b border-gray-700 pb-4 last:border-b-0 cursor-pointer justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{payment.icon}</span>
                    <div>
                      <p className="font-semibold">{payment.method}</p>
                      <p className="text-sm text-gray-400">
                        {payment.description}
                      </p>
                    </div>
                  </div>

                  {/* Radio Button on the Right */}
                  <div className="relative">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={payment.type}
                      checked={selectedPaymentMethod === payment.type}
                      onChange={(e) => {
                        setSelectedPaymentMethod(e.target.value);
                        setPaymentDetails({ type: e.target.value, data: null });
                      }}
                      className="w-6 h-6 text-blue-500 focus:ring-0 appearance-none border-2 border-gray-300 rounded-full checked:border-green-500 checked:bg-green-500"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Conditional Content for Cheque */}
          {selectedPaymentMethod === "CHEQUE" && (
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Upload Cheque
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {image && (
                <p className="text-sm text-green-500 mt-2">
                  File uploaded successfully.
                </p>
              )}
            </div>
          )}

          {/* Add Money Button */}
          <div
            className="mt-4 bg-green-500 text-white text-center py-4 cursor-pointer hover:bg-green-600"
            onClick={handleAddMoney}
          >
            Add Money
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCash;
