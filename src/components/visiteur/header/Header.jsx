import React from "react";
import whiteLogo from "../../../assets/entier couleurs-480px.jpg";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <div className="fullHeader">
     
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
    
  );
}

export default Header;
