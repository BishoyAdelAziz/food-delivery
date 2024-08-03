import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/Storecontext";
function Navbar({ setShowLogin, showLogin }) {
  const [Menu, setMenu] = useState("Contact-US");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="Navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("Home")}
          className={Menu === "Home" ? "Active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={Menu === "Menu" ? "Active" : ""}
        >
          Menu
        </a>
        <a
          href="#Appdownload"
          onClick={() => setMenu("Mobile App")}
          className={Menu === "Mobile App" ? "Active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#Footer"
          onClick={() => setMenu("Contact-US")}
          className={Menu === "Contact-US" ? "Active" : ""}
        >
          Contact US
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/Cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : "hide"}></div>
        </div>
        <button onClick={() => setShowLogin(!showLogin)}>Sign-In</button>
      </div>
    </div>
  );
}

export default Navbar;
