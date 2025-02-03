// import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { popupSlider } from "../redux/slice/DashboardAndUser_slice";
// import { useDispatch, useSelector } from "react-redux";
// import { API_URL_Img } from "../utils/Config";

// const ModalPopupDashboard = ({ open }) => {
//   const [isOpen, setIsOpen] = useState(open || false);
//   const dispatch = useDispatch();
//   const popupSliderdata = useSelector(
//     (state) => state.dashboard_profile?.popupSliderdata?.data
//   );

//   const closeModal = () => {
//     localStorage.setItem("model", false);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     dispatch(popupSlider("slider"));
//   }, [dispatch]);

//   return (
//     <div>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div
//             className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-10"
//             style={{
//               width: "70vh",
//               maxWidth: "700px",
//               height: "0vh",
//               position: "absolute",
//               top: "50%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-black text-2xl z-50"
//             >
//               &times;
//             </button>

//             {/* Carousel */}
//             <Carousel
//               showThumbs={false}
//               infiniteLoop
//               autoPlay
//               interval={3000}
//               showStatus={false}
//               className="w-full h-full"
//             >
//               {popupSliderdata && Array.isArray(popupSliderdata) ? (
//                 popupSliderdata.map((image, index) => (
//                   <div key={index} className="h-full w-full flex items-center justify-center">
//                     <img
//                       src={`${API_URL_Img}${image?.slider1}`}
//                       alt={`Slide ${index + 1}`}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="flex items-center justify-center h-full">
//                   No images available
//                 </div>
//               )}
//             </Carousel>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModalPopupDashboard;


import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { popupSlider } from "../redux/slice/DashboardAndUser_slice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_Img } from "../utils/Config";

// CSS for animations
const styles = `
  @keyframes scaleUp {
    from {
      transform: scale(0.8) translateY(-50%);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(-50%);
      opacity: 1;
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1) translateY(-50%);
      opacity: 1;
    }
    to {
      transform: scale(0.8) translateY(-50%);
      opacity: 0;
    }
  }

  .modal-animation {
    animation: scaleUp 0.3s ease-out forwards;
  }

  .modal-close-animation {
    animation: scaleDown 0.3s ease-out forwards;
  }
`;

const ModalPopupDashboard = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();
  const popupSliderdata = useSelector(
    (state) => state.dashboard_profile?.popupSliderdata?.data
  );

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem("model", false);
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match the duration of the animation
  };

  useEffect(() => {
    if (open) {
      setIsOpen(true);
      dispatch(popupSlider("slider"));
    }
  }, [open, dispatch]);

  return (
    <div>
      {/* Inject CSS styles */}
      <style>{styles}</style>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            className={`relative bg-white shadow-lg rounded-lg overflow-hidden mb-10 ${
              isClosing ? "modal-close-animation" : "modal-animation"
            }`}
            style={{
              width: "70vh",
              maxWidth: "700px",
              height: "70vh",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl z-50"
            >
              &times;
            </button>

            {/* Carousel */}
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
              showStatus={false}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopupDashboard;