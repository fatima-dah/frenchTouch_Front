import React, { useState, useEffect } from "react";
import "./AboutCart.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function AboutCart() {
  const [aboutCart, setAboutCart] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/aboutCarts`).then((res) => setAboutCart(res.data));
  }, []);
  return (
    <div>
      <div className="Contact ">
        {aboutCart.map((Cart) => (
          <div className="margContact">
            <div className="CartContact">
              <div>
                <h3 className="titleContact">Coordonnées</h3>
                <div  className="ContactAdress">
                  <h5>Adresse :</h5>
                  <p>{Cart.address} <br/>
                    {Cart.PostalCode} {Cart.city}
                  </p > 
                </div>
                <div>
                  <h5>Carte :</h5>
                  <img
                    className="pictureContact"
                    src={Cart.imageCart}
                    alt="image cart"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCart;
