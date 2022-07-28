import { createContext, useReducer } from "react";
import { actionCreator } from "../Utils/Reducer/reducer.utils";

// ------------------------------ 3 external operations ------------------------------

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

// The function to remove an item from the cart --
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

// ------------------------------ Context OBJ & Reducer State & Actions ------------------------------
// The actual context value to be accessed
export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  removeItemFromCart: () => {},
});

// The initial State object
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
// The actions types of redux reducer for previnfing typing errors
export const CART_ACTIONS_TYPES = {
  SET_CART_STATE: "SET_CART_STATE",
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
};

// ------------------------------ Cart Reducer ------------------------------
// Func that handle the actions to change the state
const cartItemsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.UPDATE_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTIONS_TYPES.SET_CART_STATE:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

// ------------------------------ Context Provider ------------------------------
// The container that allow all children comps to get the updated value
export const CartProvider = ({ children }) => {
  // Using the "useReducer" to destruct the dispatch function
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartItemsReducer, INITIAL_STATE);

  // The function which will handle the dispatch
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((itemsCount, item) => {
      return itemsCount + item.quantity;
    }, 0);

    const newCartTotal = newCartItems.reduce((itemsCount, item) => {
      return itemsCount + item.quantity * item.price;
    }, 0);

    dispatch(
      actionCreator(CART_ACTIONS_TYPES.UPDATE_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  // The function which will handle the dispatch
  const setIsCartOpen = (bool) => {
    dispatch(actionCreator(CART_ACTIONS_TYPES.SET_CART_STATE, bool));
  };

  // ------------------------------ 3 Funcs to update the state ------------------------------
  // Adding a New Item
  const addItemToCart = (item) =>
    updateCartItemsReducer(addCartItem(cartItems, item));

  // Removing an Item
  const removeItemFromCart = (item) =>
    updateCartItemsReducer(removeCartItem(cartItems, item));

  // Remove a complete item
  const clearItemFromCart = (item) =>
    updateCartItemsReducer(clearCartItem(cartItems, item));

  // ------------------------------ The value to be sent ------------------------------
  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setIsCartOpen,
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
