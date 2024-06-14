import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { assets } from "../../assets/assets.js";

function Home() {
  return (
    <div className="home-main">
      <div className="home-image">
        {/* <img src={assets.hero_background} alt="" />
        <img src={assets.hero_forground} alt="" /> */}
      </div>
      <Navbar />
      <div className="home-hero-content">
        <h1>Introduce Your Product </h1>
        <h1>Quickly & Effectively</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div>
          <button className="home-hero-btnPu">Purchase UI Kit</button>
          <button className="home-hero-btnLearn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
