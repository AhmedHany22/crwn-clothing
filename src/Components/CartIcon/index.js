import Styles from "./CartIcon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../Store/Cart/cart.action";
import {
  cartItemsSelector,
  cartStateSelector,
} from "../../Store/Cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const isCartOpen = useSelector(cartStateSelector);
  const toggleCartState = () => dispatch(setIsCartOpen(!isCartOpen));

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
