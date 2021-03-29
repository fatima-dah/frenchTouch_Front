import React, { useState, useEffect } from "react";
import "./CartGift.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageLogo from "./../../../assets/entier couleurs-480px.jpg";
import { FETCH } from "./../../../Fetch";

function CartGift() {
  const [gift, setGift] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const [valid, setValid] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);

  useEffect(() => {
    axios.get(`${FETCH}/gifts`).then((res) => setGift(res.data));
  }, []);

  const handleValid = () => {
    if (
      title === "" ||
      message === "" ||
      price === "" ||
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      image === ""
    ) {
      alert("r");
    } else {
      setValid("Votre chèque cadeau va étre envoyé à l'étape suivante.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
      axios
        .post(`${FETCH}/gifts`, {
          lastname: lastname,
          firstname: firstname,
          email: email,
          message: message,
          title: title,
          price: price,
          image: image,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  console.log({ image });

  return (
    <div className="Gift">
      <h2 className="titleGift">Cheque cadeaux</h2>
      <div className="cartGifts">
        <div className="CartGift">
          <img className="imageLogoGift" src={imageLogo} alt="" />
          <div className="LignCartGift"></div>
          <div>{title}</div>

          <Carousel className="CarouselGift">
            {gift.slice(0, 4).map((gift) => (
              <div className="imageLogoGiftCarousels">
                <img
                  type="image"
                  className="imageLogoGiftCarousels"
                  src={gift.image}
                  alt=""
                />
              </div>
            ))}
          </Carousel>

          <div className="messageGift">{message}</div>
          <div className="LignCartGift"></div>
          <div>{price} </div>
        </div>
        <div className="lignVerticalGift"></div>
        <form className="main-form-gift" onSubmit={handleSubmit}>
          {/* <div className="formGifts"> */}
          <div className="inputGift">
            {" "}
            Vous allez recevoir le chèque cadeau par mail puis vous pourrez
            l'imprimer afin de l'offrir à la personne de votre choix.{" "}
          </div>
          <div className="inputGiftPrices">
            <label>
              {" "}
              Valeur du chèque :
              <select
                type="text"
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
          <div className="inputGift">
            <label>
              {" "}
              Title :
              <input
                type="text"
                name="title"
                className="inputGifts"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>{" "}
          <div className="inputGift">
            <label>
              {" "}
              Nom béneficiaire :
              <input
                type="text"
                name="firstname"
                className="inputGifts"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>
          </div>{" "}
          <div className="inputGift">
            <label>
              {" "}
              Nom du béneficiaire :
              <input
                type="text"
                name="lastname"
                className="inputGifts"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
          </div>
          <div className="inputGift">
            <label>
              {" "}
              Email du béneficiaire :
              <input
                type="email"
                name="email"
                className="inputGifts"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="inputGift">
            <label>
              {" "}
              Message :
              <textarea
                className="inputGiftsMessage"
                rows="4"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>{" "}
          <div className="inputGift">
            <label>
              Selectionnez le nom d'une image :
              <select
                type="text"
                name="image"
                className="inputGiftsImage"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              >
                <option></option>
                {gift.slice(0, 4).map((gift) => (
                  <option value={gift.image}>{gift.titleGift} </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="submit"
            onClick={handleValid}
            className="submitGift"
            value="Submit"
          >
            Ajouter au panier
          </button>
          <div className="msgValid">{valid}</div>
        </form>
      </div>
    </div>
  );
}

export default CartGift;
