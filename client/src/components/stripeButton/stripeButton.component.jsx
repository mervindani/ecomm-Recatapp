import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCartCheckOut } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCartCheckOut }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IyD74SFuXyiRaj4cJwG5Ru9kHMib86oSXTgrRiqW8PKPmxTSRjZK0PqydGXVcHN3kiZbIPaeyQvFKHgJf9LFmXZ00OWdhVtLN";

  let url = "";
  if (process.env.NODE_ENV === "production") {
    url = "https://e-clothlive.herokuapp.com/payment";
  } else {
    url = "http://localhost:3000/payment";
  }

  const onToken = (token) => {
    const data = {
      amount: priceForStripe,
      token,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        clearCartCheckOut();
        alert("payment successfull");
        console.log("Success:");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

const mapDispatchToProps = (dispatch) => ({
  clearCartCheckOut: () => dispatch(clearCartCheckOut()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
