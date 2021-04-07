import React, { useState, useEffect } from "react";
import "./Shop.css";
import Cart from "./Cart";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

const PAGE_CART = 'Cart';

function Shops() {
  const [product, setProduct] = useState([]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_CART);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
  }, []);
  
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    console.log(cart)
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
      console.log(itemInCart);
    }
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <div className="">

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
      <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({getCartTotal()})</button>

      <div className="cartesService">

        {product.map((product, idx) => (
          <div className="carteService" key={idx}>
            <div className="imageServiceLign">
              <img
                className="imageService"
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="servicePresta">
              <h3 className="nameService">{product.name}</h3>
              <p className="descriptionService">{product.description} </p>
              <h4 className="priceService">{product.price}€</h4>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>

          </div>

        ))}

      </div>

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default Shops;
