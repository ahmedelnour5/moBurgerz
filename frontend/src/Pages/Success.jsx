import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

const Success = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const session_id = urlParams.get("session_id");
  const [customerName, setCustomerName] = useState();
  const [customerEmail, setCustomerEmail] = useState();
  const { cartItems, subTotal, salesTax, cartTotal } =
    useContext(ShoppingCartContext);

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await axios.get(
          `/api/checkout/success?session_id=${session_id}`
        );
        if (response.data) {
          setCustomerEmail(response.data.userSession.customer_details.email);
          setCustomerName(response.data.userSession.customer_details.name);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
  }, [session_id]);
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <ThankYou name={customerName} email={customerEmail} />
        <OrderSummary
          items={cartItems}
          total={cartTotal}
          sub={subTotal}
          tax={salesTax}
        />
      </div>
    </div>
  );
};

const ThankYou = ({ name, email }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="text-base font-medium py-4">
        Thank you for your order {name}
      </p>
      <p className="text-base text-center">
        An email reciept has been sent to {email}
      </p>
    </div>
  );
};

const OrderSummary = ({ items, total, sub, tax }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-gluten text-3xl my-4 uppercase">Order Summary</h2>
      {items && items.length > 0
        ? items.map((item) => <OrderItem key={item.id} item={item} />)
        : null}
      <div className="flex justify-between mt-2 font-medium">
        <span>Subtotal:</span>
        <span>${sub}</span>
      </div>
      <div className="flex justify-between font-medium">
        <span>Tax:</span>
        <span>${tax}</span>
      </div>
      <div className="flex justify-between font-medium">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

const OrderItem = ({ item, total }) => {
  return (
    <div className="flex flex-row w-full justify-between items-center text-center my-1">
      <span>{item.qty}</span>
      <span>{item.item}</span>
      <span>${item.price}</span>
    </div>
  );
};

export default Success;
