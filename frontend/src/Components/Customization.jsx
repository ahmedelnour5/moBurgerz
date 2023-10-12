import React, { useEffect, useState } from "react";

const Customization = ({ menuItem }) => {
  const [premiums, setPremiums] = useState();
  const [toppings, setToppings] = useState();
  const [sauces, setSauces] = useState();

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
      <div className="divide-y p-2 flex flex-col gap-2 justify-center">
        <CustomSection title="Premiums" customizations={premiums} />
        <CustomSection title="Toppings" customizations={toppings} />
        <CustomSection title="Sauces" customizations={sauces} />
      </div>
      <div className="w-96 flex justify-between p-5">
        <span>+</span>
        <button className="bg-red-600 font-semibold px-10 py-3  rounded-lg">
          {menuItem.price}
        </button>
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
              <OptionCard key={customization._id} option={customization.name} />
            ))
          : null}
      </div>
    </div>
  );
};

const OptionCard = ({ option }) => {
  return (
    <div className="shadow-md rounded p-2">
      <input type="checkbox" className="mr-2"></input>
      <span>{option}</span>
    </div>
  );
};
export default Customization;
