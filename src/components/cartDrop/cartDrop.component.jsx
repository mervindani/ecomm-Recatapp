import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem.component";
import "./cartDrop.style.scss";

const CartDrop = ({ cartItems }) => (
  <div className="cartDrop">
    <div className="cartItems">
      {cartItems.map((c) => (
        <CartItem key={c.id} item={c} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDrop);
