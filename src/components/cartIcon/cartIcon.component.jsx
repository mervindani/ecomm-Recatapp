import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
