import { combineReducers } from "redux";
import { userReducer } from "./User/user.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { categoriesReducer } from "./Category/category.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoriesReducer,
});
