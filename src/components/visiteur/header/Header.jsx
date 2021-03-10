import React from "react";
// import logo from "../../../assets/entier noir-480px.png";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoSVG from "../../../assets/entier noir.svg";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={LogoSVG} alt="logo" />
      </Link>
      <div className="menu-items">
        <div className="items" id="menu">
          <Link className="router" to="/prestations">
            PRESTATIONS
          </Link>
          <Link className="router" to="/book">
            BOOK{" "}
          </Link>
          <Link className="router" to="/rendezvous">
            PRENDRE RDV{" "}
          </Link>
          <Link className="router" to="/about">
            CONTACT{" "}
          </Link>
          <Link className="router" to="/shop">
            SHOP{" "}
          </Link>
          <Link className="router" to="/nuancier">
            NUANCIER{" "}
          </Link>

          <a href="#" className="close">
            X
          </a>
        </div>
        <a href="#menu" className="burger">
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>{" "}
    </nav>
  );
}

export default Header;
