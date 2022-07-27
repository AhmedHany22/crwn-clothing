import { ProductsContainer } from "./CategoryPreview.styles";
import { Fragment } from "react";
import ProductCard from "./../ProductCard/index";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <Link to={title}>
        <h2>{title.toUpperCase()}</h2>
      </Link>
      <ProductsContainer>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Fragment>
  );
};

export default CategoryPreview;
