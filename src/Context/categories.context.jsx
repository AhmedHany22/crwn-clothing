import { useState, createContext, useEffect } from "react";
// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocument } from "../Utils/Firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../Utils/Firebase/firebase.utils.js";

// The actual user value to be accessed
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

// The container that allow all children comps to access its useState value
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Run just once to copy the data to the firebase store, then ""Delete"" it because each time we refresh our project it will set a new value to our DB
  useEffect(() => {
    // addCollectionAndDocument("categories", SHOP_DATA, "title");
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
