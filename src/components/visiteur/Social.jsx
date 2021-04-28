import React from 'react';
import Insta from "../../assets/instagramBlack.png";
import Facebook from "../../assets/facebookBlack.png";
import Pinterest from "../../assets/pinterestBlack.png";
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