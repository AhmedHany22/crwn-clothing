import Styles from "./CartDropDown.styles";
import Button from "./../Button/index";
import CartItem from "./../CartItem/index";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemsSelector } from "./../../Store/Cart/cart.selector";

const CartDropDown = () => {
  const cartItems = useSelector(cartItemsSelector);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Styles.CartDropdownContainer>
      <Styles.CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <Styles.EmptyMessage>Your cart is empty</Styles.EmptyMessage>
        )}
      </Styles.CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </Styles.CartDropdownContainer>
  );
};

export default CartDropDown;
