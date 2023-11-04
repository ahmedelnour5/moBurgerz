import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import logo from "../assets/moBurgerzLogo.png";
import Cart from "./Cart.jsx";
import { ShoppingCartContext } from "../Context/ShoppingCartContext.jsx";
import Order from "../Pages/Order";

const Header = () => {
  return (
    <div className=" w-full mx-auto  shadow-md sticky top-0 z-20 bg-white">
      <div className="container mx-auto flex justify-between  p-5 items-center flex-wrap ">
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
  const [showNav, setShowNav] = useState(false);
  const handleOpen = () => setOpen(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      {/*Desktop Menu */}
      <div className="hidden md:flex justify-between items-center">
        <NavLinks />
        {location.pathname === "/Order" ? (
          <>
            <IconButton onClick={handleOpen}>
              <Badge badgeContent={getCartCount()} sx={{ color: "bg-red-600" }}>
                <ShoppingCartIcon className="text-black" />
              </Badge>
            </IconButton>
            <Cart
              open={open}
              onClose={() => setOpen(false)}
              items={cartItems}
            />
          </>
        ) : (
          <OrderOnlineBtn />
        )}
      </div>
      {/*Mobile Menu */}
      <div className="md:hidden">
        <IconButton onClick={toggleNav}>
          {showNav ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      {showNav && (
        <div className="flex flex-col w-full flex-wrap items-center justify-center space-y-2 min-h-[40vh]">
          <NavLinks />
          {location.pathname === "/Order" ? (
            <>
              <IconButton onClick={handleOpen}>
                <Badge
                  badgeContent={getCartCount()}
                  sx={{ color: "bg-red-600" }}
                >
                  <ShoppingCartIcon className="text-black" />
                </Badge>
              </IconButton>
              <Cart
                open={open}
                onClose={() => setOpen(false)}
                items={cartItems}
              />
            </>
          ) : (
            <OrderOnlineBtn />
          )}
        </div>
      )}
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <Link to={"/Menu"} className="mx-4 hover:border-b-2 border-black">
        Menu
      </Link>
      <Link to={"/About"} className="mx-4 hover:border-b-2 border-black">
        About
      </Link>
      <Link to={"/Contact"} className="mx-4 hover:border-b-2 border-black">
        Contact
      </Link>
    </>
  );
};

const OrderOnlineBtn = () => {
  return (
    <Link to={"/Order"}>
      <button className="bg-red-600 text-white font-semibold px-6 py-3  rounded-lg hover:bg-black">
        Order Online
      </button>
    </Link>
  );
};

export default Header;
