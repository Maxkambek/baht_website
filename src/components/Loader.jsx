import React from "react";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="Loader">
      <Hearts
        height="200"
        width="200"
        color="#FF0090"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
