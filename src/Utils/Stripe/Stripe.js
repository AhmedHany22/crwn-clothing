import { loadStripe } from "@stripe/stripe-js";

// It's what Run so Stripe service knows this our stripe account
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
