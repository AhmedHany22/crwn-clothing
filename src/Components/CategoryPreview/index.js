import "./CategoryPreview.styles.scss";
import { Fragment } from "react";
import ProductCard from "./../ProductCard/index";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h2>{title.toUpperCase()}</h2>
      <div className="products-container">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
