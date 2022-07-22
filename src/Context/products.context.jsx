import { useState, createContext, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocument } from "../Utils/Firebase/firebase.utils.js";

// The actual user value to be accessed
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

// The container that allow all children comps to access its useState value
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // Run just once to copy the data to the firebase store, then ""Delete"" it because each time we refresh our project it will set a new value to our DB
  useEffect(() => {
    // addCollectionAndDocument("categories", SHOP_DATA, "title");
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
