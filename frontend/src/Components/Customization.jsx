import React, { useEffect, useState } from "react";

const Customization = ({ menuItem }) => {
  const [premiums, setPremiums] = useState();
  const [toppings, setToppings] = useState();
  const [sauces, setSauces] = useState();

  const includedIngredients = menuItem.description.split(/,\s*|, | & /);
  const subIngredients = includedIngredients.filter(
    (ingredient) => ingredient !== "Beef patty" && ingredient !== "cheesesteak"
  );
  useEffect(() => {
    filterIngredients(menuItem);
  }, [menuItem]);

  const filterIngredients = (menuItem) => {
    const modifications = menuItem.modifications;
    const premiums = modifications.filter(
      (modification) => modification.category === "premium"
    );
    setPremiums(premiums);
    const toppings = modifications.filter(
      (modification) => modification.category === "toppings"
    );
    setToppings(toppings);
    const sauces = modifications.filter(
      (modification) => modification.category === "sauces"
    );
    setSauces(sauces);
  };

  return (
    <div className="flex flex-col items-center overflow-auto space-y-2">
      <div>
        <h2 className="text-xl font-bold">{menuItem.name}</h2>
      </div>
      <div className="w-10/12 text-center text-gray-400">
        <p className="text-sm">{menuItem.description}</p>
      </div>
      <div className="divide-y p-2 flex flex-col gap-2 justify-center ">
        <CustomSection title="Modify" customizations={subIngredients} />
        <CustomSection title="Premiums" customizations={premiums} />
        <CustomSection title="Toppings" customizations={toppings} />
        <CustomSection title="Sauces" customizations={sauces} />
        <ControlButtons menuItem={menuItem} />
      </div>
    </div>
  );
};

const CustomSection = ({ title, customizations }) => {
  return (
    <div>
      <h3 className="text-lg mb-1 font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {customizations && customizations.length > 0
          ? customizations.map((customization) => (
              <OptionCard
                key={customization._id}
                option={
                  customization.name
                    ? customization.name
                    : `No ${customization}`
                }
              />
            ))
          : null}
      </div>
    </div>
  );
};

const OptionCard = ({ option }) => {
  return (
    <div className="shadow-md rounded p-3">
      <input type="checkbox" className="mr-2"></input>
      <span>{option}</span>
    </div>
  );
};

const ControlButtons = ({ menuItem }) => {
  const [itemCount, setItemCount] = useState(0);

  const decrement = () => setItemCount(itemCount - 1);

  const increment = () => setItemCount(itemCount + 1);
  return (
    <div className=" flex justify-between w-full mt-2">
      <div className="flex justify-between items-center p-2 w-4/12">
        <button className="text-lg" onClick={decrement}>
          -
        </button>
        <span className="bg-red-600 px-2 rounded text-white mx-3">
          {itemCount}
        </span>
        <button className="text-lg" onClick={increment}>
          +
        </button>
      </div>
      <div className="w-8/12">
        <button className="bg-red-600 font-semibold px-3 py-3  rounded-full text-white w-80 ">
          {menuItem.price}
        </button>
      </div>
    </div>
  );
};
export default Customization;
