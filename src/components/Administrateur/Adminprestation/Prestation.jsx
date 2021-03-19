import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH } from "../../../Fetch";
import FileUpload from "../../News/FileUpload/FileUpload";
import Nav from "./Nav";

const Prestation = () => {
  const [service, setService] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);
  const token = localStorage.getItem("TOKEN");

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const [uploadedFile, setUploadedFile] = useState({});

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
  console.log(uploadedFile);

  useEffect(() => {
    axios.get(`${FETCH}/services`).then((res) => setService(res.data));
  }, []);
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
    }
  };

  function verifEmpty() {
    if (name === "" || description === "" || price === "" || duration === "") {
      alert("Des champs obligatoires sont vides.");
    } else {
      setTexthidden("Votre prestation a bien été envoyer !");
    }
  }

  return (
    <div>
      <Nav />
      <div className="AssoFormAdd">
        <h1>Formulaire d'ajout de Prestation</h1>

        <form className="assoformAdd" onSubmit={handleSubmit}>
          <div className="LignStyleAsso"></div>

          <fieldset>
            <legend className="colorLign">Associations</legend>
            <label className="labelAssoAdd">
              <p>
                Nom <span>*</span> :
              </p>

              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <p>
                Ville <span>*</span> :
              </p>
            </label>
            <label className="labelAssoAdd">
              <p>
                description <span>*</span> :
              </p>
              <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <label className="labelAssoAdd">
              <p>
                Prix <span>*</span> :
              </p>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>
            <label className="labelAssoAdd">
              <p>durée :</p> <span>*</span>
              <input
                type="text"
                name="contact"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </label>

            <label>
              <p>image :</p> <span>*</span>
              <FileUpload
                method={(e) => {
                  e.preventDefault();
                  handleUpload();
                }}
                onChange={(e) => {
                  onChange(e);
                }}
                fileName={uploadedFile.fileName}
                filePath={uploadedFile.filePath}
              />{" "}
            </label>
          
            <div>
              <button className="submitAdd" type="submit" onClick={verifEmpty}>
                Envoyer
              </button>
            </div>
            <span className="msgValid">{textHidden}</span>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Prestation;
