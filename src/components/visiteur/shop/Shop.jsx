import React, { useState, useEffect } from "react";
import './Shop.css'
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Shop() {
  const [product, setProduct] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
  }, []);




    return (
      <div>
          <div className="imageAboutServices">
        <div className="alignTitleService App">
          <p className="titleAcceuilServices">Produits</p>
        </div>
        {home.map((home) => (
          <div>
            <img
              src={home.picture_about}
              className="imageAbout"
              alt="image_acceuil"
            />
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default Shop;
  