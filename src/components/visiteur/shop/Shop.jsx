import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from './Product';
import Cart from './Cart';
import axios from "axios";
import { FETCH } from "./../../../Fetch";

const PAGE_CART = 'cart';
const PAGE_PRODUCTS = "product";



function Shops() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_CART);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios
      .get(`${FETCH}/homes`)
      .then((res) => setHome(res.data));
  }, []);

  // const navigateTo = (nextPage) => {
  //   setPage(nextPage);
  // };

  // const getCartTotal = () => {
  //   return cart.reduce(
  //     (sum, { quantity }) => sum + quantity,
  //     0
  //   );
  // };
 

  return (
    <div className="">
       <div>
      <div className="imageAboutServices">
      <div className="alignTitleService App">
         <h1 className="titleAcceuilServices">Panier</h1>
       </div>
       {home.map((home) => (
         <div>
           <img src={home.picture_about} className="imageAbout" alt="image_acceuil" />
         </div>
       ))} 
      
       </div>
       
  
      </div>
      <header>
      

        {/* <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button> */}
        {/* <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({getCartTotal()})
        </button> */}
      </header>
      {page === PAGE_PRODUCTS && (
        <Product cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Shops;