// In the firebase Database -> Enable Authentication -> Signin-method -> Add Provider -> Google
import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDoc,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../Utils/Firebase/firebase.utils";

import "./Authentication.styles.scss";

const Authentication = () => {
  useEffect(() => {
    async function fetchRedirectData() {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDoc(response.user);
      }
    }
    fetchRedirectData();
  }, []);

  // Gitting the Respone of signing-in with Google-Popup
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDoc(user);
  };
  // Gitting the Respone of signing-in with Google-Redirect
  const googleUserRed = async () => {
    const { user } = await signInWithGoogleRedirect();
    await createUserDoc(user);
  };

  return (
    <React.Fragment>
      <h1>Authentication</h1>
      <button onClick={googleUser}>Google Sign Popup</button>
      <button onClick={googleUserRed}>Google Sign Redirect</button>
    </React.Fragment>
  );
};

export default Authentication;
