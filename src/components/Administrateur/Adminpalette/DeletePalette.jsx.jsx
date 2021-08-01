import "./DeletePalette.css";
import React, { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";

import axios from "axios";
import { FETCH } from "../../../Fetch";

function Palette() {
  const [palette, setPalette] = useState([]);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    axios.get(`${FETCH}/palettes`).then((res) => setPalette(res.data));
  }, []);

  const handleReject = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: "Supprimer une Nuance",
      message: "Êtes-vous sur de vouloir supprimer cette Nuance ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .delete(`${FETCH}/palettes/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .catch(function (erreur) {
                console.log(erreur);
              });
              window.history.go();

          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

  return (
    <div>
      <div className="PaletteAdmin">
      <h3 className="titleService">Supprimer une nuance</h3>

        <div className="Palettes App">
          {palette.map((palette) => (
            <div className="margPalette">
              <div className="palette">
                <img
                  className="picturePalettes"
                  src={palette.picture}
                  alt="picturePaletteAdmin"
                />
              </div>
              <div className="BtnDelete">
                <div>{palette.name} </div>
                <div onClick={(e) => handleReject(e, palette.id)}>
                  <img
                    className="deleteBtn"
                    src="https://img.icons8.com/wired/64/fa314a/trash.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Palette;
