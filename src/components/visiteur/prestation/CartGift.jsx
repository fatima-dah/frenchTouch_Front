import React, { useState, useEffect } from "react";
import "./CartGift.css";
import axios from "axios";
import moment from "moment";

import Header from "./../navBar/NavBar";
import Footer from "./../footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageLogo from "./../../../assets/entier couleurs-480px.jpg";
import { FETCH } from "./../../../Fetch";

function CartGift({ cart }) {
  const [gift, setGift] = useState([]);
  const [lastnameFirstname, setLastnameFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [event, setEvent] = useState("");
  const [lastnameFirstnameGift, setLastnameFirstnameGift] = useState("");
  const [emailGift, setEmailGift] = useState("");

  const [valid, setValid] = useState("");

  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/gifts`).then((res) => setGift(res.data));
  }, []);

  const handleValid = () => {
    if (
      event === "" ||
      message === "" ||
      phone === "" ||
      price === "" ||
      lastnameFirstname === "" ||
      lastnameFirstnameGift === "" ||
      email === "" ||
      emailGift === ""
    ) {
      setValid("veuillez remplir les champs obligatoires");
    } else {
      alert(
        "Nous vous recontactons dans les 48h, pour la commande de chéque cadeaux effectuer, merci."
      );
      window.history.go();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      var numberCommande = moment(new Date()).format("YYYYMMDDHHmmss");

      axios
        .post(`${FETCH}/gifts`, {
          numberCommande: numberCommande,
          lastnameFirstname: lastnameFirstname,
          lastnameFirstnameGift: lastnameFirstnameGift,
          email: email,
          emailGift: emailGift,
          event: event,
          message: message,
          phone: phone,
          price: price,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
  };

  return (
    <div className="Gift ">
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      <div>
        <div className="imageAboutServices">
          <div className="alignTitleService App">
            <h1 className="titleAcceuilServices titleGiftFont">
              Cheque cadeaux{" "}
            </h1>
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

      <div className="cartGifts App">
        <div className="CartGift">
          <img className="imageLogoGift" src={imageLogo} alt="" />
          <div className="LignCartGift"></div>
          <div>{event}</div>

          <div className="messageGift">{message}</div>
          <div className="LignCartGift"></div>
          <div>{price} </div>
        </div>
        <div className="lignVerticalGift"></div>
        <div className="main-form-gift ">
          <form className="main-gift "  onSubmit={handleSubmit}>
            <div className="inputGiftPrices">
              <label>
                {" "}
                Valeur du chèque :
                <select
                  type="text"
                  placeholder="Valeur du chéque"
                  name="price"
                  className="inputGiftsPrice"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option></option>

                  <option>50,00 €</option>
                  <option>60,00 €</option>
                  <option>70,00 €</option>
                  <option>80,00 €</option>
                  <option>90,00 €</option>
                  <option>100,00 €</option>
                </select>
                ou
                <input
                  type="text"
                  name="price"
                  className="inputGiftsPrice"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />{" "}
                €
              </label>
            </div>{" "}
            <div className="Contact-M">
            
                <input
                  type="text"
                  placeholder="Nom/Prénom"
                  name="lastname"
                  className="form-inputCommentGift "
                  value={lastnameFirstname}
                  onChange={(e) => setLastnameFirstname(e.target.value)}
                />
            </div>{" "}
            <div className="Contact-M">
             
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="form-inputCommentGift "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>{" "}
            <div className="Contact-M">
              <input
                type="text"
                placeholder="Numero de téléphone"
                name="phone"
                className="form-inputCommentGift "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="Contact-M">
              <input
                type="text"
                placeholder="Type d'événenent"
                name="event"
                className="form-inputCommentGift "
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              />
            </div>{" "}
            <div className="Contact-M">
              <input
                type="text"
                placeholder="Nom/Pénom du béneficiaire"
                name="firstname"
                className="form-inputCommentGift "
                value={lastnameFirstnameGift}
                onChange={(e) => setLastnameFirstnameGift(e.target.value)}
              />
            </div>{" "}
            <div className="Contact-M">
              <input
                type="email"
                placeholder="Email du Béneficiaire"
                name="email"
                className="form-inputCommentGift "
                value={emailGift}
                onChange={(e) => setEmailGift(e.target.value)}
              />
            </div>
            <div className="Contact-M">
              <textarea
                className="form-inputCommentGift scrolls "
                rows="4"
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>{" "}
            <div className="msgValidFormation">{valid}</div>

            <div className="submitComment">
              <input
                type="submit"
                onClick={handleValid}
                className=" btn "
                value="Valider la commande"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartGift;
