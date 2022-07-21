import "./CartDropDown.styles.scss";
import Button from "./../Button/index";
import { useContext } from "react";
import { CartContext } from "./../../Context/cart.context";
import CartItem from "./../CartItem/index";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
