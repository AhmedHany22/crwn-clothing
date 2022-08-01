import { combineReducers } from "redux";
import { userReducer } from "./User/user.reducer";
import { categoriesReducer } from "./Category/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoriesReducer,
});
