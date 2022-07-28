import { createContext, useEffect, useReducer } from "react";
import { actionCreator } from "../Utils/Reducer/reducer.utils";
import {
  authChangeListener,
  createUserDoc,
} from "../Utils/Firebase/firebase.utils";

// ------------------------------ Context OBJ & Reducer State & Actions ------------------------------
// The actual user value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// The initial State object
const INITIAL_STATE = { currentUser: null };

// The actions types of redux reducer for previnfing typing errors
export const USER_ACTIONS_TYPES = { SET_CURRENT_USER: "SET_CURRENT_USER" };

// ------------------------------ User Reducer ------------------------------
// Func that handle the actions to change the state
export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// ------------------------------ User Provider ------------------------------
// The container that allow all children comps to get the updated value
export const UserProvider = ({ children }) => {
  // Using the "useReducer" to destruct the dispatch function
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // The function which will handle the dispatch
  const setCurrentUser = (user) => {
    dispatch(actionCreator(USER_ACTIONS_TYPES.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = authChangeListener((user) => {
      if (user) createUserDoc(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // ------------------------------ The value to be sent ------------------------------
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
