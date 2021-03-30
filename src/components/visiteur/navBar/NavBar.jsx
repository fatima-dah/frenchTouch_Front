import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

import LogoSVG from "../../../assets/entier noir.svg";

function NavBar() {
  const [openFirst, setOpenFirst] = useState(false);

  function showOpen() {
    if (openFirst === false) {
      setOpenFirst(true);
    } else {
      setOpenFirst(false);
    }
  }

  return (
    <div >
      <nav className="App">
        <Link to="/">
          <img className="logo" src={LogoSVG} alt="logo" />
        </Link>
        <div className="menu-items">

          {openFirst === true ? (
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
                <Link className="router" to="/shop">
                  SHOP{" "}
                </Link>
                <Link className="router" to="/nuancier">
                  NUANCIER{" "}
                </Link>
                <Link className="router" to="/login">
                  LOGIN
                </Link>

                <a href="#" className="close">
                  X
                </a>
              </div>
            </div>
          ) : (
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
              <Link className="router" to="/shop">
                SHOP{" "}
              </Link>
              <Link className="router" to="/nuancier">
                NUANCIER{" "}
              </Link>
              <Link className="router" to="/login">
                LOGIN
              </Link>

              <a href="#" className="close">
                X
              </a>
            </div>
          )}
          <a href="#menu" className="burger" onClick={showOpen}>
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>{" "}
      </nav>
    </div>
  );
}

export default NavBar;
