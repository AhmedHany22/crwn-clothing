import "./Authentication.styles.scss";

import SignUp from "../../Components/SignUp";
import SignIn from "./../../Components/SignIn/index";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
