import React, {FC} from "react";
import Loader from "react-loader-spinner";

type LoadingContainerProps = {
  hasData: boolean;
}

const LoadingContainer: FC<LoadingContainerProps> = ({hasData, children}) => {
  return (
    !hasData ?
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={3000}
      /> : <>{children}</>
  );
};

export default LoadingContainer;
