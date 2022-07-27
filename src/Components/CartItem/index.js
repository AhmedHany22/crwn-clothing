import Styles from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <Styles.CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Styles.ItemDetails>
        <Styles.Name>{name}</Styles.Name>
        <span>
          {quantity} x ${price}
        </span>
      </Styles.ItemDetails>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
