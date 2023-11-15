import React, { useState, useEffect } from "react";
import axios from "axios";

const useOrderMenu = () => {
  const [burgerz, setBurgerz] = useState();
  const [sides, setSides] = useState();
  const [drinks, setDrinks] = useState();
  const [subs, setSubs] = useState();

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await axios.get("/api/menu/Order");

        filterItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
  }, []);

  const filterItems = (menuItems) => {
    const burgers = menuItems.filter((item) => item.category === "Burgerz");
    setBurgerz(burgers);
    const beverages = menuItems.filter((item) => item.category === "Drinks");
    setDrinks(beverages);
    const sideDishes = menuItems.filter((item) => item.category === "Sides");
    setSides(sideDishes);
    const submarines = menuItems.filter((item) => item.category === "Subs");
    setSubs(submarines);
  };

  return { burgerz, sides, drinks, subs };
};

export default useOrderMenu;
