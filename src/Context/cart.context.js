import { createContext, useState, useEffect } from "react";

// The function to add new items to the cart
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

// The context content
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(
      cartItems.reduce((itemsCount, item) => {
        return itemsCount + item.quantity;
      }, 0)
    );
  });

  const addItemToCart = (item) => setCartItems(addCartItem(cartItems, item));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
