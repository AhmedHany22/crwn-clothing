import Styles from "./CheckoutItem.styles";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../Store/Cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../Store/Cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const handleAdd = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemove = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const handleClear = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <Styles.CheckoutItemContainer>
      <Styles.ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </Styles.ImageContainer>
      <Styles.Details>{name}</Styles.Details>
      <Styles.Quantity>
        <Styles.Arrow onClick={handleRemove}>&#10094;</Styles.Arrow>
        <Styles.Details>{quantity}</Styles.Details>
        <Styles.Arrow onClick={handleAdd}>&#10095;</Styles.Arrow>
      </Styles.Quantity>
      <Styles.Details>{price}</Styles.Details>
      <Styles.RemoveBtn onClick={handleClear}>&#10005;</Styles.RemoveBtn>
    </Styles.CheckoutItemContainer>
  );
};

export default CheckoutItem;
