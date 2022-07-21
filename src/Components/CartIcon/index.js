import "./CartIcon.styles.scss";
import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "./../../Context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartState = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartState}>
      <ShoppinIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
