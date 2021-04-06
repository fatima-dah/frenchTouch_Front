import React, { useState, useEffect } from "react";
import './AboutCart.css'
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function AboutCart () {
    const [aboutCart, setAboutCart] = useState([]);

    useEffect(() => {
      axios.get(`${FETCH}/aboutCarts`).then((res) => setAboutCart(res.data));
    }, []);
    return(
        <div>
                <div className="Palettes App">
      {aboutCart.map((Cart) => (
        <div className="margPalette">
        <div className="palette">
            <div>
            <h3>Coordonnées</h3>
            <h5>Adresse:</h5>
            <p>{Cart.address} </p>
            <p>{Cart.PostalCode}{Cart.city}  </p>
            <h5>Carte :</h5>
          <img
            className="picturePalettes"
            src={Cart.imageCart}
            alt=""
          />
          </div>
          </div>
          <div>
        </div>
        </div>
      ))}
      </div>
        </div>
    )
} 

export default AboutCart;