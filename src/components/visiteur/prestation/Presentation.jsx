import React, { useState, useEffect } from "react";
import Header from './../navBar/NavBar'
import "./Presentation.css";
import axios from "axios";
import Footer from './../footer/Footer'
import { FETCH } from "./../../../Fetch";
import Prestation from './Prestation'
import Gift from './Gift'

function Presentation({cart} ) {
  const [servicePresentation, setServicePresentation] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios
      .get(`${FETCH}/services_presentation`)
      .then((res) => setServicePresentation(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${FETCH}/homes`)
      .then((res) => setHome(res.data));
  }, []);

  return (
    <div className="ServicePrestation">
      <Header 
              getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
              />
      <div>
      <div className="imageAboutServices">
      <div className="alignTitleService App">
         <h1 className="titleAcceuilServices">Prestations</h1>
       </div>
       {home.map((home) => (
         <div>
           <img src={home.picture_about} className="imageAbout" alt="image_acceuil" />
         </div>
       ))} 
      
       </div>
       
  
      </div>
      
      <div className="ServicePrestations">
        {servicePresentation.map((servicePresentation) => (
          <div className="PresentationStyle">
            <div className="imagePresentation">
              <img
                className="imagePresentationFrenchTouch"
                src={servicePresentation.image_service}
                alt=""
              />
            </div>
            <div className="vertical-line"></div>
            <div className="textPresentation">
              <h3 className="titlePresentation">
                {servicePresentation.title}{" "}
              </h3>
              <p className="descriptionPrestation">
                {servicePresentation.description}
              </p>
            </div>
          </div>
        ))}
        </div>
        <Prestation />
        <Gift />
        <Footer />
      </div>
  );
}

export default Presentation;
