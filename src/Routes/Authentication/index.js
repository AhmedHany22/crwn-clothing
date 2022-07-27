import { AuthContainer } from "./Authentication.styles";

import SignUp from "../../Components/SignUp";
import SignIn from "./../../Components/SignIn/index";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  );
};

export default Authentication;
