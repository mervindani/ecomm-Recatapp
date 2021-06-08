import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withspinner.style";

const WithSpinner = (WrappedContainer) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedContainer {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
