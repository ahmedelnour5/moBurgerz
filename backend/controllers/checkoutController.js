import Order from "../models/orderModel.js";
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
    success_url: "http://localhost:3000/Success",
    cancel_url: "http://localhost:3000/Cancel",
  });

  res.json(session.url);
});

export { checkout };
