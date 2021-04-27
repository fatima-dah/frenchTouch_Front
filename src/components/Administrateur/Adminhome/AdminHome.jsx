import Nav from "./../NavBar/Nav";
import  { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "reactstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./AdminHome.css";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Home() {
  const history = useHistory();

  const [home, setHome] = useState([]);
  const [content_about, setContentAbout] = useState({ content_about: "" });
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");
  const [file2, setFile2] = useState("");
  const [fileName2, setFilename2] = useState("");


  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  const handleSubmitContentAbout = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier le texte ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/homes/${id}`, content_about)
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

  const onChange2 = (e) => {
    setFile2(e.target.files[0]);
    setFilename2(e.target.files[0].name);
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
        .put(`${FETCH}/homes/${id}`, {
          picture_home: filePath,
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

  const handleUpload2 = async (id) => {
    const formData = new FormData();
    formData.append("file", file2);

    try {
      const res = await axios.post(`${FETCH}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { filePath } = res.data;

      axios
        .put(`${FETCH}/homes/${id}`, {
          picture_about: filePath,
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

  const onSubmitPicture2 = (id) => {
    let idxDot = fileName2.lastIndexOf(".") + 1;
    let extFile = fileName2.substr(idxDot, fileName2.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      confirmAlert({
        title: "Confirmation",
        message: "Êtes-vous sûr de vouloir modifier la photo de presentation ?",
        buttons: [
          {
            label: "Oui",
            onClick: async () => {
              handleUpload2(id);
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
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Accueil</h1>
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
      <div ClassName="">
      {home.map((res) => (
        <div>
          <div className="">
            <div className="imagePresentation">
              <img
                className="imagePresentationFrenchTouch"
                src={res.picture_home}
                alt=""
              />
            </div>
            <div className="imagePresentation">
              <img
                className="imagePresentationFrenchTouch"
                src={res.picture_about}
                alt=""
              />
            </div>
            <div className="textPresentation">
              <p className="descriptionPrestation">{res.content_about}</p>
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

                      handleSubmitContentAbout(res.id);
                    }}
                  >
                    <textarea
                      rows="4"
                      cols="32"
                      required
                      type="text"
                      placeholder="Texte"
                      className="mb-2"
                      onChange={(e) =>
                        setContentAbout({
                          content_about: e.target.value,
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
                      image de couverture :
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
                  <form
                    onSubmit={function (e) {
                      e.preventDefault();
                      onSubmitPicture2(res.id);
                    }}
                  >
                    <div className="custom-file mb-2 mt-2">
                      image :
                      <input
                        required
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange2}
                        accept="image/*"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {fileName2}
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
    </div>
  );
}

export default Home;
