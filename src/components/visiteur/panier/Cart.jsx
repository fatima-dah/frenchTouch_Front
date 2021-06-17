import React, { useState, useEffect } from "react";
import Footer from "./../footer/Footer";
import Header from "./../navBar/NavBar";
import "./Cart.css";
import moment from "moment";
import axios from "axios";
import { FETCH } from "../../../Fetch";

function Cart({ cart, setCart }) {
  const [home, setHome] = useState([]);
  const [product, setProduct] = useState({ idProduct: "", numberCommande: "" });
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);

  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState("");

  //const [numberCommande, setNumberCommande] = useState({numberCommande : ""});

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.id === product.id).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const validePanier = (e) => {
    e.preventDefault();
      var numberCommande = moment(new Date()).format("YYYYMMDDHHmmss");

      cart.forEach((element) => {
        console.log(element.id + " " + element.quantity + " " + numberCommande);
        axios
          .post(`${FETCH}/paniers`, {
            idProduct: element.id,
            numberCommande: numberCommande,
            quantity: element.quantity,
            price: element.price,

            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
          })

          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    
    clearCart()
  };

  const handleValid = () => {
    
    if (lastname === "" || email === "" || phone === "") {
      setValid("");
    } else {
      alert(
        "Nous vous recontactons dans les 48h, pour la commande effectuer, merci."
      );
      window.history.go()
    }
  };

  return (
    <div>
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices">Panier</h1>
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
      <div>
        <div className="infosPanier App">
          <div>Total Prix: {getTotalSum()} €</div>
          {cart.length > 0 && (
            <button onClick={clearCart} className="btn DeletePanier">
              Vider le panier
            </button>
          )}
        </div>
        <div className="cartesShop App">
          {cart.map((product, idx) => (
            <div className="carteShop" key={idx}>
              <div className="imageShopLign">
                <img
                  className="imageShop"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="shopDescription ">
                <h3 className="nameShop">{product.name}</h3>
                <p className="descriptionProduct">{product.description} </p>
                <p className="priceShop">{product.price} €</p>
                <div className=" RemoveBtn">
                  <input
                    className="input"
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(product, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => removeFromCart(product)}
                    className="btn suppBtn"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="btn DeletePanier" onClick={() => setOpen(!open)}>
            Valider le panier
          </button>
          <div>
            {open === true
              ? ( 
                  <form onSubmit={validePanier}>
                    <fieldset>
                      <div>
                        <label>
                          Prénom: <span className="styleRequired">*</span>
                          <input
                            type="text"
                            name="firstname"
                            className="form-inputAdd"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Nom: <span className="styleRequired">*</span>
                          <input
                            type="text"
                            name="lastname"
                            className="form-inputAdd"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Email: <span className="styleRequired">*</span>
                          <input
                            type="text"
                            name="email"
                            className="form-inputAdd"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          numéro de telephone:{" "}
                          <span className="styleRequired">*</span>
                          <input
                            type="text"
                            name="firstname"
                            className="form-inputAdd"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <p>
                        <span className="styleRequired">*</span> champs
                        obligatoires
                      </p>
                      <button
                        type="submit"
                        className="submitPrestation"
                        value="Submit"
                        onClick={handleValid}
                      >
                        Envoyer
                      </button>
                      <span className="msgValid">{valid}</span>
                    </fieldset>
                  </form>
  )
              : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
