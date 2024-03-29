import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [burgerz, setBurgerz] = useState();
  const [sides, setSides] = useState();
  const [drinks, setDrinks] = useState();
  const [subs, setSubs] = useState();

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await axios.get(
          "https://mo-burgerz.vercel.app/api/menu"
        );

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
    <div className="container-sm flex flex-col  mx-auto px-3 overflow-x-hidden">
      <MenuCategory name="Burgerz" items={burgerz} />
      <MenuCategory name="Subs" items={subs} />
      <MenuCategory name="Sides" items={sides} />
      <MenuCategory name="Drinks" items={drinks} />
    </div>
  );
};

const MenuCategory = ({ name, items }) => {
  return (
    <div className="flex flex-col items-center  border-double border-8 border-red-600 my-7 relative">
      <div className=" w-full text-center p-2 even:bg-white even:text-black odd:bg-red-600 odd:text-white">
        <h2 className="text-4xl font-bold border-b-red-600 font-gluten uppercase -tracking-[2px]">
          {name}
        </h2>
      </div>
      <div className="p-3">
        {items && items.length > 0
          ? items.map((item) => <MenuItem key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center my-5 text-center">
      <p className="text-2xl font-medium mb-0.5">{item.name}</p>
      <p className=" text-base  w-3/5  lg:w-10/12 text-zinc-700 font-sm ">
        {item.description}
      </p>
    </div>
  );
};

export default Menu;
