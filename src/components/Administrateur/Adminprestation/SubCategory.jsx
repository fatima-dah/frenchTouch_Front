import axios from "axios";
import { useState, useEffect } from "react";
import { FETCH } from "../../../Fetch";

function SubCategory() {
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);

  const [categorys, setCategorys] = useState("");
  const [name, setName] = useState("");

  const [valid, setValid] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    axios.get(`${FETCH}/sub_categorys`).then((res) => setSubCategory(res.data));
  }, [subCategory]);

  useEffect(() => {
    axios.get(`${FETCH}/categorys`).then((res) => setCategory(res.data));
  }, [category]);

  const handleValid = () => {
    if (name === "" || categorys === "") {
      setValid("");
    } else {
      setValid("La catégorie à était ajoutée avec succès.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
      axios
        .post(
          `${FETCH}/sub_categorys`,
          {
            name: name,
            category_id: categorys,
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

  //   console.log(categorys)

  return (
    <div className="">
      <h3 className="titleService">Ajouter une sous categorie</h3>

      <form className="main-formAdd" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="colorLign"> Ajouter une sous category </legend>
          <div>
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
          <div>
            <label>
              category : <span className="styleRequired">*</span>
              <select
                className="form-input_category"
                value={categorys}
                onChange={(e) => setCategorys(e.target.value)}
                required
              >
                <option value="blank"></option>

                {category.map((category) => (
                  <option value={category.id}>{category.name} </option>
                ))}
              </select>
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
  );
}

export default SubCategory;
