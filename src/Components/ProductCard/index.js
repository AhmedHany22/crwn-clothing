import Styles from "./ProductCard.styles";
import Button from "./../Button/index";
import { useContext } from "react";
import { CartContext } from "./../../Context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);

  return (
    <Styles.ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Styles.Footer>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{price}</Styles.Price>
      </Styles.Footer>
      <Button btnType="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </Styles.ProductCardContainer>
  );
};

export default ProductCard;
