import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import Customization from "../Components/Customization.jsx";
import EditItemModal from "../Components/EditItemModal.jsx";

const Cart = ({ open, onClose, items }) => {
  if (!open) return null;

  const handleClose = (e) => {
    if (e.target.id === "shoppingCart") {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      className="fixed top-10 bg-opacity-25 bg-blur-sm right-10 flex justify-center items-center shadow-xl z-10"
      id="shoppingCart"
    >
      <div className=" w-[300px] md:w-[400px]">
        <div className=" bg-white p-3  h-[500px] flex flex-col ">
          <div className="w-full flex justify-between">
            <h3 className="font-medium text-xl">Your Order</h3>
            <button
              className="text-red-500 text-xl font-bold"
              onClick={() => onClose()}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-between w-full h-full divide-y">
            <div className="mt-2 flex flex-col items-center">
              {items && items.length > 0 ? (
                items.map((item) => <CartItem cartItem={item} key={item.id} />)
              ) : (
                <span className="text-gray-500 place-self-center">
                  Add items to start your order
                </span>
              )}
            </div>
            {items && items.length > 0 ? <Checkout /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const notes = [
    cartItem.modifications,
    cartItem.sauces,
    cartItem.premiums,
  ].filter((arr) => arr != null);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between items-center my-2">
        <div className="flex flex-row space-x-2 justify-center">
          <span className="text-black">{cartItem.qty}</span>
          <div className="flex flex-col">
            <span className="text-black font-medium">{cartItem.item}</span>
            <span className="text-sm text-gray-400">
              {notes.map((note) => note.join(", "))}
            </span>
            <a
              className=" text-red-600  hover:text-black hover:cursor-pointer"
              onClick={() => removeFromCart(cartItem)}
            >
              Remove
            </a>
          </div>
        </div>
        <span className="text-black place-self-start">{`$${cartItem.price}`}</span>
      </div>
    </div>
  );
};

const Checkout = () => {
  const { cartTotal, subTotal, salesTax } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="space-y-2 justify-self-end">
        <div className="flex flex-row w-full justify-between">
          <span>Subtotal</span>
          <span>{`$${subTotal}`}</span>
        </div>
        <div className="flex flex-row w-full justify-between">
          <span>Tax</span>
          <span>{`$${parseFloat(salesTax).toFixed(2)}`}</span>
        </div>
        <button className="px-2 py-2 font-medium bg-red-600 text-white rounded-lg flex flex-row justify-between w-full">
          <span>Checkout</span>
          <span>{`$${cartTotal}`}</span>
        </button>
      </div>
    </>
  );
};
export default Cart;
