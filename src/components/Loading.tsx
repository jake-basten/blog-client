import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={150}
      width={150}
      timeout={3000}
    />
  )
}

export default Loading;
