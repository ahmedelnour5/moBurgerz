import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  cartTotal: 0,
  getCartTotal: () => {},
  getCartCount: () => {},
});

const ShoppingCartProvider = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  {
    /*Calculate the total price for items in cart */
  }
  const getCartTotal = (cartItems) => {
    let total = 0;

    for (const item of cartItems) {
      total += item.price;
    }
    setCartTotal(total);
  };

  {
    /*Add items to the cart */
  }
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  {
    /*Calculate the number of items in cart */
  }
  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, cartTotal, getCartTotal, getCartCount }}
    >
      <Outlet />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
