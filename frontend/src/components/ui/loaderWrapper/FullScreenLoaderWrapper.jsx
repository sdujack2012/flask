import React from "react";
import RiseLoader from "react-spinners/dist/spinners/RiseLoader";
import "./styles.scss";

const sizeMap = {
  sm: 10,
  md: 15,
  lg: 20,
  xl: 25
};

const FullScreenLoader = ({ color = "#0288D1", loading, sm, md, lg, xl }) => {
  const bgStyle = {
    position: "sticky",
    top: "50%",
    left: 0,
    width: "100vw",
    zIndex: "100"
  };

  const loaderWrapper = {
    zIndex: 101,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  const size = [sm, md, lg, xl].map(x => !!x)[0] || "lg";
  const loaderSize = sizeMap[size];

  return (
    loading && (
      <div style={bgStyle}>
        <div style={loaderWrapper}>
          <RiseLoader color={color} loading={loading} size={loaderSize} />
        </div>
      </div>
    )
  );
};

export { FullScreenLoader };
