import { CART_ACTIONS_TYPES } from "./cart.types";

// The initial State object
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// ------------------------------ Cart Reducer ------------------------------
// Func that handle the actions to change the state
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_STATE:
      return { ...state, isCartOpen: payload };

    case CART_ACTIONS_TYPES.UPDATE_CART_ITEMS:
      return { ...state, cartItems: payload };

    default:
      return state;
  }
};
