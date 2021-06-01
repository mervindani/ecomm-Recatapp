import React from "react";
import "./customButton.style.scss";

const CustomButton = ({
  children,
  isGoogleSignin,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignin ? "googleSignin" : " "} 
    ${inverted ? "inverted" : " "} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
