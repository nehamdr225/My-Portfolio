import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="avatar_holder">
          <div className="avatar"></div>
          <div className="avatar_title">
            <h2>Neha Manandhar</h2>
            <h3>UI/UX Designer and Developer</h3>
            <h4>
              My speciality is to design Mobile/Web applications to give you and
              your users the best experience.
            </h4>
            <div className="button_container">
            <button className="button btn1">Hire Me</button>
            <button className="button btn2">See my Work</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
