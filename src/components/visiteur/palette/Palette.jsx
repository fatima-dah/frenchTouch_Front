import React, { useState, useEffect } from "react";
import "./Palette.css";
import Header from "./../navBar/NavBar";
import Footer from "./../footer/Footer";

import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Palette({ cart }) {
  const [palette, setPalette] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/palettes`).then((res) => setPalette(res.data));
  }, []);

  return (
    <div>
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Nuancier</h1>
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
      <div className="Palettes App">
        {palette.map((palette) => (
          <div className="margPalette">
            <div className="palette">
              <img
                className="picturePalettes"
                src={palette.picture}
                alt="picture palette"
              />
            </div>
            <div>
              <p>{palette.name} </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Palette;
