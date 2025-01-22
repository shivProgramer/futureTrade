import React, { useState, useEffect } from "react";
import SideBarHeader from "./SideBarHeader";

const KYC_Verification = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    aadharName: "kattpa",
    aadharNumber: "123456789098",
    panName: "kattpa",
    panNumber: "Adgf139t49",
  });

  useEffect(() => {
    // Delays the form animation slightly
    const timeout = setTimeout(() => {
      setShowForm(true);
    }, 200); // 200ms delay
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("KYC details submitted successfully!");
    console.log(formData);
  };

  return (
    <>
      <SideBarHeader />
      <div className=" text-white flex items-center justify-center p-5">
        <div
          className={`w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all duration-500 ease-in-out ${
            showForm ? "opacity-100 scale-100" : "opacity-0 scale-90 translate-y-5"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
            KYC Verification
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Aadhar Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Aadhar Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="aadharName" className="block mb-2 text-sm">
                    Enter your Aadhar Name*
                  </label>
                  <input
                    type="text"
                    id="aadharName"
                    name="aadharName"
                    value={formData.aadharName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="aadharNumber" className="block mb-2 text-sm">
                    Enter your Aadhar Number*
                  </label>
                  <input
                    type="text"
                    id="aadharNumber"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700 transition"
                >
                  Upload Aadhar Front Image
                </button>
                <button
                  type="button"
                  className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700 transition"
                >
                  Upload Aadhar Back Image
                </button>
              </div>
            </div>

            {/* PAN Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">PAN Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="panName" className="block mb-2 text-sm">
                    Enter your PAN Name*
                  </label>
                  <input
                    type="text"
                    id="panName"
                    name="panName"
                    value={formData.panName}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="panNumber" className="block mb-2 text-sm">
                    Enter your PAN Number*
                  </label>
                  <input
                    type="text"
                    id="panNumber"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full p-3 bg-green-600 rounded-md hover:bg-green-700 transition"
                >
                  Upload PAN Image
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default KYC_Verification;
