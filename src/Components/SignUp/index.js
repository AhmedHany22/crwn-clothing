import { SignUpContainer } from "./SignUp.sytles";
import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "./../FormInput/index";
import Button from "./../Button/index";

import { signUpStart } from "../../Store/User/user.action";

//-------------------- End of import section --------------------

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setDefaultFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

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
      dispatch(signUpStart(email, password, displayName));
      setDefaultFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email already exist");
    }
  };

  return (
    <SignUpContainer>
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
    </SignUpContainer>
  );
};

export default SignUp;
