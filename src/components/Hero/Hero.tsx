import React from "react";
import "./Hero.css";
import "../Button/button.tsx"
import Button from "../Button/button";
import NavBar from "../NavBar/NavBar";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <NavBar/>
        <div className="avatar_holder">
          <div className="avatar"></div>
          <div className="avatar_title">
            <h2>Neha Manandhar</h2>
            <h3>UI/UX Designer and Developer</h3>
            <h4>
              My speciality is to design Mobile/Web applications to give you and
              your users the best experience.
            </h4>
            <Button/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
