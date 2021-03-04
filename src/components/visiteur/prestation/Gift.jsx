import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "./Gift.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation() {
  const [gift, setGift] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/gifts`).then((res) => setGift(res.data));
  }, []);

  return (
    <div>
      <h2 className="titleGift">Cheque cadeaux</h2>
      <Link className="router" to ="/Gifts"> <p className="link"> 

      <div className="cartesGift">
        {gift.map((gift) => (
          <div className="containerGift">
            <img className="pictureGift" src={gift.picture} alt="" />
            <div className="textGift">{gift.title}</div>
          </div>
        ))}
      </div>
      <div className="LignGift">Un chèque cadeau à offrir ?</div>

      <div className="PriceGift">De 50,00€ à 1000,00€</div>
      </p></Link>
    </div>
  );
}

export default Prestation;
