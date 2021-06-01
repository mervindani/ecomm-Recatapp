import React from "react";

import "./checkoutItem.style.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="removeBtn">&#10005;</div>
  </div>
);
export default CheckoutItem;
