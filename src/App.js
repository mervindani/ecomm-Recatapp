import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shopPage/shop.component";
import CheckOutPage from "./page/checkOut/checkout.component";

import Header from "./components/header/header.component";
import SignInUp from "./page/signInUp/signInUp.component";

// import pathname from "./page/checkOut/checkout.component";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";
import checkoutComponent from "./page/checkOut/checkout.component";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // const pathname = CheckOutPage(match);
    // console.log(pathname);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // whereToGo() {
  //   if (this.props.currentUser.path !== `/checkout`) {
  //     return `/`;
  //   } else {
  //     return `/checkout`;
  //   }
  // }

  render() {
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
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
