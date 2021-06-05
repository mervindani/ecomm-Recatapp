import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selectors";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import StripeCheckoutButton from "../../components/stripeButton/stripeButton.component";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";

import "./checkout.style.scss";

const CheckOutPage = ({ cartItems, total, currentUser, match }) => {
  console.log(match);
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <div className="checkoutPage">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total:${total}</span>
      </div>
      <div className="test">
        please use this card for testing--
        <br />
        4242 4242 4242 4242 -Date 01/22 --CVV 123
      </div>
      {signedInCheckPay(currentUser, total)}
    </div>
  );
};

const signedInCheckPay = (currentUser, total) => {
  if (currentUser && total > 0) {
    return <StripeCheckoutButton price={total} />;
  } else if (!currentUser) {
    return (
      <div className="signedPay">you must be signed in for making payments</div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckOutPage);
