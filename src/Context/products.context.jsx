import { useState, createContext, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

// The actual user value to be accessed
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

// The container that allow all children comps to access its useState value
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  useEffect(() => {}, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
