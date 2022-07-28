import { Routes, Route } from "react-router-dom";
import Category from "../Category";
import CategoriesPreview from "./../CategoriesPreview/index";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
