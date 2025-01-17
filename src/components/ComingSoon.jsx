import React from 'react';


// Example GIF URL
const gifUrl = "https://media.giphy.com/media/d31w5d0u4hlV0TqM/giphy.gif"; // Example GIF

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Work in Progress</h1>
        
        {/* GIF to show processing */}
        <div className="mb-6">
          <img src={gifUrl} alt="Under Processing" className="w-32 mx-auto" />
        </div>
        
        {/* Text */}
        <p className="text-lg text-gray-600 mb-4">This page is under construction. We are working hard to bring you something amazing!</p>

        {/* Inline SVG */}
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="12" />
            <line x1="2" y1="12" x2="12" y2="12" />
          </svg>
        </div>
        
        {/* Button */}
        <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 focus:outline-none">
          Stay Tuned!
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
