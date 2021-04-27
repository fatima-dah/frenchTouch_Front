import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./DeleteService.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation() {
  const [service, setService] = useState([]);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    axios.get(`${FETCH}/services`).then((res) => setService(res.data));
  }, []);

  const handleReject = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: "Supprimer une prestation",
      message: "Êtes-vous sur de vouloir supprimer cette Prestation ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            window.history.go();
            axios
              .delete(`${FETCH}/services/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .catch(function (erreur) {
                console.log(erreur);
              });
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
      <h3 className="titleService">Supprimer une Prestation </h3>

      <div className="cartesService App">
        {service.map((service) => (
          <div className="carteService">
            <div className="imageServiceLign">
              <img className="imageService" src={service.image} alt="" />{" "}
            </div>
            <div className="servicePresta">
              <h3 className="nameService">{service.name} </h3>
              <p className="descriptionService">{service.description} </p>
              <div className="timePrice">
                <p className="timeService">Durée {service.duration} </p>
                <p >{service.price}€</p>
                <button
                  className="btn btnPanierShop"
                  onClick={(e) => handleReject(e, service.id)}
                >
                  {" "}
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestation;
