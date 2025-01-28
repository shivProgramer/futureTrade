

import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const Loader = ({ loading }) => {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      loadingBarRef.current.complete();
    } else {
      loadingBarRef.current.continuousStart();
    }
  }, [loading]);

  return (
    <LoadingBar
      ref={loadingBarRef}
      color="#FF7F00"
      onLoaderFinished={() => {}}
      height={4}
    />
  );
};

export default Loader;
