import React from "react";
import "./signInUp.style.scss";
import SignUp from "../../components/signUp/signUp.component";
import SignIn from "../../components/signIn/signIn.component";

const SignInUp = () => (
  <div className="signInUp">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInUp;
