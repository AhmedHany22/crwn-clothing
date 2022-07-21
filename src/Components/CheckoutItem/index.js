import "./CheckoutItem.styles.scss";

import { CartContext } from "../../Context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleAdd = () => addItemToCart(cartItem);
  const handleRemove = () => removeItemFromCart(cartItem);
  const handleClear = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemove}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAdd}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClear}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
