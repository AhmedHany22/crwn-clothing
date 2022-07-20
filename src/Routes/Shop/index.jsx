import "./Shop.styles.scss";
import { useContext } from "react";
import { ProductsContext } from "./../../Context/products.context";
import ProductCard from "./../../Components/ProductCard/index";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
