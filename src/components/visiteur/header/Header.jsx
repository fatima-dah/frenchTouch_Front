import React from "react";
import whiteLogo from "../../../assets/entier couleurs-480px.jpg";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="fullHeader">
      <div className="LinksBox">
        <ul className="Links">
          <Link className="router" to ="/prestations" ><li className="Link">PRESTATIONS</li></Link>
          <Link className="router" to ="/rendezvous"> <li className="Link">RENDEZ-VOUS </li> </Link>
          <Link className="router" to ="/book">  <li className="Link">BOOK</li> </Link>
          <Link className="router" to ="/">   <img className="logo" alt ="logo French Touch" src={whiteLogo} /> </Link>
          <Link className="router" to ="/shop">  <li className="Link"> SHOP</li></Link>
          <Link className="router" to ="/nuancier"> <li className="Link">NUANCIER</li></Link>
          <Link className="router" to ="/apropos"> <li className="Link">A PROPOS</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
