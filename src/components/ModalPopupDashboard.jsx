

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { popupSlider } from "../redux/slice/DashboardAndUser_slice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_Img } from "../utils/Config";
import { motion, AnimatePresence } from "framer-motion";

const ModalPopupDashboard = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const [startAutoPlay, setStartAutoPlay] = useState(false); // Auto-play trigger state
  const dispatch = useDispatch();
  const popupSliderdata = useSelector(
    (state) => state.dashboard_profile?.popupSliderdata?.data
  );

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("model", false);
  };

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      dispatch(popupSlider("slider")); 

      setTimeout(() => {
        setStartAutoPlay(true);
      }, 500); 
    }
  }, [open, dispatch]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-10 w-[50vh] h-[50vh] md:w-[70vh] md:h-[70vh] max-w-[700px]"
            style={{ position: "absolute", top: "50%", left: "50%" }}
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl z-50"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>

            {/* Carousel */}
            {startAutoPlay && ( // Ensures autoPlay starts only after initial delay
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={2000}
                showStatus={false}
                selectedItem={0} // Explicitly setting the first item
                className="w-full h-full"
              >
                {popupSliderdata && Array.isArray(popupSliderdata) ? (
                  popupSliderdata.map((image, index) => (
                    <div key={index} className="h-full w-full flex items-center justify-center">
                      <img
                        src={`${API_URL_Img}${image?.slider1}`}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full">
                    No images available
                  </div>
                )}
              </Carousel>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalPopupDashboard;
