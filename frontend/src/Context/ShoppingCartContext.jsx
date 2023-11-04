import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const ShoppingCartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  cartTotal: 0,
  getCartCount: () => {},
  getCartTotal: () => {},
  removeFromCart: () => {},
  subTotal: 0,
  salesTax: 0,
});

const ShoppingCartProvider = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const storedItems = localStorage.getItem("cartItems");
  const [salesTax, setSalesTax] = useState(0);

  const getCartTotal = () => {
    let total = 0;
    const vaTaxRate = 4.3 / 100;
    for (const cartItem of cartItems) {
      total += cartItem.price;
    }
    const subTotal = total;
    const salesTax = parseFloat((subTotal * vaTaxRate).toFixed(2)); // Format salesTax to two decimal places
    const cartTotal = subTotal + salesTax;

    setSubTotal(subTotal);
    setSalesTax(salesTax);
    setCartTotal(cartTotal);
  };

  const addToCart = (item) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                qty: cartItem.qty + 1,
                price: (cartItem.qty + 1) * cartItem.price,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }

    getCartTotal();
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedItems);
    getCartTotal();
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getCartTotal();
  }, [cartItems]);

  const getCartCount = () => {
    return cartItems.length;
  };

  useEffect(() => {
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
    getCartTotal();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartTotal,
        getCartTotal,
        getCartCount,
        removeFromCart,
        subTotal,
        salesTax,
      }}
    >
      <Outlet />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
