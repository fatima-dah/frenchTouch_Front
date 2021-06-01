import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./DeleteShop.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";
import { Button } from "reactstrap";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

function ShopDelete() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState({name: ""} );
  const [description, setDescription] = useState({description: ""} );
  const [price, setPrice] = useState({price: ""} );


  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("");

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
        .put(`${FETCH}/products/${id}`, {
          image: filePath,
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
        message: "Êtes-vous sûr de vouloir modifier la photo de ce produit ?",
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
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
  }, []);

  const handleReject = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: "Supprimer ce produit",
      message: "Êtes-vous sur de vouloir supprimer ce produit ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            window.history.go();
            axios.delete(`${FETCH}/products/${id}`).catch(function (erreur) {
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

  const handleSubmitName = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier le Nom ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/products/${id}`, name)
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

  const handleSubmitDescription = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier le Description ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/products/${id}`, description)
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

  const handleSubmitPrice = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: "Êtes-vous sûr de vouloir modifier le prix ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .put(`${FETCH}/products/${id}`, price)
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

  return (
    <div>
      <h3 className="titleService">Supprimer un produit </h3>

      <div className="shopcart">
        <div className="cartesShop App ">
          {product.map((product, idx) => (
            <div className="carteShop " key={idx}>
              <div className="imageShopLign">
                <img
                  className="imageShop"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="shopDescription ">
                <h3 className="nameShop">{product.name}</h3>
                <p className="descriptionProduct">{product.description} </p>
                <p className="priceShop">{product.price} €</p>
                <button
                  className="btn btnPanierShop"
                  onClick={(e) => handleReject(e, product.id)}
                >
                  {" "}
                  Supprimer
                </button>
                <div className="ModifyShop">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls=""
                          id=""
                        >
                          <Typography>Modifier</Typography>
                        </AccordionSummary>

                        <AccordionDetails className="widthShop">
                          <div className="mb-2">
                            <form
                              onSubmit={function (e) {
                                e.preventDefault();
                                onSubmitPicture(product.id);
                              }}
                            >
                              <div className="custom-file mb-2 mt-2">
                              image :
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
                            <form
                            className="form-modify"
                            onSubmit={function (e) {
                              e.preventDefault();

                              handleSubmitName(product.id);
                            }}
                          >
                            <input
                             
                              type="text"
                              placeholder="Nom"
                              className="mb-2"
                              onChange={(e) =>
                                setName({
                                  name: e.target.value,
                                })
                              }
                            />
                            <button className="buttonModify">Ok</button>
                          </form>
                          <form
                            className="form-modify"
                            onSubmit={function (e) {
                              e.preventDefault();

                              handleSubmitDescription(product.id);
                            }}
                          >
                            <textarea
                               rows="4"
                               cols="32"
                              type="text"
                              placeholder="Description"
                              className="mb-2"
                              onChange={(e) =>
                                setDescription({
                                  description: e.target.value,
                                })
                              }
                            />
                            <button className="buttonModify">Ok</button>
                          </form>
                          <form
                            className="form-modify"
                            onSubmit={function (e) {
                              e.preventDefault();

                              handleSubmitPrice(product.id);
                            }}
                          >
                            <input
                              
                              type="text"
                              placeholder="prix"
                              className="mb-2"
                              onChange={(e) =>
                                setPrice({
                                  price: e.target.value,
                                })
                              }
                            />
                            <button className="buttonModify">Ok</button>
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
    </div>
  );
}

export default ShopDelete;
