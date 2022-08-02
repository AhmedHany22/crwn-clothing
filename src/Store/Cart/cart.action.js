import { actionCreator } from "../../Utils/Reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.types";

// ---------------------------- 3 Helper operations ----------------------------

// The function to add new items to the cart ++
const addCartItem = (cartItems, newItem) => {
  // Checking if the new item already exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  // What to do if it already exist
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // What to do if it doesn't exist
  return [...cartItems, { ...newItem, quantity: 1 }];
};

// The function to remove an item from the cart
const removeCartItem = (cartItems, removedItem) => {
  // Checking if the item already exists in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removedItem.id
  );

  // If the item quantity equal 1
  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== removedItem.id);

  // What to do if it already exist
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === removedItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

// The function to remove an item from the cart
const clearCartItem = (cartItems, clearedItem) => {
  return cartItems.filter((item) => item.id !== clearedItem.id);
};

// ---------------------------- 4 Funcs to Dispatch ----------------------------
// Check if the cart is open
export const setIsCartOpen = (bool) =>
  actionCreator(CART_ACTIONS_TYPES.SET_CART_STATE, bool);

// Adding a New Item
export const addItemToCart = (cartItems, item) =>
  actionCreator(
    CART_ACTIONS_TYPES.UPDATE_CART_ITEMS,
    addCartItem(cartItems, item)
  );

// Removing an Item
export const removeItemFromCart = (cartItems, item) =>
  actionCreator(
    CART_ACTIONS_TYPES.UPDATE_CART_ITEMS,
    removeCartItem(cartItems, item)
  );

// Remove a complete item
export const clearItemFromCart = (cartItems, item) =>
  actionCreator(
    CART_ACTIONS_TYPES.UPDATE_CART_ITEMS,
    clearCartItem(cartItems, item)
  );
