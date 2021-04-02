import React, { useState, useEffect } from "react";

function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    console.log("salut");

    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const getCartTotal = () => {
    console.log("ok");
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
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
    <div>
      <h1>Panier</h1>

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
    </div>
  );
}

export default Cart;
