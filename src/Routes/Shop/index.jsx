import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Category from "../Category";
import CategoriesPreview from "./../CategoriesPreview/index";

import { setCategories } from "../../Store/Category/category.action";
import { getCategoriesAndDocuments } from "../../Utils/Firebase/firebase.utils.js";

const Shop = () => {
  // The dispatch of action to the reducer
  const dispatch = useDispatch();

  useEffect(() => {
    // Run just once to copy the data to the firebase store it or it will set a new value to our DB
    // addCollectionAndDocument("categories", SHOP_DATA, "title");
    const getCategories = async () => {
      const category = await getCategoriesAndDocuments();
      dispatch(setCategories(category));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
