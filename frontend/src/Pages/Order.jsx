import React, { useEffect, useState } from "react";
import axios from "axios";
import EditItemModal from "../Components/EditItemModal";
import Customization from "../Components/Customization";

const Order = () => {
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
  return (
    <div className="flex flex-col gap-10 items-center p-3">
      <MenuSection name="Burgerz" items={burgerz} sectionID="burgerz" />
      <MenuSection name="Subs" items={subs} sectionID="subs" />
      <MenuSection name="Sides" items={sides} sectionID="sides" />
      <MenuSection name="Drinks" items={drinks} sectionID="drinks" />
    </div>
  );
};

const MenuSection = ({ name, items, sectionID }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2" id={sectionID}>
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <a className="w-7/12 " onClick={handleOpen}>
        <MenuItemDetails menuItem={item} />
      </a>
      <EditItemModal open={open} onClose={() => setOpen(false)}>
        <Customization menuItem={item} />
      </EditItemModal>
    </>
  );
};

const MenuItemDetails = ({ menuItem }) => {
  return (
    <div className="bg-white  p-6 shadow-lg hover:shadow-2xl hover:cursor-pointer rounded-xl">
      <div className="mb-2">
        <h3 className="text-xl font-semibold ">{menuItem.name}</h3>
      </div>
      <div className="mb-2">
        <span className="text-lg "> ${menuItem.price}</span>
      </div>
      {menuItem.description && menuItem.description != "" ? <div></div> : null}
    </div>
  );
};

export default Order;
