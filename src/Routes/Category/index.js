import "./Category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import { CategoriesContext } from "./../../Context/categories.context";
import ProductCard from "./../../Components/ProductCard/index";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
