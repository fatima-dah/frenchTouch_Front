import React, { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
        title: 'Supprimer une prestation',
        message: 'Êtes-vous sur de vouloir supprimer cette Prestation ?',
        buttons: [{
            label: 'Oui',
            onClick: () => {
              window.history.go();
                axios.delete(`${FETCH}/services/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).catch(function (erreur) {
                    console.log(erreur);
                });
            },
        },
        {
            label: 'Non',
        },
        ],
    });
};



  return (
    <div>
      <h3 className="titleService">Supprimer une Prestation </h3>

      <div className="cartesService">
        {service
        .map((service) => (
          <div className="carteService">
            <img className="imageService" src={service.image} alt="picture" />
            <div className="servicePresta">
              <p className="nameService">{service.name} </p>
              <div className="descriptionService">{service.description} </div>
              <div className="timeService">Durée {service.duration} </div>
            </div>
            <div className="priceService">{service.price}€</div>
            <div onClick={(e) => handleReject(e, service.id)}><img  className="rejectbtn" src="https://img.icons8.com/wired/64/fa314a/trash.png" alt="icon"/></div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestation;
