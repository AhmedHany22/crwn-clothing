import { CategoryContainer, CategoryTitle } from "./Category.styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, Fragment } from "react";
import { CategoriesContext } from "./../../Context/categories.context";
import ProductCard from "./../../Components/ProductCard/index";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
