import React, { useState, useEffect } from "react";
import Footer from "./../footer/Footer";
import Header from "./../navBar/NavBar";
import "./Cart.css";

import axios from "axios";
import { FETCH } from "../../../Fetch";

function Cart({ cart, setCart }) {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.id === product.id).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  // const getCartReduce = () => {
  //   return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  // }

  return (
    <div>
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
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
      <div>
        <div className='infosPanier App'>
        <div>Total Prix: {getTotalSum()} €</div>
          {cart.length > 0 && (
            <button onClick={clearCart} className="btn DeletePanier">Vider le panier</button>
            
          )}
          
        </div>
        <div className="cartesShop App">
          {cart.map((product, idx) => (
            <div className="carteShop" key={idx}>
              <div className="imageShopLign">
                <img className="imageShop"  src={product.image} alt={product.name} />
              </div>
              <div className="shopDescription "> 
                <h3 className="nameShop">{product.name}</h3>
                <p className="descriptionProduct">{product.description} </p>
                <p className="priceShop">{product.price} €</p>
                <div className=" RemoveBtn">
              <input
              className="input"
                value={product.quantity}
                onChange={(e) => setQuantity(product, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(product)} className="btn suppBtn">Supprimer</button>
            </div>

            </div>
            </div>
          ))}
        </div>

        
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
