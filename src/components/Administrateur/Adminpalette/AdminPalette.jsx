import axios from "axios";
import { useState, useEffect } from "react";
import FileUpload from "./../FileUpload/FileUpload";
import { FETCH } from "../../../Fetch";
import "./AdminPalette.css";
import DeletePalette from './DeletePalette.jsx'
import NavBar from "./../NavBar/Nav";

function Prestations() {
  const [palette, setPalette] = useState([]);

  const [name, setName] = useState("");
  const [reference, setReference] = useState("");

  const [valid, setValid] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${FETCH}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      let message;
      if (err.response.status === 500) {
        message = "There was a problem with the server";
      } else {
        message = "Everything went fine";
      }
    }
  };

  useEffect(() => {
    axios.get(`${FETCH}/palettes`).then((res) => setPalette(res.data));
  }, [palette]);



  const handleValid = () => {
    if (name === "" || reference === "") {
      setValid("Des champs obligatoires manquent");
    } else {
      alert("La nuance a été ajoutée avec succès.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${FETCH}/palettes`,
        {
          name: name,
          ref_palette: reference,
          picture: uploadedFile.filePath,
        },
      )
      .then(function (response) {
        window.history.go();

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Palette</h1>
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
      <div className="PaletteAdmin">
        <div>
          <h3 className="titleService">Ajouter une nuance</h3>
          <div className="formServiceAdd">
            <form className="main-formAdd" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="colorLign"> Nuance </legend>
                <div className="form_ServiceAdd">
                  <label>
                    nom: <span className="styleRequired">*</span>
                    <input
                      type="text"
                      name="title"
                      className="form-inputAdd"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="form_ServiceAdd">
                  <label>
                    référence :
                    <input
                      type="text"
                      name="title"
                      className="form-inputAdd"
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div className="form_ServiceAdd">
                  <label>
                    Image : <span className="styleRequired">*</span>
                    <FileUpload
                      className="imageForm"
                      method={(e) => {
                        e.preventDefault();
                        handleUpload();
                      }}
                      onChange={(e) => {
                        onChange(e);
                      }}
                      fileName={uploadedFile.fileName}
                      filePath={uploadedFile.filePath}
                    />
                  </label>
                </div>
                <p>
                  <span className="styleRequired">*</span> champs obligatoires
                </p>
                <button
                  type="submit"
                  className="submitAdd"
                  value="Submit"
                  onClick={handleValid}
                >
                  Envoyer
                </button>
                <span className="msgValid">{valid}</span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <DeletePalette />
    </div>
  );
}

export default Prestations;
