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
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div >
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
    </div>
  );
}

export default Reserve;
