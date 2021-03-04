import React, { useState, useEffect } from "react";

import "./Presentation.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Presentation() {
  const [servicePresentation, setServicePresentation] = useState([]);

  useEffect(() => {
    axios
      .get(`${FETCH}/services_presentation`)
      .then((res) => setServicePresentation(res.data));
  }, []);

  return (
    <div>
       {servicePresentation.map((servicePresentation) =>(
      <div className="PresentationStyle">
        <div className="imagePresentation">
          <img className="imagePresentationFrenchTouch" src={servicePresentation.image_service}  alt="" />
        </div>
        <div className="vertical-line"></div>
        <div className="textPresentation">
          <h1 className="titlePresentation">{servicePresentation.title} </h1>
          <p className="descriptionPrestation">
          {servicePresentation.description} 
          </p>
        </div>
      </div>
      ))} 
    </div>
  );
}

export default Presentation;
