import React, { useState, useEffect } from "react";
import Header from "./../NavBar/Nav";
import moment from "moment";
import axios from "axios";
import { FETCH } from "../../../Fetch";
import { confirmAlert } from "react-confirm-alert";
import GiftClient from './GiftClient';
import "react-confirm-alert/src/react-confirm-alert.css";

function PanierClient() {
  const [home, setHome] = useState([]);
  const [panier, setPanier] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/paniers`).then((res) => setPanier(res.data));
  }, []);
  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
  }, []);
  const handleReject = (e, item) => {
    e.preventDefault();
    confirmAlert({
      title: "supprimer le panier client",
      message: "Êtes-vous sur de vouloir supprimer ce panier client  ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            window.history.go()
            axios.delete(`${FETCH}/paniers/${item}`, {})

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
      <Header />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices">Panier</h1>
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
      </div>
      <h3 className="titleService">Achat produit client</h3>

      <div className="App">
        {panier.map((panier) => (
          <div className="adminHomeMargin">
            <div className="textPresentation">
              <div>
                <p> numéro de commande :{panier.numberCommande}</p>
                <p> Produit : {panier.name} </p>
                <p> Prénom : {panier.firstname}</p>
                <p> Nom : {panier.lastname}</p>
                <p> Email : {panier.email} </p>
                <p> Numéro de téléphone : {panier.phone}</p>
                <p> Quantité : {panier.quantity}</p>
                <p> prix : {panier.price} € </p>
              </div>
              <div className="bouttonCommentAdmin">
                <button
                  type="button"
                  className="btn btnComment"
                  onClick={(e) => handleReject(e, panier.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GiftClient />
    </div>
  );
}
export default PanierClient;
