import "./Reserve.css";
import { FETCH } from "./../../../Fetch";
// import nails from "../../../assets/nails.jpg";
import { useEffect, useState } from "react";
import Header from './../navBar/NavBar'
import Footer from './../footer/Footer'

import axios from "axios";
import Calendar from "./Calendar";
import AdminReserve from "../../Administrateur/Adminreserve/Admin_reserve";

function Reserve({cart}) {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div >
       <Header className="NavRendezVous"
              getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
              />
      <div>
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
        <div>
          <Calendar />
        </div>

        {/* <AdminReserve /> */}
      </div>
      <Footer />

    </div>
  );
}

export default Reserve;
