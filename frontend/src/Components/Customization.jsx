import React, { useState } from "react";
import useCustomizeItem from "../Hooks/useCustomizeItem.js";

const Customization = ({ menuItem }) => {
  const { subIngredients, premiums, toppings, sauces } = useCustomizeItem({
    menuItem,
  });

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedPremiums, setSelectedPremiums] = useState([]);
  const [selectedModifications, setSelectedModifications] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState([]);

  const handleSelectedToppings = (value, isChecked) => {
    if (isChecked) {
      setSelectedToppings([...selectedToppings, value]);
    } else {
      const newToppings = selectedToppings.filter(
        (topping) => topping !== value
      );
      setSelectedToppings(newToppings);
    }
  };

  const handleSelectedPremiums = (value, isChecked) => {
    if (isChecked) {
      setSelectedPremiums([...selectedPremiums, value]);
    } else {
      const newPremiums = selectedPremiums.filter(
        (premium) => premium !== value
      );
      setSelectedPremiums(newPremiums);
      console.log(newPremiums);
    }
  };

  const handleSelectedModifications = (value, isChecked) => {
    if (isChecked) {
      setSelectedModifications([...selectedModifications, value]);
    } else {
      const newModifications = selectedModifications.filter(
        (modification) => modification !== value
      );
      setSelectedModifications(newModifications);
    }
  };

  const handleSauces = (value, isChecked) => {
    if (isChecked) {
      setSelectedSauces([...selectedSauces, value]);
    } else {
      const newSauces = selectedSauces.filter((sauce) => sauce !== value);
      setSelectedSauces(newSauces);
    }
  };
  return (
    <div className="flex flex-col items-center overflow-auto space-y-2">
      <div>
        <h2 className="text-lg font-bold">{menuItem.name}</h2>
      </div>
      <div className="w-10/12 text-center text-gray-400">
        <p className="text-base">{menuItem.description}</p>
      </div>
      <div className="divide-y p-2 flex flex-col justify-center space-y-5">
        <CustomSection
          title="Modify"
          customizations={subIngredients}
          handleCustomization={handleSelectedModifications}
        />
        <CustomSection
          title="Premiums"
          customizations={premiums}
          handleCustomization={handleSelectedPremiums}
        />
        <CustomSection
          title="Toppings"
          customizations={toppings}
          handleCustomization={handleSelectedToppings}
        />
        <CustomSection
          title="Sauces"
          customizations={sauces}
          handleCustomization={handleSauces}
        />
        <div className="p-4 shadow-lg">
          <ControlButtons menuItem={menuItem} />
        </div>
      </div>
    </div>
  );
};

const CustomSection = ({ title, customizations, handleCustomization }) => {
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
                value={customization.name ? customization.name : customization}
                id={`${title}_${customization.name}`}
                handleCheckboxChange={handleCustomization}
              />
            ))
          : null}
      </div>
    </div>
  );
};

{
  /*Cards for selecting customization */
}

const OptionCard = ({ option, value, id, handleCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    handleCheckboxChange(value, newCheckedState);
  };

  return (
    <div className="shadow-md rounded p-3">
      <input
        id={id}
        type="checkbox"
        name={value}
        checked={isChecked}
        className="mr-2"
        onChange={handleCheckboxClick}
      ></input>
      <label htmlFor={id}>{option}</label>
    </div>
  );
};

{
  /*Buttons for increasing item qty, decreasing item qty, and adding item to cart */
}

const ControlButtons = ({ menuItem }) => {
  const [itemCount, setItemCount] = useState(1);
  const [price, setPrice] = useState(menuItem.price);

  const decrement = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
      setPrice(menuItem.price * (itemCount - 1));
    }
  };

  const increment = () => {
    setItemCount(itemCount + 1);
    setPrice(menuItem.price * (itemCount + 1));
  };

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
          {`$${price}`}
        </button>
      </div>
    </div>
  );
};
export default Customization;
