import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Cart from "./../panier/Cart";
import Products from "../shop/Products";


import "./NavBar.css";

import { useState } from "react";

import LogoSVG from "../../../assets/entier noir.svg";

function NavBar() {
  const [openFirst, setOpenFirst] = useState(false);
  const [cart, setCart] = useState([]);

  function getCartTotal() {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  }

  function showOpen() {
    if (openFirst === false) {
      setOpenFirst(true);
    } else {
      setOpenFirst(false);
    }
  }

  return (
    <div>
      <nav className="App">
        <Link to="/">
          <img className="logo" src={LogoSVG} alt="logo" />
        </Link>
        <div className="menu-items">
          <div>
            <div className="items" id="menu" onClick={showOpen}>
              <Link className="router" to="/prestations">
                PRESTATIONS
              </Link>

              <Link className="router" to="/book">
                BOOK{" "}
              </Link>
              <Link className="router" to="/rendezvous">
                PRENDRE RDV{" "}
              </Link>
              <Link className="router" to="/about">
                CONTACT{" "}
              </Link>
              <Link className="router" to="/product">
                PRODUIT
              </Link>
              <Link className="router" to="/nuancier">
                NUANCIER{" "}
              </Link>
              <Link className="router" to="/login">
                LOGIN
              </Link>
              <Link className="router" to="/cart">
                PANIER ({getCartTotal()})
              </Link>

              <a href="#" className="close">
                ✕
              </a>
            </div>
          </div>

          <a href="#menu" className="burger" onClick={showOpen}>
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>{" "}
      </nav>
      <Switch>
        <Route path="/product" component={Products}>
          <Products cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart" component={Cart}>
          {" "}
          <Cart cart={cart} setCart={setCart} />
        </Route>
      </Switch>

    </div>
  );
}

export default NavBar;
