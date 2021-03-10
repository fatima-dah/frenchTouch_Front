import "./Reserve.css";
import nails from "../../../assets/nails.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Reserve() {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    age: "",
    email: "",
    date: "",
    service: "",
  });

  const [getPrestation, setPrestationData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/services`)
      .then((res) => {
        setPrestationData(res.data);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/reservevisitor`, dataForm)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(dataForm);

  return (
    <div className="fullRdv">
      <div className="boxPicture">
        <div className="pictureAndform">
          <img src={nails} alt="placeholder" />
          <div className="rdvForm">
            <h4>PRENDRE RDV</h4>
            <form className="mainForm" onSubmit={""}>
              <label className="labelForm">
                Nom :
                <input
                  type="text"
                  name="lastname"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, lastname: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Prénom :
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, name: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Numéro de téléphone :
                <input
                  type="number"
                  name="phone"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, phone: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Âge :
                <input
                  type="number"
                  name="age"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, age: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Adresse électronique :
                <input
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, email: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Date de RDV :
                <input
                  type="date"
                  name="email"
                  min="2021-03-09"
                  onChange={(e) =>
                    setDataForm({ ...dataForm, date: e.target.value })
                  }
                  required
                />
              </label>
              <label className="labelForm">
                Presation choisie :
                <select 
                onChange={(e) => setDataForm({...dataForm, service: e.target.value})}>
                  <option className="options" value=""></option>
                  {getPrestation.map((res) => (
                    <option className="options" value={res.id}> {res.title}</option>
                  ))}
            
                </select>
              </label>
              <button type="submit"
              className="submit"
              value="Submit"
              onClick={handleSubmit}></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
