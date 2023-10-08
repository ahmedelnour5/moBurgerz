import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/moBurgerzLogo.png';

const Header = () => {
  return (
    <div className=" w-full mx-auto  shadow-md">
      <div className="container mx-auto flex justify-between  p-5 items-center">
        <div className="w-32 h-auto">
          <img src={logo} />
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex font-sans text-black">
            <Link to={'/Menu'} className="mx-4 hover:border-b-2 border-black">
              Menu
            </Link>
            <Link to={'/About'} className="mx-4 hover:border-b-2 border-black">
              About
            </Link>
            <Link
              to={'/Contact'}
              className="mx-4 hover:border-b-2 border-black"
            >
              Contact
            </Link>
            <Link to={'/Order'} className="mx-4"></Link>
          </ul>
          <button className="bg-yellow-400 text-white px-5 py-3 rounded ">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
