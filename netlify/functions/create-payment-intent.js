require("dotenv").config();
const stripe = require("stripe")(
  // "sk_test_51LNfofAwlDqxZMpUZ7Qeyns8hnG4kgvuDviIdf18XRDqxZwIRpQubMheMTMBTulyOidccRX7C14EU1LOmsg7OB7w00Gk1pEn0U"
  process.env.REACT_APP_STRIPE_SECRET_KEY
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
