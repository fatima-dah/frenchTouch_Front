import "./AcceptComment.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../Fetch";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function AccetptComment() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios
      .get(`${FETCH}/notices/new-notices`)
      .then((res) => setNotice(res.data));
  });

  const handleAccept = (e, item) => {
    e.preventDefault();
    confirmAlert({
      title: "Accepter le commentaire",
      message: "Êtes-vous sur de vouloir accepter ce commentaire ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/notices/${item}`, {
                display: 1,
              })
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

  const handleReject = (e, item) => {
    e.preventDefault();
    confirmAlert({
      title: "Rejeter le commentaire",
      message: "Êtes-vous sur de vouloir rejeter ce commentaire ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .delete(`${FETCH}/notices/${item}`, {})
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
      <div>
        {notice.map((notice) => (
          <div className="">
            <div className="">
              <div>
                <p>Nom :{notice.name}</p>
                <p>Adresse : {notice.adress}</p>
                <p> Code postal : {notice.postCode} </p>
                <p>Email : {notice.email}</p>
                <p>Message : {notice.message}</p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => handleAccept(e, notice.id)}
                >
                  {" "}
                  Accepter
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={(e) => handleReject(e, notice.id)}
                >
                  Rejeter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccetptComment;
