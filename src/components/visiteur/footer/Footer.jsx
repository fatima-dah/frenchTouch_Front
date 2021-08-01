import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../../assets/entier couleurs-480px.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "./../../../Fetch";
import "./Footer.css";
import Insta from "./../../../assets/instagramBlack.png";

import Facebook from "./../../../assets/facebookBlack.png";
import Pinterest from "./../../../assets/pinterestBlack.png";

function Footer() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/aboutCarts`).then((res) => setAbout(res.data));
  }, []);

  return (
    <div className="footer ">
      <div className="footerPages App">
        <div className="FlexFooter">
          <div className="LogoFlex">
            <img className="LogoFooter" src={Logo} alt="logo" />
          </div>
          <div className="infoFooter">
            <ul>
              {about.map((about) => (
                <div>
                  <li>
                    <span>Adresse : </span>
                    {about.adress}
                  </li>
                  <li>
                    <span>Code postal : </span>
                    {about.PostalCode}
                  </li>
                  <li>
                    <span>Tel : </span>
                    {about.phone}
                  </li>
                  <li>
                    <span>Email : </span>
                    {about.email}
                  </li>{" "}
                </div>
              ))}
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
