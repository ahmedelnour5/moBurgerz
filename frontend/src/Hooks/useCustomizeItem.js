import React, { useState, useEffect } from "react";

const useCustomizeItem = ({ menuItem }) => {
  const [premiums, setPremiums] = useState();
  const [toppings, setToppings] = useState();
  const [sauces, setSauces] = useState();

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

  return { premiums, toppings, sauces, subIngredients };
};

export default useCustomizeItem;
