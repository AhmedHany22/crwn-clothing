import "./CartDropDown.styles.scss";
import Button from "./../Button/index";

const CartDropDown = () => {
  return (
    <di className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </di>
  );
};

export default CartDropDown;
