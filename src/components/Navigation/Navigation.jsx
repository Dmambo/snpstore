import React from "react";
import hamburger from "../../assets/hamburger.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="spinner">
        <span>S</span>
        <span>N</span>
        <span>P</span>
      </div>
      <div classNAme="hamburger">
        <img src={hamburger} alt="hamburger" />
      </div>
    </div>
  );
};

export default Navigation;
