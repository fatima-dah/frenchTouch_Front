import React, { useState, useEffect } from "react";

import "./Prestation.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation() {
  const [service, setService] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [reiniFilter, setReiniFilter] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/services`).then((res) => setService(res.data));
  }, []);
  useEffect(() => {
    axios.get(`${FETCH}/services`).then((res) => setReiniFilter(res.data));
  }, []);

  function doFilter(event) {
    event.preventDefault();

    if (categoryFilter !== "") {
      setService(
        service.filter((service) => service.category === categoryFilter)
      );
    } else {
      alert("R");
    }
  }

  function reinitialise() {
    setService(reiniFilter);
  }

  return (
    <div>
      <h2 className="titleService">Prestation</h2>
      <div className="filterCategory">
          <label className="styleCategory">
            <select
              className="filterButtonCategory"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value=""> Catégories</option>
              <option value="Main">Main</option>
              <option value="Pied">Pied</option>
            </select>
          </label>
        <div className="filterButtons">
          <button className="filterButton" onClick={doFilter}>Rechercher</button>
          <button className="filterButton" onClick={reinitialise}>Réinitialiser</button>
        </div>
      </div>

      <div className="cartesService">
        {service.map((service) => (
          <div className="carteService">
            <img className="imageService" src={service.image} alt="" />{" "}
            <div className="servicePresta">
              <p className="nameService">{service.name} </p>
              <div className="descriptionService">{service.description} </div>
              <div className="timeService">Durée {service.duration} </div>
            </div>
            <div className="priceService">{service.price}€</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestation;
