import React from "react";
// import { Button } from "./Button";
import Button from "../Elements/Button/Button";
import "../style/Style.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="text-wrapper">JuBeli.inc</div>
      <div className="frame">
        <div className="home-category">
          Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Product
        </div>
        <div className="group">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="cart">
              <div className="ellipse" />
            </div>
          </div>
        </div>
        <div className="rectangle" />
      </div>
      <div className="div">
        <Button classname="bg-orange-600 w-full">Sign in</Button>
        <Button classname="bg-yellow-600 w-full">Login</Button>
      </div>
    </div>
  );
};
