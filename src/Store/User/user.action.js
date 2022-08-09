import { actionCreator } from "../../Utils/Reducer/reducer.utils";
import { USER_ACTIONS_TYPES } from "./user.types";

//------------------------- Checking for user Action -------------------------
export const checkUserSession = () => {
  return actionCreator(USER_ACTIONS_TYPES.CHECK_USER_SESSION);
};

//------------------------- SignIn Actions -------------------------
export const googleSignInStart = () => {
  return actionCreator(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);
};
export const emailSignInStart = (email, password) => {
  return actionCreator(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};
export const signInSuccess = (user) => {
  return actionCreator(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);
};
export const signInFailed = (error) => {
  return actionCreator(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error);
};

//------------------------- SignUp Actions -------------------------
export const signUpStart = (email, password, displayName) => {
  return actionCreator(USER_ACTIONS_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};
export const signUpSuccess = (user, additionalInfo) => {
  return actionCreator(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalInfo,
  });
};
export const signUpFailed = (error) => {
  return actionCreator(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error);
};

//------------------------- SignOut Actions -------------------------
export const signOutStart = () =>
  actionCreator(USER_ACTIONS_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  actionCreator(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  actionCreator(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error);
