import React, { useState, useEffect } from "react";
import Footer from './../footer/Footer'


import axios from "axios";
import { FETCH } from "../../../Fetch";

function Cart({ cart, setCart }) {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div>
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
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
      <Footer />
    </div>
  );
}

export default Cart;
