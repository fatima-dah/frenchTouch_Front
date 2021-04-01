import React, { useState, useEffect } from "react";

import "./Presentation.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Presentation() {
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
      <div>
      <div className="imageAboutServices">
      <div className="alignTitleService App">
         <p className="titleAcceuilServices">Prestations</p>
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
              <h1 className="titlePresentation">
                {servicePresentation.title}{" "}
              </h1>
              <p className="descriptionPrestation">
                {servicePresentation.description}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
  );
}

export default Presentation;
