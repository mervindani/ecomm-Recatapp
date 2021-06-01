import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem.component";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import "./cartDrop.style.scss";

const CartDrop = ({ cartItems, history, dispatch }) => (
  <div className="cartDrop">
    <div className="cartItems">
      {cartItems.length ? (
        cartItems.map((c) => <CartItem key={c.id} item={c} />)
      ) : (
        <span className="emptyMessage">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDrop));
