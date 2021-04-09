import React, { useState, useEffect } from "react";
import "./Shop.css";
import Cart from "../panier/Cart";
import axios from "axios";
import { Link } from "react-router-dom";
import { FETCH } from "./../../../Fetch";

const Shops = (props) => {
  

  const [product, setProduct] = useState([]);
  const [cart , setCart] = useState([]); 
  const [home, setHome] = useState([]);
  
  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/products`).then((res) => setProduct(res.data));
  }, []);

  useEffect(()=>{
    if(props.panier)
    setCart(props.panier);
    console.log("props.cart : " +props.panier);
    console.log("cart : " +cart);
    console.log("props : " +props);
  },[props]);
  
  useEffect(()=>{
    if(cart)
      props.setPanier(cart);
  },[cart]);
  // function getCartTotal(){
  //   console.log(props.panier);
  //   return props.panier.reduce((sum, { quantity }) => sum + quantity, 0);
  // };

  function addToCart(product){
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
      {/* <Link to="./panier">
        <button>Go to Cart ({getCartTotal()})</button>
      </Link> */}

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

      {/* <Cart cart={cart} setCart={setCart} /> */}
    </div>
  );
}

export default Shops;
