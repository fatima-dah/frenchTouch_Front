import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Gift.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation() {
  const [giftPresentation, setGiftPrestentation] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/giftPresentation`).then((res) => setGiftPrestentation(res.data));
  }, []);
  return (
    <div className="gift">
      <h2 className="titleGift">Cheque cadeaux</h2>

      <Link className="router" to="/Gifts">
        {" "}
        <div className="link">
          <div className="cartesGift">
            {giftPresentation.map((gift) => (
              <div className="containerGift">
                <img className="pictureGift" src={gift.imagePresentation} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="LignGift">Un chèque cadeau à offrir ?</div>

      </Link>
    </div>
  );
}

export default Prestation;
