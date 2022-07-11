// In the firebase Database -> Enable Authentication -> Signin-method -> Add Provider -> Google
import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../Utils/Firebase/firebase.utils";
import React from "react";

import "./Authentication.styles.scss";

const Authentication = () => {
  // Gitting the Respone of signing-in with Google-Popup
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDoc(user);
  };
  return (
    <React.Fragment>
      <h1>Authentication</h1>
      <button onClick={googleUser}>Google Sign Popup</button>
    </React.Fragment>
  );
};

export default Authentication;
