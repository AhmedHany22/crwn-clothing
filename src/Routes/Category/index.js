import "./Category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CategoriesContext } from "./../../Context/categories.context";
import ProductCard from "./../../Components/ProductCard/index";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  console.log("Category");

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
