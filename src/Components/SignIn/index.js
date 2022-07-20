import "./SignIn.styles.scss";
import { useState } from "react";

import FormInput from "../FormInput";
import Button from "./../Button/index";

// In firebase DB -> Enable Authentication -> Signin-method -> Add Provider -> Google
import {
  signInWithEmail,
  signInWithGooglePopup,
} from "../../Utils/Firebase/firebase.utils";

//------------------------------ The Code ------------------------------

const defaultFormFields = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setDefaultFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Handle input fields change
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setDefaultFormFields({ ...formFields, [id]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      setDefaultFormFields(defaultFormFields);
    } catch (e) {
      if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found")
        alert("Incorrect Email or Password");
    }
  };

  // Signing-in with Google-Popup
  const googleUser = async () => await signInWithGooglePopup();

  return (
    <div className="Sign-In-Container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <div className="btn-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" onClick={googleUser} btnType="google">
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
