import axios from "axios";
import { FETCH } from "./../../../Fetch";
import "./About.css"
import React, { useState, useEffect } from "react";
import ContactEmail from './ContactEmail';
import AboutCart from './AboutCart';

function About() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default About;
