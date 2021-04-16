import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "reactstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from './../NavBar/Nav'
import "./AdminAbout.css"

import { FETCH } from "./../../../Fetch";

function About() {
  const [aboutCart, setAboutCart] = useState([]);
  const [address, setAdress] = useState({address : ""});
  const [PostalCode, setPostalCode] = useState({PostalCode : ""});
  const [city, setCity] = useState({city : ""});   
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");

  useEffect(() => {
    axios.get(`${FETCH}/aboutCarts`).then((res) => setAboutCart(res.data));
  }, []);

  const handleSubmitAdress = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier votre adresse ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/aboutCarts/${id}`, address)
              .catch(function (erreur) {
                console.log(erreur);
              });
            window.history.go();
          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

  const handleSubmitPostalCode = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier votre code postal ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/aboutCarts/${id}`, PostalCode)
              .catch(function (erreur) {
                console.log(erreur);
              });
            window.history.go();
          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

  const handleSubmitCity = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier votre Ville ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/aboutCarts/${id}`, city)
              .catch(function (erreur) {
                console.log(erreur);
              });
            window.history.go();
          },
        },
        {
          label: "Non",
        },
      ],
    });
  };

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
        .put(`${FETCH}/aboutCarts/${id}`, {
          imageCart: filePath,
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
        message: "Êtes-vous sûr de vouloir modifier la photo de presentation ?",
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

  return (
    <div>
         <Nav />

      <div className="Contacts App">
        {aboutCart.map((Cart) => (
          <div className="margContact">
            <div className="CartContact">
              <div>
                <h3 className="titleContact">Coordonnées</h3>
                <div  className="ContactAdress">
                  <h5>Adresse :</h5>
                  <p>{Cart.address} <br/>
                    {Cart.PostalCode} {Cart.city}
                  </p>
                </div>
                <div>
                  <h5>Carte :</h5>
                  <img
                    className="pictureContact"
                    src={Cart.imageCart}
                    alt="image cart"
                  />
                </div>
              </div>
            </div>
            <div>
            <div className="ModifyService">
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
                    className="form-modify"
                    onSubmit={function (e) {
                      e.preventDefault();
                      handleSubmitAdress(Cart.id);
                    }}
                  >
                    <input
                      required
                      type="text"
                      placeholder="Code postal"
                      className="mb-2"
                      onChange={(e) =>
                        setAdress({
                          address: e.target.value,
                        })
                      }
                    />
                    <Button className="button-card">Ok</Button>
                  </form>


                  <form
                    className="form-modify"
                    onSubmit={function (e) {
                      e.preventDefault();
                      handleSubmitPostalCode(Cart.id);
                    }}
                  >
                    <input
                      required
                      type="text"
                      placeholder="Code postal"
                      className="mb-2"
                      onChange={(e) =>
                        setPostalCode({
                          PostalCode: e.target.value,
                        })
                      }
                    />
                    <Button className="button-card">Ok</Button>
                  </form>

                  <form
                    className="form-modify"
                    onSubmit={function (e) {
                      e.preventDefault();
                      handleSubmitCity(Cart.id);
                    }}
                  >
                    <input
                      required
                      type="text"
                      placeholder="ville"
                      className="mb-2"
                      onChange={(e) =>
                        setCity({
                         city : e.target.value,
                        })
                      }
                    />
                    <Button className="button-card">Ok</Button>
                  </form>
           
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      onSubmitPicture(Cart.id);
                    }}
                  >
                    <div className="custom-file mb-2 mt-2">
                      Carte :
                      <input
                        required
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                        accept="image/*"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {fileName}
                      </label>
                    </div>

                    <input
                      type="submit"
                      value="Télécharger"
                      className="btn btn-primary btn-block mt-2"
                    />
                  </form>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

