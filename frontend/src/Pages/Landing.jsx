import React from 'react';
import truckImage from '../assets/white_truck.jpeg';

const Landing = () => {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center">
      <img src={truckImage} className="block w-[700px] h-auto" />
      <p className="leading-9 text-2xl mt-9 w-5/6 font-sm tracking-tight    p-4">
        Mo'Burgerz DC is bringing Washington, DC mo' and mo' burgers to sink
        their teeth into. Yes, you probably could've guessed as much. What you
        might not guess, however, is that Mo'Burgerz DC is committed to that
        bigger, beefier burger form, serving up halal meats loaded with hearty
        toppings for your enjoyment. At Mo'Burgerz DC, you've got a whole lot of
        delicious options to choose from. Choose their Sloppy Mo', and you're
        getting an all beef patty fused with a cheesesteak, loaded with shredded
        beef, American and provolone cheese, and their signature Mo'Sauce. Or go
        with the U.F.Mo' for an out of this world delicious experience,
        featuring a stuffed egg, guacamole, jalapeno and sriracha to kick it up
        a notch. Not feelin' the beef? Not to worry. Mo'Burgerz also has a tasty
        handcrafted falafel burger, as well as crispy chicken tenders. So why
        wait? Find Mo'Burgerz DC in our nation's capital, or have 'em bring all
        the goodness to your next event. It's mo' satisfying than the rest of
        the food trucks, that's for sure.
      </p>
    </div>
  );
};

export default Landing;
