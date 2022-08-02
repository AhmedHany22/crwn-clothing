import Styles from "./ProductCard.styles";
import Button from "./../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/Cart/cart.action";
import { cartItemsSelector } from "../../Store/Cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const addToCart = () => dispatch(addItemToCart(cartItems, product));

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
