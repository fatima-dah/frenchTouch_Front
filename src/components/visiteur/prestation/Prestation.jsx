import React, { useState, useEffect } from "react";

import "./Prestation.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Prestation() {
  const [service, setService] = useState([]);
  const [serviceFiltre, setServiceFiltre] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [reiniFilter, setReiniFilter] = useState([]);
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/services/with_category`).then((res) => setService(res.data));
    setServiceFiltre(service);
    console.log( serviceFiltre)   },[]);
  
  useEffect(() => {
    axios.get(`${FETCH}/services/with_category`).then((res) => setReiniFilter(res.data));
  }, []);
  useEffect(() => {
    axios.get(`${FETCH}/services/with_category`).then((res) => setService(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/categorys`).then((res) => setCategory(res.data));
  }, []);


  return (
    <div>
      <h2 className="titleService">Prestation</h2>
      <div className="filterCategory">
          <label className="styleCategory">
            <select
              className="filterButtonCategory"
              value={categoryFilter}
              onChange={ (e)  => { 
                setCategoryFilter(e.target.value);
                console.log(e.target.value);
                if(e.target.value!==""){
                setServiceFiltre(
                  service.filter((service) => service.cat_name === e.target.value)
                );}
                else{
                  e.preventDefault();
                  setServiceFiltre(service);
                }}}
            >
              <option value=""> Catégories</option>
             {category.map((category) => (
              <option value={category.name}>{category.name} </option>
              ))} 
            </select>
          </label>
       
      </div>

      <div className="cartesService">
        {serviceFiltre
        .map((service) => (
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
