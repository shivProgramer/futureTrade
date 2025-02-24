import React, { useState, useEffect } from "react";
import assest9 from "../assets/pixelcut-export (1).jpg";
import assest8 from "../assets/pixelcut-export (4).jpg";
import assest10 from "../assets/pixelcut-export (8).jpg";

const Carousel = () => {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of image URLs
  const images = [assest9, assest8, assest10];

  // List of texts corresponding to each image
  const texts = [
    {
      title: "One Foundation at a Time",
      description: "	Proven track record in real estate development...",
    },
    {
      title: "Focus on innovation and sustainability",
      description: "A destination born out of the mindset to be exceptional...",
    },
    {
      title: "Future trade pvt ltd .",
      description:
        "we specialize in creating exceptional real estate experiences...",
    },
  ];

  // Function to change to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to change to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-64 md:h-[26rem] overflow-hidden z-">
      {/* Carousel images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 transition duration-700 ease-in-out ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img
            src={src}
            alt={`carousel-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Text overlay on the left */}
      {texts.map((text, index) => (
        <div
          key={index}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white px-20 ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-medium mb-2 text-start text-shadow">
            {text.title}
          </h1>
          <p className="text-sm md:text-base font-medium text-start">
            {text.description}
          </p>
        </div>
      ))}

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-2 bg-white bg-opacity-50 rounded-full"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-2 bg-white bg-opacity-50 rounded-full"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
