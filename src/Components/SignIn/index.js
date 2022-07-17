import React, { useState } from "react";
import FormInput from "../FormInput";
import "./SignIn.styles.scss";
import Button from "./../Button/index";
// In the firebase Database -> Enable Authentication -> Signin-method -> Add Provider -> Google
import {
  createUserDoc,
  signInWithEmail,
  signInWithGooglePopup,
} from "../../Utils/Firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

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
      const response = await signInWithEmail(email, password);
      console.log(response);
    } catch (e) {
      if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found")
        alert("Incorrect Password or Email");
    }
  };

  // Gitting the Respone of signing-in with Google-Popup
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDoc(user);
  };

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
