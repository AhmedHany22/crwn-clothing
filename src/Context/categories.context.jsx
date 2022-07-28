// import SHOP_DATA from "../shop-data.js";
// import { addCollectionAndDocument } from "../Utils/Firebase/firebase.utils.js";
import { useReducer, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utils/Firebase/firebase.utils.js";
import { actionCreator } from "../Utils/Reducer/reducer.utils";

// ------------------------------ Context OBJ & Reducer State & Actions ------------------------------
// The actual user value to be accessed
export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
});

// The initial State object
const INITIAL_STATE = { categories: {} };

// The actions types of redux reducer for previnfing typing errors
export const CATEGORIES_ACTIONS_TYPES = { SET_CATEGORIES: "SET_CATEGORIES" };

// ------------------------------ Categories Reducer ------------------------------
// Func that handle the actions to change the state
export const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`);
  }
};

// ------------------------------ Categories Provider ------------------------------
// The container that allow all children comps to get the updated value
export const CategoriesProvider = ({ children }) => {
  // Using the "useReducer" to destruct the dispatch function
  const [{ categories }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  // The function which will handle the dispatch
  const setCategories = (category) => {
    dispatch(actionCreator(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, category));
  };

  useEffect(() => {
    // Run just once to copy the data to the firebase store it or it will set a new value to our DB
    // addCollectionAndDocument("categories", SHOP_DATA, "title");
    const getCategories = async () => {
      const category = await getCategoriesAndDocuments();
      setCategories(category);
    };
    getCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
