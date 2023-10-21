import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  cartTotal: 0,
  getCartTotal: () => {},
});

const ShoppingCartProvider = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartTotal = (cartItems) => {
    let total = 0;

    for (const item of cartItems) {
      total += item.price;
    }
    setCartTotal(total);
  };
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, cartTotal, getCartTotal }}
    >
      <Outlet />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
