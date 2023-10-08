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
    const beverages = menuItems.filter((item) => item.category === "Drinks");
    setDrinks(beverages);
    const sideDishes = menuItems.filter((item) => item.category === "Sides");
    setSides(sideDishes);
    const submarines = menuItems.filter((item) => item.category === "Subs");
    setSubs(submarines);
  };
  return (
    <div className="flex flex-col gap-10 items-center p-3">
      <MenuSection name="Burgerz" items={burgerz} />
      <MenuSection name="Subs" items={subs} />
      <MenuSection name="Sides" items={sides} />
      <MenuSection name="Drinks" items={drinks} />
    </div>
  );
};

const MenuSection = ({ name, items }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2">
      <h2 className="text-5xl font-bold mb-4">{name}</h2>
      <div className="grid grid-cols-2 gap-6 ">
        {items && items.length > 0
          ? items.map((item) => <Card key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};
const Card = ({ item }) => {
  return (
    <a className="w-7/12 ">
      <div className="bg-stone-50  p-6 shadow-lg hover:bg-stone-200 hover:scale-105 hover:ease-in-out">
        <div className="mb-2">
          <h3 className="text-xl font-semibold ">{item.name}</h3>
        </div>
        <div className="mb-2">
          <span className="text-lg "> ${item.price}</span>
        </div>
        {item.description && item.description != "" ? (
          <div>
            <p className="w-96  text-sm">{item.description}</p>
          </div>
        ) : null}
      </div>
    </a>
  );
};
export default Order;
