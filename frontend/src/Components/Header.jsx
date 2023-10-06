import React from 'react';

const Header = () => {
  return (
    <div className=" w-full mx-auto flex justify-between  p-5 items-center shadow-md">
      <h1 className="text-2xl text-yellow-500 font-bold">mo'Burgerz</h1>
      <ul className="flex">
        <li className="mx-3">About</li>
        <li className="mx-3">Menu</li>
        <li className="mx-3">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
