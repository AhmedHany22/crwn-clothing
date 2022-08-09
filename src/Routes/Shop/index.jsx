import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Category from "../Category";
import CategoriesPreview from "./../CategoriesPreview/index";

import { fetchCategoriesStart } from "../../Store/Category/category.action";

const Shop = () => {
  // The dispatch of action to the reducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
