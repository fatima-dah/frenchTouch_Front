import React from "react";
import { Link } from "react-router-dom";
import logoPanier from "./../../../assets/logoPanier.png"
import Insta from "./../../../assets/instagramBlack.png";
import cadena from "./../../../assets/cadna.png";

import Facebook from "./../../../assets/facebookBlack.png";
import Pinterest from "./../../../assets/pinterestBlack.png";


import "./NavBar.css";

import { useState } from "react";

import LogoSVG from "../../../assets/entier noir.svg";

function NavBar({ getCartReduce }) {
  const [openFirst, setOpenFirst] = useState(false);

  function showOpen() {
    if (openFirst === false) {
      setOpenFirst(true);
    } else {
      setOpenFirst(false);
    }
  }

  return (
    <div>
      <nav className="App">
        <Link to="/">
          <img className="logo" src={LogoSVG} alt="logo" />
        </Link>
        <div className="menu-items">

          <div className="items" id="menu" onClick={showOpen}>
            <Link className="router" to="/prestations">
              PRESTATIONS
            </Link>

            <Link className="router" to="/book">
              BOOK{" "}
            </Link>
            <Link className="router navRdv" to="/rendezvous">
              PRENDRE RDV{" "}
            </Link>
            <Link className="router" to="/about">
              CONTACT{" "}
            </Link>
            <Link className="router" to="/product">
              PRODUIT
            </Link>
            <Link className="router" to="/nuancier">
              NUANCIER{" "}
            </Link>
            <Link className="router" to="/cart">
              <img className="logoPanier" src={logoPanier} alt="logo" />
              {" "} {getCartReduce}

            </Link>
            <Link className="router" to="/login">
              <img
                className="cadenaAdmin"
                src={cadena}
                alt="cadena Admin"
              />
            </Link>
            <div className="socialNav">
              <a href="https://www.facebook.com/HeleneFT">
                <img
                  className="columnSocialIconFooter"
                  src={Facebook}
                  alt="Réseau Social"
                />
              </a>
              <a href="https://www.instagram.com/helene_french_touch/?hl=fr">
                <img
                  className="columnSocialIconFooter"
                  src={Insta}
                  target="_blank"
                  alt="Réseau Social"
                />
              </a>
              <a href="https://www.pinterest.fr/HeleneFT/_created/">
                <img
                  className="columnSocialIconFooter"
                  src={Pinterest}
                  alt="Réseau Social"
                />
              </a>
            </div>

            <a href="#" className="close">
              ✕
            </a>
          </div>
          <a href="#menu" className="burger" onClick={showOpen}>
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>{" "}
      </nav>
    </div>
  );
}

export default NavBar;
