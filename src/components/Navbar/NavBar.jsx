import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="px-0 py-5 flex justify-between items-center  ">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="" className="w-[150px] " />
        </Link>
        <ul className="flex list-none gap-5 text-[#49557e] text-[18px]   navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={`cursor-pointer ${menu === "Home" ? "active" : ""}`}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("Menu")}
            className={`cursor-pointer ${menu === "Menu" ? "active " : ""}`}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("Moblie-app")}
            className={`cursor-pointer ${
              menu === "Moblie-app" ? "active " : ""
            }`}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("Contact-us")}
            className={`cursor-pointer ${
              menu === "Contact-us" ? "active " : ""
            }`}
          >
            Contact us
          </a>
        </ul>
        <div className="flex items-center gap-10 ">
          <img src={assets.search_icon} alt="" className="cursor-pointer" />

          <div className="relative">
            <Link to="/cart">
              {" "}
              <img src={assets.basket_icon} className="" alt="" />
            </Link>
            <div
              className={`${
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-[10px] min-h-[10px] bg-[#e55c44] -top-2 -right-2 rounded-md"
              }`}
            ></div>
          </div>
          <button
            className="bg-transparent text-base text-[#47559e] border-[1px] border-[#47559e] px-8 py-3 rounded-full cursor-pointer hover:bg-[#fff4f2] transition duration-300 "
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
