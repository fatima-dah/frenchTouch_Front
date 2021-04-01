import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "reactstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Presentations.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Presentations() {
  const [servicePresentation, setServicePresentation] = useState([]);
  const [title, setTitle] = useState({ title: "" });
  const [description, setDescription] = useState({ description: "" });
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");

  useEffect(() => {
    axios
      .get(`${FETCH}/services_presentation`)
      .then((res) => setServicePresentation(res.data));
  }, []);

  const handleSubmitTitle = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier le title ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/services_presentation/${id}`, title)
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

  const handleSubmitDescription = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier la description ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/services_presentation/${id}`, description)
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
        .put(`${FETCH}/services_presentation/${id}`, {
          image_service: filePath,
        })
        .catch(function (erreur) {
          console.log(erreur);
        });
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
    <div ClassName="admin_presentation_service">

      {servicePresentation.map((res) => (
        <div>

          <div className="PresentationStyle">

            <div className="imagePresentation">
              <img
                className="imagePresentationFrenchTouch"
                src={res.image_service}
                alt=""
              />
            </div>
            <div className="vertical-line"></div>
            <div className="textPresentation">
              <h1 className="titlePresentation">{res.title} </h1>
              <p className="descriptionPrestation">{res.description}</p>
            </div>
          </div>
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
                      handleSubmitTitle(res.id);
                    }}
                  >
                    <input
                      required
                      type="text"
                      placeholder="title"
                      className="mb-2"
                      onChange={(e) =>
                        setTitle({
                          title: e.target.value,
                        })
                      }
                    />
                    <Button className="button-card">Ok</Button>
                  </form>
                  <form
                    className="form-modify"
                    onSubmit={function (e) {
                      e.preventDefault();

                      handleSubmitDescription(res.id);
                    }}
                  >
                    <textarea
                      rows="4"
                      cols="32"
                      required
                      type="text"
                      placeholder="Description"
                      className="mb-2"
                      onChange={(e) =>
                        setDescription({
                          description: e.target.value,
                        })
                      }
                    />
                    <Button className="button-card">Ok</Button>
                  </form>
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      onSubmitPicture(res.id);
                    }}
                  >
                    <div className="custom-file mb-2 mt-2">
                      image :
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
      ))}
    </div>
  );
}

export default Presentations;
