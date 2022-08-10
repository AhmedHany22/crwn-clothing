// Import "dotenv" and run "config" which attatch all the secret vars in dotenv file
require("dotenv").config();

//
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Old ver of exporting
// A basic func that recive event request & do something with it
exports.handler = async (event) => {
  // Doing payment intent knowing { currency, payment method, amount}
  try {
    //
    const { amount } = JSON.parse(event.body);

    // a request to Stripe server for payment
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    //
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log("Stripe handler : ", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
