import React, { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../Fetch";

function Cart({ cart, setCart}) {
  

  const getTotalSum = () => {
    console.log("salut");

    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    console.log("bou");

    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
     

      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="carteService" key={idx}>
            <div className="imageServiceLign">
              <img
                className="imageService"
                src={product.image}
                alt={product.name}
              />
            </div>
            <h3 className="nameService">{product.name}</h3>
            <p className="descriptionService"> {product.description} </p>
            <h4 className="priceService">{product.price}€</h4>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>

    </>
  );
}

export default Cart;
