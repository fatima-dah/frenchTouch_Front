import { useState, useEffect } from "react";
import axios from "axios";
import "./ContactAbout.css";
import { FETCH } from "./../../../Fetch";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function ContactAbout() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/abouts`).then((res) => setAbout(res.data));
  }, []);

  const handleDelete = (e, item) => {
    e.preventDefault();
    confirmAlert({
      title: "Rejeter le commentaire",
      message: "Êtes-vous sur de vouloir supprimer ce coontact ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            window.history.go();

            axios
              .delete(`${FETCH}/abouts/${item}`, {})
              .catch(function (erreur) {
                console.log(erreur);
              });
          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

  return (
    <div>
      <h2>Contact client</h2>
      <div className="App">
        {about.map((about) => (
          <div className="adminHomeMargin">
            <div className="textPresentation">
              <div>
                <p className=""> Prénom : {about.firstname} </p>
                <p className=""> Nom : {about.lastname} </p>
                <p className=""> Email : {about.email} </p>
                <p className="aboutAdminMsg">Message : {about.message} </p>
              </div>
              <div className="bouttonCommentAdmin">
                {" "}
                <button
                  type="button"
                  className="btn "
                  onClick={(e) => handleDelete(e, about.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ContactAbout;
