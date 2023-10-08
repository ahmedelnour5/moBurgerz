import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [items, setItems] = useState();
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
    <div className="flex flex-col items-center justify-between">
      <MenuCategory name="Burgerz" items={burgerz} />
      <MenuCategory name="Subs" items={subs} />
      <MenuCategory name="Sides" items={sides} />
      <MenuCategory name="Drinks" items={drinks} />
    </div>
  );
};

const MenuCategory = ({ name, items }) => {
  return (
    <div className="flex w-3/5 flex-col items-center  border-double border-8 border-red-600 my-5  divide-red-600">
      <div className=" w-full text-center odd:bg-red-600  even:bg-white">
        <h2 className="text-4xl font-bold text-red-600 odd:text-white px-4">
          {name}
        </h2>
      </div>
      <div className="p-4">
        {items && items.length > 0
          ? items.map((item) => <MenuItem key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center my-4 text-center">
      <h2 className="text-2xl font-medium">{item.name}</h2>
      <p className="w-4/5 text-slate-500 font-medium">{item.description}</p>
    </div>
  );
};

export default Menu;
