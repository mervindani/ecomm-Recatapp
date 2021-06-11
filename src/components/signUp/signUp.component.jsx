import React, { useState } from "react";
import "./signUp.style.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signUp">
      <h4 className="title">I donot have an account</h4>
      <span>Sign Up</span>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          id="displayName"
          label="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          label="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          type="password"
          name="password"
          id="pass"
          label="password"
          required
          onChange={handleChange}
          value={password}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          id="pass"
          label="Confirm Password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
