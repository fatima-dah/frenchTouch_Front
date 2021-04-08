import "./Nav.css";
import { useState } from "react";
import LogoSVG from "./../../../assets/entier noir.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openFirst, setOpenFirst] = useState(false);

  function showOpen() {
    if (openFirst === false) {
      setOpenFirst(true);
    } else {
      setOpenFirst(false);
    }
  }
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Vous ête deconnecté du compte administrateur");
  };
  return (
    <section>
    <nav className="App">
      <Link to="/" onClick={handleSubmit}>
          <img className="logo" src={LogoSVG} alt="logo" />
        </Link>
      <div className="menu-items">
          <div>
            <div className="items" id="menu" onClick={showOpen}>
              <Link className="router" to="/prestations_admin">
                PRESTATIONS
              </Link>

              <Link className="router" to="/book_admin">
                BOOK{" "}
              </Link>
              <Link className="router" to="/rendezvous_admin">
                PRENDRE RDV{" "}
              </Link>
              <Link className="router" to="/about_admin">
                CONTACT{" "}
              </Link>
              <Link className="router" to="/shop_admin">
                SHOP{" "}
              </Link>
              <Link className="router" to="/nuancier_admin">
                NUANCIER{" "}
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
    </section>
  );
};

export default Nav;
