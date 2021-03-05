import React from "react";
import logo from "../../../assets/entier noir-480px.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      
      <img className="logo" src={logo} alt="logo" />
      <div class="menu-items">
        <div class="items" id="menu">
          <a href="#">Item1</a>
          <a href="#">Item2</a>
          <a href="#">Item3</a>
          <a href="#">Item4</a>
          <a href="#">Item5</a>
          <a href="#">Item6</a>
          <a href="#" class="close">
            X
          </a>
        </div>
        <a href="#menu" class="burger">
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>{" "}
    </nav>
  );
}

export default Header;
