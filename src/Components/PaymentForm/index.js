import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { FormContainer } from "./PaymentForm.styles";
import { PaymentButton, PaymentFormContainer } from "./PaymentForm.styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { cartTotalSelector } from "../../Store/Cart/cart.selector";
import { userSelector } from "../../Store/User/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(cartTotalSelector);
  const currentUser = useSelector(userSelector);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    // Return if Stripe hasn't loaded
    if (!stripe || !elements) return;

    // Start the "loader"
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    // Stop the "loader"
    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error.message);
    else if (paymentResult.paymentIntent.status === "succeeded")
      alert("Payment Successful!");
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton btnType={"inverted"} isLoading={isProcessingPayment}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
