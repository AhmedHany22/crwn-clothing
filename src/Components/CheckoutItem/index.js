import Styles from "./CheckoutItem.styles";

import { CartContext } from "../../Context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAdd = () => addItemToCart(cartItem);
  const handleRemove = () => removeItemFromCart(cartItem);
  const handleClear = () => clearItemFromCart(cartItem);

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
