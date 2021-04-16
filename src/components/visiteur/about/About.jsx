import axios from "axios";
import { FETCH } from "./../../../Fetch";
import Header from './../navBar/NavBar'
import Footer from './../footer/Footer'

import "./About.css"
import React, { useState, useEffect } from "react";
import ContactEmail from './ContactEmail';
import AboutCart from './AboutCart';

function About( {cart} ) {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  return (
    <div>
       <Header 
              getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
              />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices">Contact</h1>
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
      </div>
      <div className="contactCart App">
      <div>
      <ContactEmail />
      </div>
      <div>
        <AboutCart />
      </div>
      </div>
      <Footer />

    </div>
  );
}

export default About;
