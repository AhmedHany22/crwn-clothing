import Styles from "./CartIcon.styles";
import { CartContext } from "./../../Context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleCartState = () => setIsCartOpen(!isCartOpen);

  return (
    <Styles.CartIconContainer onClick={toggleCartState}>
      <Styles.ShoppingIcon />
      <Styles.ItemCount>
        {cartItems.reduce((itemsCount, item) => {
          return itemsCount + item.quantity;
        }, 0)}
      </Styles.ItemCount>
    </Styles.CartIconContainer>
  );
};

export default CartIcon;
