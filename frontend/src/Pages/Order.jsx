import React, { useEffect, useState } from "react";
import axios from "axios";

const Order = () => {
  const [burgerz, setBurgerz] = useState();
  const [sides, setSides] = useState();
  const [drinks, setDrinks] = useState();
  const [subs, setSubs] = useState();

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await axios.get("/api/menu");

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
    const beverages = menuItems.filter((item) => item.category === "drinks");
    setDrinks(beverages);
    const sideDishes = menuItems.filter((item) => item.category === "Sides");
    setSides(sideDishes);
    const submarines = menuItems.filter((item) => item.category === "Subs");
    setSubs(submarines);
  };
  return (
    <div>
      <MenuSection name="Burgerz" items={burgerz} />
      <MenuSection name="Subs" items={subs} />
      <MenuSection name="Sides" items={sides} />
      <MenuSection name="Drinks" items={drinks} />
    </div>
  );
};

const MenuSection = ({ name, items }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        {items && items.length > 0
          ? items.map((item) => <Card key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};
const Card = ({ item }) => {
  return (
    <a>
      <div>
        <div>
          <h3>{item.name}</h3>
        </div>
        <div>
          <span>{item.price}</span>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  );
};
export default Order;
