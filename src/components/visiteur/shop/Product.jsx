import React, { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../Fetch";

const HOME_GARDEN = "home and garden";
const UTILITY = "utility";

export default function Product({ setCart, cart }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
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

  return (
    <>
      <h1>Products</h1>

      <div className="products">
        {product.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <p>{product.description} </p>
            <h4>${product.price}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
