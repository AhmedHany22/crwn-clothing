import { combineReducers } from "redux";
import { userReducer } from "./User/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
