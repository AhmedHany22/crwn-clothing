import "./SignUp.sytles.scss";
import { useState } from "react";

import FormInput from "./../FormInput/index";
import Button from "./../Button/index";

import {
  signUpWithEmail,
  createUserDoc,
} from "../../Utils/Firebase/firebase.utils";

//-------------------- The Code --------------------

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setDefaultFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Handle input fields change
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setDefaultFormFields({ ...formFields, [id]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await signUpWithEmail(email, password);
      await createUserDoc(user, { displayName });
      setDefaultFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email already exist");
      else console.log("user creation encountered an error", error);
    }
  };

  return (
    <div className="Sign-Up-Container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          id="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
