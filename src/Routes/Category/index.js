import { CategoryContainer, CategoryTitle } from "./Category.styles";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import ProductCard from "./../../Components/ProductCard/index";

import { categorySelector } from "./../../Store/Category/category.selector";

const Category = () => {
  const categories = useSelector(categorySelector);
  const { category } = useParams();
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
