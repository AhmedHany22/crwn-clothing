import { USER_ACTIONS_TYPES } from "./user.types";

// The initial State object
const INITIAL_STATE = { currentUser: null, isLoading: false, error: null };

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // The actions cases of signIn
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };

    // The actions cases of signUp
    case USER_ACTIONS_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };

    // The actions cases of signOut
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTIONS_TYPES.SIGN_OUT_FAILED:
      return { ...state, error: payload };

    // We return the state in the defalt case, because the action is passed to all reducers
    default:
      return state;
  }
};
