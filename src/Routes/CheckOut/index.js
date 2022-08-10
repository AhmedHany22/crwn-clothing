import Styles from "./CheckOut.Styles";
import { useSelector } from "react-redux";

import CheckoutItem from "./../../Components/CheckoutItem/index";
import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../Store/Cart/cart.selector";
import PaymentForm from "../../Components/PaymentForm";

const CheckOut = () => {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);

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
      <PaymentForm />
    </Styles.CheckoutContainer>
  );
};

export default CheckOut;
