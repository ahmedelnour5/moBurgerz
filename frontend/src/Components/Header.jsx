import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/moBurgerzLogo.png";

const Header = () => {
  return (
    <div className=" w-full mx-auto  shadow-md">
      <div className="container mx-auto flex justify-between  p-5 items-center">
        <div className="w-32 h-auto">
          <img src={logo} />
        </div>
        <Nav />
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex font-sans text-black">
        <Link to={"/Menu"} className="mx-4 hover:border-b-2 border-black">
          Menu
        </Link>
        <Link to={"/About"} className="mx-4 hover:border-b-2 border-black">
          About
        </Link>
        <Link to={"/Contact"} className="mx-4 hover:border-b-2 border-black">
          Contact
        </Link>
      </ul>
      <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-black">
        <Link to={"/Order"}>Order Online</Link>
      </button>
    </div>
  );
};

export default Header;
