import React, { useState } from "react";
import img from "../assets/asset 11.jpeg";

const Projects = () => {
  // Initialize state for all form fields
  const [formData, setFormData] = useState({
    referralMailId: "",
    applicantName: "",
    emailId: "",
    mobileNo: "",
    dob: "",
    aadharCardNo: "",
    aadharCardFront: null,
    aadharCardBack: null,
    panCardNo: "",
    panCardFront: null,
    pincode: "",
    state: "",
    city: "",
    currentAddress: "",
    isSameAsCurrentAddress: false,
    permanentAddress: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, files, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can process the form data as needed
  };

  return (
    <>
      <div className="text-start text-sa bg-[#000000] min-h-screen flex flex-col items-center mt-16 md:mt-24">
        <div className="w-full">
          {/* Hero Section */}
          <div className="h-[200px] sm:h-[250px] md:h-[350px] relative">
            {/* Background Image */}
            <img
              src={img}
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 sm:pl-8 md:pl-16 bg-black bg-opacity-40 text-gray-600">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BB9532] text-shadow">
                Buy Projects Here
              </h3>
              <p className="text-sm sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3256bb]">
                <a href="/"> Home </a> . Buy Projects Here
              </p>
            </div>
          </div>

          {/* Search Application Section */}
          <div className="bg-[#212529] text-gray-600 rounded-sm p-4 sm:p-6 my-6 container mx-auto">
            <form
              action="https://vstechinfra.com/welcome/search_application"
              method="get"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium text-[#BB9532]">
                  Search Application
                </h3>
                <hr className="border-gray-600" />

                <div className="flex flex-wrap items-end gap-4">
                  {/* Input Field */}
                  <div className="w-full sm:w-1/2 md:w-1/3">
                    <label
                      htmlFor="txt_application_number"
                      className="block text-sm sm:text-base font-medium mb-2"
                    >
                      Enter Application Number
                    </label>
                    <input
                      type="text"
                      name="txt_application_number"
                      id="txt_application_number"
                      className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Application Number"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="w-full sm:w-auto">
                    <button
                      type="submit"
                      className="w-full sm:w-auto mt-2 px-6 py-2 bg-red-700 text-white rounded-full hover:bg-blue-700 transition"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Basic Details Section */}
          <div className="bg-[#212529] text-gray-600 rounded-sm p-4 sm:p-6 my-6 container mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium text-[#BB9532]">
                  Basic Details
                </h3>
                <hr className="border-gray-600" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Referral Mail Id */}
                  <div className="col-span-1">
                    <label
                      htmlFor="referralMailId"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Referral Mail Id (Optional)
                    </label>
                    <input
                      type="text"
                      id="referralMailId"
                      value={formData.referralMailId}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Referral Mail Id"
                    />
                  </div>

                  {/* Applicant Name */}
                  <div className="col-span-1">
                    <label
                      htmlFor="applicantName"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Applicant Name
                    </label>
                    <input
                      type="text"
                      id="applicantName"
                      value={formData.applicantName}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Applicant Name"
                    />
                  </div>

                  {/* Email ID */}
                  <div className="col-span-1">
                    <label
                      htmlFor="emailId"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Email ID
                    </label>
                    <input
                      type="text"
                      id="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Email ID"
                    />
                  </div>

                  {/* Mobile No */}
                  <div className="col-span-1">
                    <label
                      htmlFor="mobileNo"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      id="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Mobile No."
                    />
                  </div>

                  {/* Date of Birth */}
                  <div className="col-span-1">
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Select DOB
                    </label>
                    <input
                      type="date"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Aadhar Card No */}
                  <div className="col-span-1">
                    <label
                      htmlFor="aadharCardNo"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Aadhar Card No.
                    </label>
                    <input
                      type="text"
                      id="aadharCardNo"
                      value={formData.aadharCardNo}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Aadhar Card No."
                    />
                  </div>

                  {/* Aadhar Card Front Upload */}
                  <div className="col-span-1">
                    <label
                      htmlFor="aadharCardFront"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Aadhar Card Front Upload
                    </label>
                    <input
                      type="file"
                      id="aadharCardFront"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Aadhar Card Back Upload */}
                  <div className="col-span-1">
                    <label
                      htmlFor="aadharCardBack"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Aadhar Card Back Upload
                    </label>
                    <input
                      type="file"
                      id="aadharCardBack"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Pan Card No */}
                  <div className="col-span-1">
                    <label
                      htmlFor="panCardNo"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Pan Card No.
                    </label>
                    <input
                      type="text"
                      id="panCardNo"
                      value={formData.panCardNo}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Pan Card No."
                    />
                  </div>

                  {/* Pan Card Front Upload */}
                  <div className="col-span-1">
                    <label
                      htmlFor="panCardFront"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Pan Card Front Upload
                    </label>
                    <input
                      type="file"
                      id="panCardFront"
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Pincode */}
                  <div className="col-span-1">
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Pincode.
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Pincode."
                    />
                  </div>

                  {/* State */}
                  <div className="col-span-1">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter State."
                    />
                  </div>

                  {/* City */}
                  <div className="col-span-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter City."
                    />
                  </div>

                  {/* Current Address */}
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="currentAddress"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Current Address
                    </label>
                    <textarea
                      id="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Current Address"
                    />
                  </div>

                  {/* Same As Current Address Checkbox */}
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="isSameAsCurrentAddress"
                      className="inline-flex items-center text-sm text-white pl-2"
                    >
                      <input
                        type="checkbox"
                        id="isSameAsCurrentAddress"
                        checked={formData.isSameAsCurrentAddress}
                        onChange={handleChange}
                        className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <span className="ml-2">Same as Current Address</span>
                    </label>
                  </div>

                  {/* Permanent Address */}
                  <div className="col-span-1 sm:col-span-2">
                    <label
                      htmlFor="permanentAddress"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Permanent Address
                    </label>
                    <textarea
                      id="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Permanent Address"
                    />
                  </div>
                </div>

                {/* Nominee Details Section */}
                <div className="col-span-4">
                  <h3 className="text-xl sm:text-2xl font-medium my-4 text-[#BB9532]">
                    Nominee Details
                  </h3>
                  <hr className="border-gray-600" />
                </div>
                <div className="mt-1 bg-[#323131] p-1 col-span-4">
                  <label className="text-sm text-gray-200">
                    <input
                      type="radio"
                      name="nomineeOption"
                      id="yesOption"
                      className="mr-2"
                    />
                    Yes
                    <input
                      type="radio"
                      name="nomineeOption"
                      id="noOption"
                      className="ml-4 mr-2"
                    />
                    No
                  </label>
                </div>

                {/* Bank Details Section */}
                <div className="col-span-4">
                  <h3 className="text-xl sm:text-2xl font-medium my-4 text-[#BB9532]">
                    Bank Details
                  </h3>
                  <hr className="border-gray-600" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Your Bank Name */}
                  <div className="col-span-1">
                    <label
                      htmlFor="bankName"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Your Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Bank Name"
                    />
                  </div>

                  {/* Your Bank A/C No. */}
                  <div className="col-span-1">
                    <label
                      htmlFor="bankAccountNo"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Your Bank A/C No.
                    </label>
                    <input
                      type="text"
                      id="bankAccountNo"
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Bank A/C No."
                    />
                  </div>

                  {/* Your Bank IFSC Code No. */}
                  <div className="col-span-1">
                    <label
                      htmlFor="bankIFSC"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      Your Bank IFSC Code No.
                    </label>
                    <input
                      type="text"
                      id="bankIFSC"
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Bank IFSC Code No."
                    />
                  </div>

                  {/* A/C Holder Name */}
                  <div className="col-span-1">
                    <label
                      htmlFor="accountHolderName"
                      className="block text-sm font-medium text-white pl-2"
                    >
                      A/C Holder Name
                    </label>
                    <input
                      type="text"
                      id="accountHolderName"
                      className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="A/C Holder Name"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
