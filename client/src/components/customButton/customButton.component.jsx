import React from "react";
import "./customButton.style.scss";

import { CustomButtonContainer } from "./customButton.style";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CustomButton;
