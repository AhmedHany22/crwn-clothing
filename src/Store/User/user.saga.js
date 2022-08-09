import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTIONS_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import {
  getCurrentUser,
  createUserDoc,
  signInWithGooglePopup,
  signInWithEmail,
  signUpWithEmail,
  signOutUser,
} from "../../Utils/Firebase/firebase.utils";
// ------------------------- End of Imports -------------------------

// ------------------------- Start of Auth -------------------------
// A method called when we've user obj
// The additionalInfo is what we need when we sign-up
function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
  try {
    const userSnapshot = yield call(createUserDoc, userAuth, additionalInfo);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFailed(e));
  }
}

// ------------------------- Start of Checking User -------------------------
function* isUserAuthentcated() {
  try {
    // {yield} is similar to {await} but it needs {call} to turn any func into effect
    // {call} has 2 params the method to call & the params of that method
    const userAuth = yield call(getCurrentUser);

    // Error handling {if} condition if user doesn't exist
    // {put} is a replacement for {dispatch} in the generator func
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailed(e));
  }
}
function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuthentcated);
}

// ------------------------- Start of SignIn with Google -------------------------
function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// ------------------------- Start of SignIn with Email -------------------------
function* onSignInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmail, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFailed(e));
  }
}
export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, onSignInWithEmail);
}

// ------------------------- Start of SignUp Start -------------------------
function* onSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(signUpWithEmail, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (e) {
    yield put(signUpFailed(e));
  }
}
export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, onSignUp);
}

// ------------------------- Start of SignUp Success -------------------------
function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
  yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// ------------------------- Start of SignOut Success -------------------------
function* onSignOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailed(e));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, onSignOut);
}

// ------------------------- The user Saga  -------------------------
function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}

export default userSaga;
