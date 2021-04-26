import React, { useState, useEffect } from "react";

import "./Prestation.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation( ) {
  const [service, setService] = useState([]);
  const [serviceFiltre, setServiceFiltre] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [reiniFilter, setReiniFilter] = useState([]);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${FETCH}/services/with_category`)
      .then((res) => setServiceFiltre(res.data));
    setServiceFiltre(service);
    console.log(serviceFiltre);
  }, []);

  useEffect(() => {
    axios
      .get(`${FETCH}/services/with_category`)
      .then((res) => setReiniFilter(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(`${FETCH}/services/with_category`)
      .then((res) => setService(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/categorys`).then((res) => setCategory(res.data));
  }, []);


  return (
    <div>
      <h2 className="titleService">Prestation  </h2>
      <div className="filterCategory">
        <label className="styleCategory">
          <div className="filterButtonCategory">
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                console.log(e.target.value);
                if (e.target.value !== "") {
                  setServiceFiltre(
                    service.filter(
                      (service) => service.cat_name === e.target.value
                    )
                  );
                } else {
                  setServiceFiltre(service);
                }
              }}
            >
              <option value=""> Catégories</option>
              {category.map((category) => (
                <option value={category.name}>{category.name} </option>
              ))}
            </select>
          </div>
        </label>
      </div>

      <div className="cartesService App">
        {serviceFiltre.map((service) => (
          <div className="carteService">
            <div className="imageServiceLign">
              <img className="imageService" src={service.image} alt="" />{" "}
            </div>
            <div className="servicePresta">
              <h3 className="nameService">{service.name} </h3>
              <p className="descriptionService">{service.description} </p>
              <div className="timePrice">
              <p className="timeService">Durée {service.duration} </p>
              <p className="priceService">{service.price}€</p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestation;
