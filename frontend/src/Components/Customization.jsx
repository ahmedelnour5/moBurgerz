import React, { useEffect, useState } from "react";

const Customization = ({ menuItem }) => {
  const [premiums, setPremiums] = useState();
  const [toppings, setToppings] = useState();
  const [sauces, setSauces] = useState();
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedPremiums, setSelectedPremiums] = useState([]);
  const [selectedModifications, setSelectedModifications] = useState([]);

  const includedIngredients = menuItem.description.split(/,\s*|, | & /);
  const subIngredients = includedIngredients.filter(
    (ingredient) =>
      ingredient !== "Beef patty" &&
      ingredient !== "cheese steak" &&
      ingredient !== "cheesesteak"
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
      <div className="divide-y p-2 flex flex-col justify-center space-y-5">
        <CustomSection title="Modify" customizations={subIngredients} />
        <CustomSection title="Premiums" customizations={premiums} />
        <CustomSection title="Toppings" customizations={toppings} />
        <CustomSection title="Sauces" customizations={sauces} />
        <div className="p-4 shadow-lg">
          <ControlButtons menuItem={menuItem} />
        </div>
      </div>
    </div>
  );
};

const CustomSection = ({ title, customizations }) => {
  return (
    <div>
      <h3 className="text-lg mb-1 font-semibold pt-2">{title}</h3>
      <div className="grid grid-cols-2 gap-5">
        {customizations && customizations.length > 0
          ? customizations.map((customization) => (
              <OptionCard
                key={customization._id}
                option={
                  customization.name
                    ? customization.name
                    : `No ${customization}`
                }
                value={title}
                id={customization.name}
              />
            ))
          : null}
      </div>
    </div>
  );
};

const OptionCard = ({ option, value, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    console.log(e.target);
  };

  return (
    <div className="shadow-md rounded p-3">
      <input
        id={id}
        type="checkbox"
        name={value}
        checked={isChecked}
        className="mr-2"
        onChange={handleCheckboxChange}
      ></input>
      <span>{option}</span>
    </div>
  );
};

const ControlButtons = ({ menuItem }) => {
  const [itemCount, setItemCount] = useState(0);

  const decrement = () => setItemCount(itemCount - 1);

  const increment = () => setItemCount(itemCount + 1);
  return (
    <div className=" flex justify-between w-full pt-2 px-3">
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
      <div className="">
        <button className="bg-red-600 font-semibold px-5 py-2  rounded-full text-white w-64">
          {menuItem.price}
        </button>
      </div>
    </div>
  );
};
export default Customization;
