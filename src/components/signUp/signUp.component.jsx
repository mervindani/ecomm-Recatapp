import React from "react";
import "./signUp.style.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUp">
        <h4 className="title">I donot have an account</h4>
        <span>Sign Up</span>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            id="displayName"
            label="displayName"
            required
            onChange={this.handleChange}
            value={displayName}
          />
          <FormInput
            type="email"
            name="email"
            id="email"
            label="email"
            required
            onChange={this.handleChange}
            value={email}
          />
          <FormInput
            type="password"
            name="password"
            id="pass"
            label="password"
            required
            onChange={this.handleChange}
            value={password}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            id="pass"
            label="Confirm Password"
            required
            onChange={this.handleChange}
            value={confirmPassword}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
