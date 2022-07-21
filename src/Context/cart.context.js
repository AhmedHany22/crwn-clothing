import { createContext, useState, useEffect } from "react";

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

// ------------------------------ Context OBJ ------------------------------

// The context content
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

// ------------------------------ Context Provider ------------------------------

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Monitor the cart items count
  useEffect(() => {
    setCartCount(
      cartItems.reduce((itemsCount, item) => {
        return itemsCount + item.quantity;
      }, 0)
    );
  }, [cartItems]);

  // Monitor the cart items Total
  useEffect(() => {
    setCartTotal(
      cartItems.reduce((itemsCount, item) => {
        return itemsCount + item.quantity * item.price;
      }, 0)
    );
  }, [cartItems]);

  // Adding a New Item
  const addItemToCart = (item) => setCartItems(addCartItem(cartItems, item));

  // Removing an Item
  const removeItemFromCart = (item) =>
    setCartItems(removeCartItem(cartItems, item));

  // Remove a complete item
  const clearItemFromCart = (item) =>
    setCartItems(clearCartItem(cartItems, item));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
