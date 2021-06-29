import Nav from './../NavBar/Nav'
import React, { useState, useEffect } from "react";
import FileUpload from "./../FileUpload/FileUpload";
import ShopDelete from './DeleteShop'

import { FETCH } from './../../../Fetch';
import axios from 'axios'


function Shop() {

  const [home, setHome] = useState([]);
  const [product, setProduct] = useState([]);
  const [statusBtn, setStatusBtn] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [valid, setValid] = useState("");


  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  const handleValid = () => {
    if (name === "" || description === "" || price === "") {
      setValid("");
    } else {
      setValid("Produit ajoutée avec succès.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
      axios
        .post(
          `${FETCH}/products`,
          {
            name: name,
            description: description,
            price: price,
            image: uploadedFile.filePath,
          },

        )
        .then(function (response) {
          window.history.go();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(uploadedFile)
    }
  };

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

  return (
    <div>
      <Nav />
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Produit</h1>
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
        <h3 className="titleService">Ajouter un produit</h3>
        <form className="main-formAdd" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="colorLign"> Produit </legend>
            <div >
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
            <div >
              <label>
                prix : <span className="styleRequired">*</span>
                <input
                  type="text"
                  name="title"
                  className="form-inputAdd"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
            </div>

            <div >
              <label>
                Description : <span className="styleRequired">*</span>
                <textarea
                  type="text"
                  name="description"
                  className="form-input_descriptionAdd"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="imageForm">
              <label>
                Image :
                <FileUpload
                  className="imageForms"
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
              className="submitPrestation"
              value="Submit"
              onClick={handleValid}
            >
              Envoyer
            </button>
            <span className="msgValid">{valid}</span>
          </fieldset>
        </form>
      </div>
      <ShopDelete />
    </div>
  );
}

export default Shop;
