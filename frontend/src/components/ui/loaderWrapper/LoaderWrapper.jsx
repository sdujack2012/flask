import React from "react";
import RiseLoader from "react-spinners/dist/spinners/RiseLoader";
import "./styles.scss";

const LoaderWrapper = ({ color, loading }) => {
  if (loading) {
    return (
      <div className="loader-wrapper align-middle">
        <RiseLoader color={color} loading />
      </div>
    );
  }
  return null;
};

export { LoaderWrapper };
