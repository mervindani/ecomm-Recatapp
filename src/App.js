import React, { useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shopPage/shop.component";
import CheckOutPage from "./page/checkOut/checkout.component";

import Header from "./components/header/header.component";
import SignInUp from "./page/signInUp/signInUp.component";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
