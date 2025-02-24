import React from "react";
import img from "../assets/refralimg.jpg";

const Salary = () => {
  const salaryHistory = [
    { name: "ROCKY", status: "Success" },
    { name: "FounderCodeTesting", status: "Pending" },
  ];

  return (
    <>
      <div className=" text-white flex flex-col">
        {/* Main Section */}
        <main className="container mx-auto flex flex-col md:flex-row gap-8 px-4 mt-10">
          {/* Image Section */}
          <div className="flex-1 bg-white border border-green-500 rounded-lg py-2 px-4 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-black mb-6">
              Important Note
            </h2>
            <div className="flex justify-center">
              <img
                src={img}
                alt="Promotion"
                className="rounded-lg shadow-lg w-full md:w-3/4 "
              />
            </div>
            <ul className="list-disc list-inside space-y-2 text-black mt-6">
              <li>Add minimum 2 downline with the fund of 6 Lacs.</li>
              <li>For carry-on salary, extra 10-20% value of weaker downline.</li>
            </ul>
          </div>

          {/* Salary History Section */}
          <div className="flex-1 bg-white border border-green-500 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center text-black mb-6">
              Salary History
            </h2>
            <div className="divide-y divide-gray-200">
              {salaryHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {entry.name}
                    </h3>
                  </div>
                  <p
                    className={`text-sm font-bold ${
                      entry.status === "Success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {entry.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Salary;
