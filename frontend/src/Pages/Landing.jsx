import React from "react";
import truck3 from "../assets/truck3.jpeg";
import burgerz from "../assets/burgerz.jpeg";
import macBurger from "../assets/macBurger.jpeg";
import moDeo from "../assets/moDeo.jpeg";
import benedict from "../assets/benedictBurger.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Main />
      <Gallery />
    </div>
  );
};

const Main = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-cover bg-center w-full"
      style={{
        backgroundImage: `url(${truck3})`,
      }}
    >
      <div className="flex justify-center items-center h-full backdrop-brightness-50 px-32 z-5">
        <CopyText />
      </div>
    </section>
  );
};

const CopyText = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-8xl font-bold text-white">Mo'Burgerz</h1>
      </div>
      <div className="my-6">
        <p className="text-3xl leading-8 font-normal text-white">
          Redefining the burger scene in the D.M.V.<br></br> Get Ready to Savor
          Every Bite!
        </p>
      </div>
      <div className="flex space-x-5">
        <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-red-700">
          <Link to={"/Order"}>Order Online</Link>
        </button>

        <button className="outline outline-red-600 bg-white text-black  px-6 py-3  rounded-lg hover:bg-red-600 hover:text-white">
          <Link to={"/Menu"}>View Menu</Link>
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src={macBurger} />
          </div>
          <div>
            <img src={burgerz} />
          </div>
          <div>
            <img src={benedict} />
          </div>
          <div>
            <img src={moDeo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
