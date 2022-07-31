import { actionCreator } from "../../Utils/Reducer/reducer.utils";
import { USER_ACTIONS_TYPES } from "./user.types";

// The function which will handle the dispatch
export const setCurrentUser = (user) => {
  return actionCreator(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
};
