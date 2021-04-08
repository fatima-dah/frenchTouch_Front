import axios from "axios";
import { useState, useEffect } from "react";
import FileUpload from "./../FileUpload/FileUpload";
import { FETCH } from "../../../Fetch";
import SubCategory from './SubCategory';
import DeleteService from './DeleteService'
import Presentations from "./Presentations"
import "./Prestation.css"
import NavBar from './../NavBar/Nav';

function Prestations() {
  const [service, setService] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [subCategorys, setSubCategorys] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [valid, setValid] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const token = localStorage.getItem("TOKEN");

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
    axios
      .get(`${FETCH}/services`)
      .then((res) => setService(res.data));
  }, [service]);


  useEffect(() => {
    axios.get(`${FETCH}/sub_categorys`).then((res) => setSubCategory(res.data));
  }, [subCategory]);


  const handleValid = () => {
    if (name === "" || description === "" || price === "" || duration === "") {
      setValid("");
    } else {
      setValid("Actualité ajoutée avec succès.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
      axios
        .post(
          `${FETCH}/services`,
          {
            name: name,
            description: description,
            price: price,
            duration: duration,
            sub_category_id: subCategorys,
            image: uploadedFile.filePath,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(uploadedFile)
    }
  };
  

  return (
    <div >
      <NavBar />
      <div>
    <Presentations />
    </div>
      <div className="AddformService">
      <SubCategory />

        <div>
            <h3 className="titleService">Ajouter une prestation</h3>
            <form className="main-formAdd" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="colorLign"> Prestation </legend>
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
                    durée :<span className="styleRequired">*</span>
                    <input
                      type="text"
                      name="author"
                      className="form-inputAdd"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
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
                <div>
                  <label>
                    sous category : <span className="styleRequired">*</span>
                    <select
                      
                      className="form-input_category"
                      value={subCategorys} 
                      onChange={(e) => setSubCategorys(e.target.value)}
                      required
                    >
                      <option value="blank"></option>

                      {subCategory.map((subCategory) => (
                        <option value={subCategory.id}>{subCategory.name} </option>
                      ))}
                    </select>
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
      </div>
      <DeleteService />
    </div>
  );
}

export default Prestations;
