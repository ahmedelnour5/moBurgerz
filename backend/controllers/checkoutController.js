import asyncHandler from "express-async-handler";
import { Stripe } from "stripe";

const stripe = new Stripe(
  "sk_test_51O9biqE2a6ZCcKPXowu8oOfsNt5eOxogpMUpYL75gtHXXmwsBHu6tL50gNbD3BSstO4EMsWHwP6JtOU6EkzVszRq00mb4WJpN5"
);

const checkout = asyncHandler(async (req, res) => {
  const cartItems = req.body;
  let lineItems = [];

  cartItems.forEach((cartItem) => {
    lineItems.push({
      price: cartItem.stripeID,
      quantity: cartItem.qty,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url:
      "https://mo-burgerz-backend.vercel.app/Success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://mo-burgerz-backend.vercel.app/Cancel",
  });

  res.json(session.url);
});

const success = asyncHandler(async (req, res) => {
  const { session_id } = req.query;

  const session = await stripe.checkout.sessions.retrieve(session_id);

  res.json({
    userSession: session,
  });
});

export { checkout, success };
