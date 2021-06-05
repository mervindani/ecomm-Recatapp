import React from "react";

import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("payment success");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IyD74SFuXyiRaj4cJwG5Ru9kHMib86oSXTgrRiqW8PKPmxTSRjZK0PqydGXVcHN3kiZbIPaeyQvFKHgJf9LFmXZ00OWdhVtLN";

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-CLOTHING"
      billingAddress
      shippingAddress
      image="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      description={`Your Total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="pay now!!"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
