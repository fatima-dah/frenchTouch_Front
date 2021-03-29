import React from 'react';
import Insta from "../../assets/insta.png";
import Facebook from "../../assets/facebook.png";
import Pinterest from "../../assets/pinterest.png";
import "./Social.css";

function Social() {
    return (
        <div className="social">
            <div className="columnSocial">
          <a href="https://www.facebook.com">
            <img
              className="columnSocialIcon"
              src={Facebook}
              alt="Réseau Social"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              className="columnSocialIcon"
              src={Insta}
              target="_blank"
              alt="Réseau Social"
            />
          </a>
          <a href="https://www.pinterest.fr">
            <img
              className="columnSocialIcon"
              src={Pinterest}
              alt="Réseau Social"
            />
          </a>
        </div>
        </div>
    )
}

export default Social
