import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/cartIcon.component";
import CartDrop from "../cartDrop/cartDrop.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/am.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  LinkOption,
} from "./header.style";

// import "./header.style.scss";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <LinkOption to="/shop">SHOP</LinkOption>
      <LinkOption to="/shop">CONTACT</LinkOption>
      {currentUser ? (
        <LinkOption as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </LinkOption>
      ) : (
        <LinkOption to="/signin">SIGN IN</LinkOption>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDrop />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
