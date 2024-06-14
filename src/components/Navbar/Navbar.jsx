import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
// import { assets } from "../../assets/assets.js";

function Navbar() {
  return (
    <div className="nav-main">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <img src={assets.logo} alt="logo" />
      <button>Buy Now</button>
    </div>
  );
}

export default Navbar;
