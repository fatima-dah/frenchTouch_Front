import React, { useState, useEffect } from "react";
import axios from "axios";
// import Cart from "./Cart"
import { FETCH } from "../../../Fetch";


function Product() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);


  const [home, setHome] = useState([]);


 

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

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
      console.log(itemInCart);

    }
    setCart(newCart);
    console.log(newCart);

  };

  return (
    <>
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
        {/* <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>

        {page === PAGE_PRODUCTS && <Product cart={cart} setCart={setCart} />} */}
{/* <Cart cart={cart} setCart={setCart} /> */}
        {product.map((product, idx) => (
          <div className="carteService">
            <div className="imageServiceLign">
              <img
                className="imageService"
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="servicePresta" key={idx}>
              <h3 className="nameService">{product.name}</h3>
              <p className="descriptionService">{product.description} </p>
              <h4 className="priceService">{product.price}€</h4>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
