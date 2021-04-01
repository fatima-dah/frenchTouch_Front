import React, { useState, useEffect } from "react";
import './Palette.css'
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Palette() {
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
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <p className="titleAcceuilServices">Nuancier</p>
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
    </div>
  );
}

export default Palette;
