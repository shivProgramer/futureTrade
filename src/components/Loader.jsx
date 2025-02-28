

// import React, { useRef, useEffect } from "react";
// import LoadingBar from "react-top-loading-bar";

// const Loader = ({ loading }) => {
//   const loadingBarRef = useRef(null);

//   useEffect(() => {
//     if (!loading) {
//       loadingBarRef.current.complete();
//     } else {
//       loadingBarRef.current.continuousStart();
//     }
//   }, [loading]);

//   return (
//     <LoadingBar
//       ref={loadingBarRef}
//       color="#FF7F00"
//       onLoaderFinished={() => {}}
//       height={4}
//     />
//   );
// };

// export default Loader;


import React, { useEffect } from "react";
import "./Loader.css"; // Create this CSS file for styling
import logo from "../assets/loder-png.png";

const Loader = ({ loading }) => {
  useEffect(() => {
    // Add or remove a class to the body to prevent scrolling when the loader is active
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img
          src={logo}// Replace with your image path
          alt="Loading..."
          width={200}
          height={200}
          className="rotating-image"
        />
      </div>
    </div>
  );
};

export default Loader;
