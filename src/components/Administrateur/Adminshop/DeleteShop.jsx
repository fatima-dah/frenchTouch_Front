import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./DeleteShop.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function ShopDelete() {
  const [product, setProduct] = useState([]);

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

  return (
    <div>
      <h3 className="titleService">Supprimer un produit </h3>

      
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
                >  Supprimer
                </button>
            </div>
            
           
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopDelete;
