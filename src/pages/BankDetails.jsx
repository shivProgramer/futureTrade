import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import daily from "../assets/dailyincome.json";
import SideBarHeader from "./SideBarHeader";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import {
  BankCrteateBank,
  getBankData,
} from "../redux/slice/DashboardAndUser_slice";
import { showToast } from "../utils/Config";

const BankDetails = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [enableInput, setEnableInput] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [formData, setFormData] = useState({
    user_id: userData?.user_id || "",
    account_holder: "",
    account_no: "",
    bank_name: "",
    branch_name: "",
    ifsc_code: "",
  });

  const bankDetails = useSelector(
    (state) => state.dashboard_profile?.bankData?.data
  );
  const loading = useSelector((state) => state.dashboard_profile?.loading);

  const ActiveInput = (e) => {
    e.preventDefault();
    setEnableInput(!enableInput);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      user_id: userData?.user_id,
      account_holder: bankDetails?.account_holder || "",
      account_no: bankDetails?.account_no || "",
      bank_name: bankDetails?.bank_name || "",
      branch_name: bankDetails?.branch_name || "",
      ifsc_code: bankDetails?.ifsc_code || "",
    }));
  }, [bankDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(BankCrteateBank(formData));
      if (res?.payload?.status === 200) {
        showToast("Bank Data updated Successfully", "success");
        dispatch(getBankData(userData?.user_id));
      } else {
        showToast(res?.payload?.msg, "error");
      }
    } catch (error) {
      showToast(error, "error");
    }
  };

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

  useEffect(() => {
    dispatch(getBankData(userData?.user_id));
  }, []);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <SideBarHeader />

      <div className="flex items-center justify-center">
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
                {
                  name: "account_holder",
                  label: "Account Holder Name",
                  placeholder: "e.g., John Doe",
                },
                {
                  name: "account_no",
                  label: "Account Number",
                  placeholder: "e.g., 1234567890",
                },
                {
                  name: "bank_name",
                  label: "Bank Name",
                  placeholder: "e.g., ABC Bank",
                },
                {
                  name: "branch_name",
                  label: "branch_name",
                  placeholder: "e.g., Downtown branch_name",
                },
                {
                  name: "ifsc_code",
                  label: "IFSC Code",
                  placeholder: "e.g., ABCD0123456",
                },
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
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    readOnly={enableInput} // Set to true if input is read-only
                    className={`w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 ${
                      enableInput
                        ? "bg-gray-200 text-black cursor-not-allowed"
                        : "bg-white text-black"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center gap-4">
              <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-600 transition" onClick={ActiveInput}>
                {enableInput? "Enable Input" : "Disable Input"}
              </button>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition"
              >
               {bankDetails ? "Update Details" : "Create"} 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
