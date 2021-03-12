// import "./Reserve.css";
// import { FETCH } from "./../../../Fetch";
// import nails from "../../../assets/nails.jpg";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Calendar from "./Calendar";
import AdminReserve from "./Admin_reserve";

function Reserve() {
  //   const [dataForm, setDataForm] = useState({
  //     firstname: "",
  //     lastname: "",
  //     phone: "",
  //     age: "",
  //     email: "",
  //     service_id: "",
  //   });

  //   const [getPrestationData, setPrestationData] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(`${FETCH}/services`)
  //       .then((res) => {
  //         setPrestationData(res.data);
  //       })
  //       .catch(function (erreur) {
  //         console.log(erreur);
  //       });
  //   }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post(`${FETCH}/reserve_visitor`, dataForm)
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };

  //   console.log(dataForm);

  return (
    <div className="fullRdv">
      {/* <div className="boxPicture">
        <div className="pictureAndform">
          <img className="imageRdv" src={nails} alt="placeholder" />
        </div>
        <div className="rdvForm">
          <h4 className="titleRdv">Prendre un rendez-vous !</h4>
          <form className="mainForm" onSubmit={handleSubmit}>
            <div className="formRdv">
              <label className="labelFormRDV">Nom : </label>

              <input
                type="text"
                name="lastname"
                onChange={(e) =>
                  setDataForm({ ...dataForm, lastname: e.target.value })
                }
                required
              />
            </div>
            <div className="formRdv">
              <label className="labelFormRDV">Prénom : </label>

              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setDataForm({ ...dataForm, firstname: e.target.value })
                }
                required
              />
            </div>
            <div className="formRdv">
              <label className="labelFormRDV">Numéro de téléphone : </label>

              <input
                type="number"
                name="phone"
                onChange={(e) =>
                  setDataForm({ ...dataForm, phone: e.target.value })
                }
                required
              />
            </div>
            <div className="formRdv">
              <label className="labelFormRDV">Âge : </label>

              <input
                type="number"
                name="age"
                onChange={(e) =>
                  setDataForm({ ...dataForm, age: e.target.value })
                }
                required
              />
            </div>
            <div className="formRdv">
              <label className="labelFormRDV">Adresse électronique : </label>

              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setDataForm({ ...dataForm, email: e.target.value })
                }
                required
              />
            </div>

            <div className="formRdv">
              <label className="labelFormRDV">
                Presation choisie et la durée :{" "}
              </label>

              <select
                onChange={(e) =>
                  setDataForm({ ...dataForm, service_id: e.target.value })
                }
              >
                <option className="options" value=""></option>
                {getPrestationData.map((res) => (
                  <option className="options" value={res.id}>
                    {" "}
                    {res.name}, durée: {res.duration}
                  </option>
                ))}
              </select>
            </div>
         
            <button type="submit" className="submitRDV" value="Submit">
              Prendre rendez-vous
            </button>
          </form>
        </div>
      </div> */}
      <Calendar />

      <AdminReserve />
    </div>
  );
}

export default Reserve;
