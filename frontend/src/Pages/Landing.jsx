import React from "react";
import truck3 from "../assets/truck3.jpeg";
import burgerz from "../assets/burgerz.jpeg";
import macBurger from "../assets/macBurger.jpeg";
import truck from "../assets/white_truck copy.jpeg";
import benedict from "../assets/benedictBurger.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Main />
      <Gallery />
      <Catering />
      <FollowTruck />
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
        <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-black">
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
    <section className="py-20">
      <div className="container mx-auto text-center">
        <div className="pb-16 ">
          <h1 className="text-4xl md:text-5xl text-black font-bold tracking-wider ">
            Welcome to Mo'Burgerz
          </h1>
        </div>
        <div className="grid grid-cols-1 items-start md:grid-cols-2">
          <div className="h-[65vh]">
            <img src={macBurger} className="m-0 rounded-lg" />
          </div>
          <div className="bg-red-600 text-white min-h-[75vh] flex flex-col justify-center rounded-lg">
            <div className="space-y-4">
              <h2 className="text-5xl mb-6 font-bold">Our Food</h2>
              <p>We offer a wide variety using the best ingredients</p>
              <button className="outline outline-red-600 bg-white text-black  px-6 py-3  rounded-lg hover:bg-black hover:text-white">
                <Link to={"/Menu"} className="font-medium">
                  View Menus
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Catering = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${burgerz})`,
      }}
      className="w-full bg-no-repeat bg-center bg-cover h-[60vh] flex flex-col items-center justify-center"
    >
      <div className="backdrop-opacity-90">
        <h2 className="text-5xl text-white font-bold tracking-wider mb-6">
          CATERING
        </h2>
        <p className="text-white my-4 text-xl">Let us Cater Your Next Event</p>
        <button className=" bg-red-600 text-white  px-6 py-3  rounded-lg hover:bg-black hover:text-white">
          <Link to={"/Menu"} className="font-medium">
            Inquire Now
          </Link>
        </button>
      </div>
    </section>
  );
};

const FollowTruck = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <div className="pb-16 ">
          <h1 className="text-4xl md:text-5xl text-black font-bold tracking-wider ">
            Follow The Truck
          </h1>
        </div>
        <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-5">
          <div className="bg-red-600 text-white min-h-[60vh] flex flex-col justify-center rounded-lg">
            <div className="space-y-4 flex flex-col items-center justify-center">
              <h2 className="text-5xl mb-6 font-bold">Our Food</h2>
              <p className="w-8/12 ">
                Check out our food truck schedules on social media to see
                exactly where you can taste what everyone's talking about!
              </p>
              <button className="outline outline-red-600 bg-white text-black  px-7 py-3  rounded-lg hover:bg-black hover:text-white">
                <Link to={"/Menu"} className="font-medium">
                  Lets Go
                </Link>
              </button>
            </div>
          </div>
          <div className="h-[75vh]">
            <img src={truck} className="m-0 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
