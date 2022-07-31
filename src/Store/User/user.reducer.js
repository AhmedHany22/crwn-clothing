import { USER_ACTIONS_TYPES } from "./user.types";

// The initial State object
const INITIAL_STATE = { currentUser: null };

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // The action case where the reducer modify the state
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    // We return the state in the defalt case, because the action is passed to all reducers
    default:
      return state;
  }
};
