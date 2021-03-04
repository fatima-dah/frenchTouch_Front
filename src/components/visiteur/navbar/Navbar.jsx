import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../../assets/entier noir-480px.png";

function Navbar() {
  return (
    <nav className="fullHeader">
        <img className="Logo" src={logo} alt="frenchtouchlogo"/>
        <div className="menu-items">
            <Link className="router" to ="/"> <p className="link"> ACCUEIL </p></Link>
            <Link className="router" to ="/prestations"> <p className="link">PRESTATIONS </p></Link>
            <Link className="router" to ="/book"> <p className="link">BOOK </p></Link> 
            <Link className="router" to ="/rendezvous"> <p className="link">PRENDRE RDV </p> </Link>
            <Link className="router" to ="/about"> <p className="link">CONTACT</p></Link>
        </div>
        
      
    </nav>
  );
}

export default Navbar;
