import React from "react";
import CustomButton from "../customButton/customButton.component";
import "./cartDrop.style.scss";

const CartDrop = () => (
  <div className="cartDrop">
    <div className="cartItem" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);
export default CartDrop;
