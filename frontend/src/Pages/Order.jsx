import React, { useEffect, useState } from "react";
import EditItemModal from "../Components/EditItemModal";
import Customization from "../Components/Customization";
import useOrderMenu from "../Hooks/useOrderMenu.js";

const Order = () => {
  const { burgerz, subs, sides, drinks } = useOrderMenu();

  return (
    <div className="container mx-auto py-16 ">
      <div className="flex flex-col gap-10 items-center md:p-3 space-y-6">
        <MenuSection name="Burgerz" items={burgerz} sectionID="burgerz" />
        <MenuSection name="Subs" items={subs} sectionID="subs" />
        <MenuSection name="Sides" items={sides} sectionID="sides" />
        <MenuSection name="Drinks" items={drinks} sectionID="drinks" />
      </div>
    </div>
  );
};

const MenuSection = ({ name, items, sectionID }) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2" id={sectionID}>
      <h2 className="text-4xl font-bold mb-4 font-gluten -tracking-[2px] uppercase">
        {name}
      </h2>
      <div className="flex flex-col md:items-center justify-center md:grid md:grid-cols-2 gap-6 px-1">
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
      <a className=" p-2 w-96 md:w-7/12 " onClick={handleOpen}>
        <MenuItemDetails menuItem={item} key={item._id} />
      </a>
      <EditItemModal open={open} onClose={() => setOpen(false)}>
        <Customization menuItem={item} key={item._id} />
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
