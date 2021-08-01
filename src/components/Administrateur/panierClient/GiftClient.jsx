import React, { useState, useEffect } from "react";
import Header from "./../NavBar/Nav";
import moment from "moment";
import axios from "axios";
import "./PanierClient.css";
import { FETCH } from "../../../Fetch";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "reactstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function GiftClient() {
  const [gift, setGift] = useState([]);
  const [giftPresentation, setGiftPresentation] = useState([]);
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");

  useEffect(() => {
    axios.get(`${FETCH}/giftPresentation`).then((res) => setGiftPresentation(res.data));
  }, []);


  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleUpload = async (id) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${FETCH}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { filePath } = res.data;

      axios
        .put(`${FETCH}/giftPresentation/${id}`, {
          imagePresentation: filePath,
        })
        .catch(function (erreur) {
          console.log(erreur);
        });
      window.history.go();
    } catch (erreur) {
      if (erreur.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(erreur.response.data.msg);
      }
    }
  };
  const onSubmitPicture = (id) => {
    let idxDot = fileName.lastIndexOf(".") + 1;
    let extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      confirmAlert({
        title: "Confirmation",
        message:
          "Êtes-vous sûr de vouloir modifier la photo de presentation du chéque cadeaux ?",
        buttons: [
          {
            label: "Oui",
            onClick: async () => {
              handleUpload(id);
            },
          },
          {
            label: "Non",
          },
        ],
      });
    } else {
      confirmAlert({
        title: "Erreur",
        message: "Les extensions accéptés sont .jpg, .jpeg et .png",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    }
  };

  useEffect(() => {
    axios.get(`${FETCH}/gifts`).then((res) => setGift(res.data));
  }, []);
  const handleReject = (e, item) => {
    e.preventDefault();
    confirmAlert({
      title: "supprimer le chéque cadeaux client",
      message: "Êtes-vous sur de vouloir supprimer ce chéque cadeaux client  ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios.delete(`${FETCH}/gifts/${item}`, {});
            window.history
              .go()

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
      <h3 className="titleService">Achat chéque cadeaux client</h3>
      <div ClassName="">
        {giftPresentation.map((res) => (
          <div>
            <div className="App">
              <div className="AdminHomeImage">
                <div className="adminHomeMargin">
                  <div className="imagePresentation">
                    <div>
                      <img
                        className="imagePresentationFrenchTouchAdmin"
                        src={res.imagePresentation}
                        alt=""
                      />
                    </div>
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls=""
                          id=""
                        >
                          <Typography>Modifier</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <div className="mb-2">
                            <form
                              onSubmit={function (e) {
                                e.preventDefault();
                                onSubmitPicture(res.id);
                              }}
                            >
                              <div className="custom-file mb-2 mt-2">
                                <input
                                  required
                                  type="file"
                                  className="custom-file-input "
                                  id="customFile"
                                  onChange={onChange}
                                  accept="image/*"
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="customFile"
                                >
                                  {fileName}
                                </label>
                              </div>

                              <input
                                type="submit"
                                value="Télécharger"
                                className="btn-primary btn-block mt-2"
                              />
                            </form>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="App">
        {gift.map((gift) => (
          <div className="adminHomeMargin">
            <div className="textPresentation">
              <div className="commandeGiftFlex">
                <div className="commandeGiftFlexRight">
                  <p> Numéro de commande :{gift.numberCommande}</p>
                  <p> Nom/Prénom : {gift.lastnameFirstname} </p>
                  <p> Email : {gift.email}</p>
                  <p> Numéro de téléphone : {gift.phone}</p>
                  <p> prix : {gift.price} € </p>
                </div>
                <div className="commandeGiftFlexLeft">
                  <p>
                    {" "}
                    Nom/Prénom béneficiaire : {gift.lastnameFirstnameGift}{" "}
                  </p>
                  <p> type d'événement : {gift.event} </p>
                  <p> Email béneficiaire: {gift.emailGift} </p>
                  <p> Message : {gift.message}</p>
                </div>
              </div>
              <div className="bouttonCommentAdmin">
                <button
                  type="button"
                  className="btn btnComment"
                  onClick={(e) => handleReject(e, gift.id)}
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
export default GiftClient;
