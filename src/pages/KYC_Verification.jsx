import React, { useState, useEffect } from "react";
import SideBarHeader from "./SideBarHeader";
import { getKyc, KycUpdate } from "../redux/slice/KyC_slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { API_URL, API_URL_Img, showToast } from "../utils/Config";

const KYC_Verification = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [formData, setFormData] = useState({
    user_id: userData?.user_id,
    aadhaarName: "",
    aadhaarNumber: "",
    panName: "",
    panNumber: "",
    aadhaarImg: "",
    panImg: "",
  });

  // get data from redux
  const allkycdata = useSelector((state) => state.kyc?.keydata?.data);
  const loading = useSelector((state) => state.kyc?.loading);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      user_id: allkycdata?.user_id,
      aadhaarName: allkycdata?.aadhaar_name,
      aadhaarNumber: allkycdata?.aadhaar_number,
      panName: allkycdata?.pan_name,
      panNumber: allkycdata?.pan_number,
      aadhaarImg: allkycdata?.aadhaar_img
        ? `${API_URL_Img}${allkycdata?.aadhaar_img}`
        : "",
      panImg: allkycdata?.pan_img ? `${API_URL_Img}${allkycdata?.pan_img}` : "",
    }));
  }, [allkycdata]);

  useEffect(() => {
    dispatch(getKyc(userData?.user_id));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData({ ...formData, [fieldName]: reader.result });
      };
    }
  };

  const removeImage = (fieldName) => {
    setFormData({ ...formData, [fieldName]: "" });
  };

  // Remove the base64 prefix from the image string if it exists
  const cleanBase64 = (base64String) => {
    if (base64String) {
      return base64String.replace(/^data:image\/[a-z]+;base64,/, "");
    }
    return base64String;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: userData?.user_id,
      aadhaarName: formData.aadhaarName,
      aadhaarNumber: formData.aadhaarNumber,
      panName: formData.panName,
      panNumber: formData.panNumber,
      aadhaarImg: formData.aadhaarImg ? cleanBase64(formData.aadhaarImg) : "",
      panImg: formData.panImg ? cleanBase64(formData.panImg) : "",
    };

    try {
      const res = await dispatch(KycUpdate(data));
      if (res?.payload?.status === 200) {
        showToast("KYC updated successfully", "success");
        dispatch(getKyc(userData?.user_id));
      } else {
        showToast(res?.payload?.msg, "error");
      }
    } catch (error) {
      showToast(error, "error");
    }
  };
  return (
    <>
      {loading && <Loader loading={loading} />}
      <SideBarHeader />
      <div className="text-white flex items-center justify-center">
        <div
          className={`w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-4 transform transition-all duration-500 ease-in-out ${
            showForm
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 translate-y-5"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-2">
            KYC Verification
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Aadhar Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Aadhar Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">
                    Enter your Aadhar Name*
                  </label>
                  <input
                    type="text"
                    name="aadhaarName"
                    value={formData.aadhaarName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    Enter your Aadhar Number*
                  </label>
                  <input
                    type="text"
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              {formData.aadhaarImg && (
                <div className="relative mt-4 inline-block">
                  <img
                    src={formData?.aadhaarImg}
                    alt="Aadhar"
                    className="w-32 h-20 rounded-md"
                  />
                  <button
                    onClick={() => removeImage("aadhaarImg")}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              )}
              <div className="mt-4">
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, "aadhaarImg")}
                  className="hidden"
                  id="aadhaarImg"
                />
                <label
                  htmlFor="aadhaarImg"
                  className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700 transition text-center cursor-pointer"
                >
                  Upload Aadhar Front Image
                </label>
              </div>
            </div>

            {/* PAN Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">PAN Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm">
                    Enter your PAN Name*
                  </label>
                  <input
                    type="text"
                    name="panName"
                    value={formData.panName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    Enter your PAN Number*
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 uppercase"
                    required
                  />
                </div>
              </div>
              {formData.panImg && (
                <div className="relative mt-4 inline-block">
                  <img
                    src={formData?.panImg}
                    alt="PAN"
                    className="w-32 h-20 rounded-md"
                  />
                  <button
                    onClick={() => removeImage("panImg")}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              )}
              <div className="mt-4">
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, "panImg")}
                  className="hidden"
                  id="panImg"
                />
                <label
                  htmlFor="panImg"
                  className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700 transition text-center cursor-pointer"
                >
                  Upload PAN Image
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition"
              >
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default KYC_Verification;
