import React from 'react';
import Insta from "../../assets/instagramBlack.png";
import Facebook from "../../assets/facebookBlack.png";
import Pinterest from "../../assets/pinterestBlack.png";
import "./Social.css";
function Social() {
    return (
        <div className="social">
            <div className="columnSocial">
          <a href="https://www.facebook.com/HeleneFT">
            <img
              className="columnSocialIcon"
              src={Facebook}
              alt="Réseau Social"
            />
          </a>
          <a href="https://www.instagram.com/helene_french_touch/?hl=fr">
            <img 
              className="columnSocialIcon"
              src={Insta}
              target="_blank"
              alt="Réseau Social"
            />
          </a>
          <a href="https://www.pinterest.fr/HeleneFT/_created/">
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