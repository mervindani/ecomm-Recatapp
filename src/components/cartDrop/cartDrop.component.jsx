import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
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
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDrop);
