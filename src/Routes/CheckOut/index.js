import Styles from "./CheckOut.Styles";
import { CartContext } from "./../../Context/cart.context";
import { useContext } from "react";
import CheckoutItem from "./../../Components/CheckoutItem/index";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Styles.CheckoutContainer>
      <Styles.CheckoutHeader>
        <Styles.HeaderBlock>
          <span>Product</span>
        </Styles.HeaderBlock>
        <Styles.HeaderBlock>
          <span>Decription</span>
        </Styles.HeaderBlock>
        <Styles.HeaderBlock>
          <span>Quantity</span>
        </Styles.HeaderBlock>
        <Styles.HeaderBlock>
          <span>Price</span>
        </Styles.HeaderBlock>
        <Styles.HeaderBlock>
          <span>Remove</span>
        </Styles.HeaderBlock>
      </Styles.CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Styles.Total>Total: {cartTotal}</Styles.Total>
    </Styles.CheckoutContainer>
  );
};

export default CheckOut;
