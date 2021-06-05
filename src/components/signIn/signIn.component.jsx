import React from "react";
import "./signIn.style.scss";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h4>I already have an account</h4>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            label="email"
            required
            handleChange={this.handleChange}
            value={this.state.email}
          />

          <FormInput
            type="password"
            name="password"
            id="pass"
            label="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
          />
          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignin
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
