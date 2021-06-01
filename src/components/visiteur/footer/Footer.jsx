import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../../assets/entier couleurs-480px.png";
import "./Footer.css";
import Insta from "./../../../assets/instagramBlack.png";

import Facebook from "./../../../assets/facebookBlack.png";
import Pinterest from "./../../../assets/pinterestBlack.png";

function Footer() {
  return (
    <div className="footer ">
      <div className="footerPages App">
        <div className="FlexFooter">
          <div className="LogoFlex">
            <img className="LogoFooter" src={Logo} alt="logo" />
          </div>
          <div className="infoFooter">
            <ul>
              <li>
                <span>Adresse : </span>3 rue de la bustière
              </li>
              <li>
                <span>Code postal : </span>45 000
              </li>
              <li>
                <span>Tel : </span>06 30 21 21 86
              </li>
              <li>
                <span>Email : </span>Dahnini.fatim@hotmail.fr
              </li>{" "}
              
            </ul>
          </div>
          <div className="flexRouterFooter">

          <div className="LinkPageFooterLeft">
            <ul>
              <Link className="routerFooter" to="/">
                {" "}
                <li> Accueil </li>{" "}
              </Link>
              <Link className="routerFooter" to="/prestations">
                {" "}
                <li>Prestations</li>{" "}
              </Link>
              <Link className="routerFooter" to="/book">
                {" "}
                <li>Book</li>{" "}
              </Link>
              <Link className="routerFooter" to="/rendezvous">
                {" "}
                <li>Prendre RDV</li>{" "}
              </Link>
            </ul>
          </div>
          <div className="LinkPageFooterRight">
            <ul>
              <Link className="routerFooter" to="/about">
                {" "}
                <li>Contact</li>{" "}
              </Link>
              <Link className="routerFooter" to="/product">
                {" "}
                <li>Produit</li>{" "}
              </Link>
              <Link className="routerFooter" to="/nuancier">
                {" "}
                <li>Nuancier</li>{" "}
              </Link>
            </ul>
          </div>
          </div>
          <div className="socialFooter">
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
        </div>

      </div>
    </div>
  );
}

export default Footer;
