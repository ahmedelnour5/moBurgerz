import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import logo from "../assets/moBurgerzLogo.png";
import Cart from "./Cart.jsx";
import { ShoppingCartContext } from "../Context/ShoppingCartContext.jsx";

const Header = () => {
  return (
    <div className=" w-full mx-auto  shadow-md">
      <div className="container mx-auto flex justify-between  p-5 items-center">
        <Link to={"/"}>
          <div className="w-32 h-auto">
            <img src={logo} />
          </div>
        </Link>

        <Nav />
      </div>
    </div>
  );
};

const Nav = () => {
  const { cartItems, getCartCount } = useContext(ShoppingCartContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
      {location.pathname === "/Order" ? (
        <>
          <IconButton onClick={handleOpen}>
            <Badge badgeContent={getCartCount()} sx={{ color: "bg-red-600" }}>
              <ShoppingCartIcon className="text-black" />
            </Badge>
          </IconButton>
          <Cart open={open} onClose={() => setOpen(false)} items={cartItems} />
        </>
      ) : (
        <Link to={"/Order"}>
          <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-black">
            Order Online
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
