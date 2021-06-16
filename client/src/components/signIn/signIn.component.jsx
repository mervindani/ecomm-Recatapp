import React, { useState } from "react";
import { connect } from "react-redux";
import "./signIn.style.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";

import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSigninStart(email, password);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signIn">
      <h4>I already have an account</h4>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="formInp">
        <FormInput
          type="email"
          name="email"
          id="email"
          label="email"
          required
          handleChange={handleChange}
          value={email}
        />

        <FormInput
          type="password"
          name="password"
          id="pass"
          label="password"
          required
          handleChange={handleChange}
          value={password}
        />

        <div className="button">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSigninStart}
            isGoogleSignin
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
