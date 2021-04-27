import Nav from './../NavBar/Nav'
import AdminReserve from './Admin_reserve'
import React, { useState, useEffect } from "react";
import {FETCH} from './../../../Fetch';
import axios from 'axios'


function Reserve() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);



    return (
      <div>
        <Nav />
        <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Rendez-vous</h1>
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
        
        <AdminReserve />
      </div>
    );
  }
  
  export default Reserve;
  