import React from "react";
import truck3 from "../assets/truck3.jpeg";
import burgerz from "../assets/burgerz.jpeg";
import macBurger from "../assets/moDeo.jpeg";
import truck from "../assets/white_truck copy.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className=" md:mx-0 overflow-x-hidden">
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
      className="h-screen bg-no-repeat bg-cover bg-center md:w-full"
      style={{
        backgroundImage: `url(${truck3})`,
      }}
    >
      <div className="mx-auto flex lg:justify-center lg:items-center h-full backdrop-brightness-50 lg:px-32 z-5">
        <CopyText />
      </div>
    </section>
  );
};

const CopyText = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center">
      <h1 className="font-gluten font-bold text-4xl lg:text-7xl uppercase tracking-wide text-white">
        Mo'Burgerz
      </h1>
      <p className="text-xl md:text-3xl leading-8 font-normal text-white mb-4">
        Redefining the burger scene in the D.M.V.<br></br> Get Ready to Savor
        Every Bite!
      </p>
      <div className="flex space-x-5 justify-center">
        <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-black font-gluten uppercase">
          <Link to={"/Order"}>Order Online</Link>
        </button>

        <button className="outline outline-red-600 bg-white text-black  px-6 py-3  rounded-lg hover:bg-red-600 hover:text-white font-gluten uppercase">
          <Link to={"/Menu"}>View Menu</Link>
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="w-full py-12 md:py-16 md:px-14 overflow-x-hidden">
      <div className="flex flex-col items-center">
        {/* */}
        <div className="pb-16">
          <h2 className="font-gluten font-semibold text-3xl lg:text-5xl uppercase -tracking-[2px]">
            Welcome to Mo'Burgerz
          </h2>
        </div>
        <div className="flex flex-col h-full lg:grid gap-2  lg:gap-5 lg:grid-cols-2 lg:grid-rows-1 lg:place-content-start">
          <div className="relative min-h-[40vh] max-w-full">
            <img
              src={macBurger}
              className="m-0  w-[600px] rounded-lg lg:max-w-full  lg:h-auto  lg:w-full  "
            />
          </div>
          <div className="bg-red-600 text-white rounded-lg relative min-h-[40vh] lg:h-full max-h-full lg:max-w-full lg:w-full flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-gluten font-semibold text-3xl lg:text-5xl uppercase -tracking-[2px]">
                Our Food
              </h2>
              <p className="text-base  text-center">
                We offer a wide variety using the best ingredients
              </p>
              <button className="outline outline-red-600 bg-white text-black  px-6 py-3  rounded-lg hover:bg-black hover:text-white mt-4 font-gluten uppercase">
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
      className="w-full bg-no-repeat bg-center  bg-cover max-h-full h-[75vh] flex flex-col items-center justify-center"
    >
      <div className="backdrop-opacity-70 h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="font-gluten font-semibold text-3xl lg:text-6xl uppercase -tracking-[2px] mb-5 text-white">
            CATERING
          </h2>
          <p className="text-white my-4 text-xl font-medium">
            Let us Cater Your Next Event
          </p>
          <button className=" bg-red-600 text-white  px-6 py-3  rounded-lg hover:bg-black hover:text-white font-gluten uppercase">
            <Link to={"/Menu"} className="font-semibold">
              Inquire Now
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

const FollowTruck = () => {
  return (
    <section className="py-20 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center ">
        <div className="pb-16 text-center">
          <h2 className="font-gluten font-semibold text-3xl lg:text-5xl uppercase -tracking-2">
            Follow The Truck
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-5 text-center lg:px-10">
          <div className="bg-red-600 text-white  relative  min-h-[40vh] md:h-full max-h-full max-w-full w-full rounded-lg flex flex-col justify-center ">
            <div className="flex flex-col items-center justify-center h-full ">
              <h2 className="font-gluten font-semibold text-3xl lg:text-5xl uppercase -tracking-[2px] mb-5">
                Follow The Burgerz
              </h2>
              <p className=" font-normal leading-5 ">
                Check out our food truck schedules on social media to see
                exactly where you can taste what everyone's talking about!
              </p>
              <button className="outline outline-red-600 bg-white text-black  px-7 py-3  rounded-lg  hover:bg-black hover:text-white mt-4 font-gluten border-white uppercase">
                <Link to={"/Menu"} className="font-medium">
                  Lets Go
                </Link>
              </button>
            </div>
          </div>
          <div className="relative">
            {/*m-0 */}
            <img
              src={truck}
              className=" m-0 rounded-lg md:max-w-full h-auto object-cover md:w-full  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
