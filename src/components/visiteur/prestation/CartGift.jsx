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
  }, [gift]);

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


  return (
    <div>
      <h2 className="titleGift">Cheque cadeaux</h2>
      <form className="main-form" onSubmit={handleSubmit}>
        <div className="cartGifts">
          <div className="CartGift">
            <img className="imageLogoGift" src={imageLogo} alt="" />
            <div className="LignCartGift"></div>
            <div>{title}</div>

            <Carousel className="CarouselGift">
              <div className="imageLogoGiftCarousels">
                <img
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  className="imageLogoGiftCarousels"
                  alt=""
                  src="https://images.serenataassets.com/image/upload/v1539073473/blogs/fleurs-romantique.jpg"
                />
              </div>
              <div className="imageLogoGiftCarousels">
                <img
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  className="imageLogoGiftCarousels"
                  alt=""
                  src="https://www.drostatic.com/images/lemagfemmes/home/gateau_fusee.jpg"
                />
              </div>
              <div className="imageLogoGiftCarousels">
                <img
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  className="imageLogoGiftCarousels"
                  alt=""
                  src="https://1.bp.blogspot.com/-PmQ_LhCa4po/XkQ7LHMlbiI/AAAAAAAAAno/KfuE0rqW9P4q1DTPwqff2h1Xs59Ax_NmwCLcBGAsYHQ/s1600/saint-valentin-2020.jpg"
                />
              </div>
              <div className="imageLogoGiftCarousels">
                <img
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  className="imageLogoGiftCarousels"
                  alt=""
                  src="https://zenidees.com/wp-content/uploads/2020/11/nail-art-cadeau-noel-38.jpg"
                />
              </div>
            </Carousel>

            <div>{message}</div>
            <div className="LignCartGift"></div>
            <div>{price}</div>
          </div>
          <div className="lignVerticalGift"></div>
          <div>
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
                <input
                  className="inputGifts"
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>{" "}
            <div className="inputGift">
              <label>
                {" "}
                valeur du chèque :
                <select
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option></option>

                  <option>50</option>
                  <option>60</option>
                  <option>70</option>
                  <option>80</option>
                  <option>90</option>
                  <option>100</option>
                </select>
                ou
                <input />
              </label>
            </div>{" "}
            <button
              type="submit"
              onClick={handleValid}
              className="submit"
              value="Submit"
            >
              Ajouter au panier
            </button>
            <span className="msgValid">{valid}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CartGift;
