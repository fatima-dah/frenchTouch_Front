// import "./Reserve.css";
import { FETCH } from "./../../../Fetch";
// import nails from "../../../assets/nails.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "./Calendar";
import AdminReserve from "./Admin_reserve";

function Reserve() {
  const [home, setHome] = useState([]);



  useEffect(() => {
    axios
      .get(`${FETCH}/homes`)
      .then((res) => setHome(res.data));
  }, []);

 

  return (
    <div className="fullRdv">
          <div>
      <div className="imageAboutServices">
      <div className="alignTitleService App">
         <p className="titleAcceuilServices">Rendez-vous</p>
       </div>
       {home.map((home) => (
         <div>
           <img src={home.picture_about} className="imageAbout" alt="image_acceuil" />
         </div>
       ))} 
      
       </div>

      <Calendar />

      {/* <AdminReserve /> */}
     </div>
    </div>
  );
}

export default Reserve;
