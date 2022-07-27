import Styles from "./CartDropDown.styles";
import Button from "./../Button/index";
import { useContext } from "react";
import { CartContext } from "./../../Context/cart.context";
import CartItem from "./../CartItem/index";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
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
