import React, { useState, useEffect } from "react";
import Header from './../navBar/NavBar'

import "./Shop.css";
import axios from "axios";
import Footer from "./../footer/Footer";
import { FETCH } from "../../../Fetch";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  // const getCartReduce = () => {
  //   return cart.reduce(
  //     (sum, { quantity }) => sum + quantity,
  //     0
  //   );
  // };

  return (
    <div className="">
      <Header getCartReduce={cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    )}   />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices">Produits</h1>
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

      <div className="cartesService">
        {products.map((product, idx) => (
          <div className="carteService" key={idx}>
            <div className="imageServiceLign">
              <img
                className="imageService"
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="servicePresta">
              <div>
                <h3 className="nameService">{product.name}</h3>
                <p className="descriptionService">{product.description} </p>
              </div>
              <div>
                <h4 className="priceService">{product.price}€</h4>
              </div>{" "}
            </div>

            <button
              className="btnPanierShop"
              onClick={() => addToCart(product)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
