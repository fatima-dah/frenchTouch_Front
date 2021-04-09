import React, { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../Fetch";

function Cart(props) {

  const [cart , setCart] = useState([]); 
  

  function getTotalSum(){
    console.log("salut");

    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  function clearCart(){
    setCart([]);
  };

  function setQuantity(product, amount){
    console.log("bou");

    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  function removeFromCart(productToRemove){
    setCart(cart.filter((product) => product !== productToRemove));
  };

  useEffect(()=>{
    if(props.panier)
    setCart(props.panier);
    console.log("props.cart : " +props.panier);
    console.log("cart : " +cart);
  },[]);

  return (
    <div>
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

    </div>
  );
}

export default Cart;
