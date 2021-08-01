import "./CommentCarousel.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH } from "../../../Fetch";

function CommentCarousel() {
  const [name, setName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [textHidden, setTexthidden] = useState("");

  function verifyEmpty() {
    if (
      name === "" ||
      adress === "" ||
      postCode === "" ||
      email === "" ||
      message === ""
    ) {
      setTexthidden("Des champs obligatoires manquent");
    } else {
      alert("Votre avis sera traité dans les plus courts délais.");
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${FETCH}/notices`, {
        name: name,
        postCode: postCode,
        adress: adress,
        email: email,
        message: message,
      })
      .then(function (response) {
        window.history.go();

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };




  return (
    <div>
      <h2 className="CommentTitle">Laisser nous un commentaire </h2>

      <div className="FormContact App  ">
        <div className="FormulaireContact">
          <div className="form">
            <form className="contact-form " onSubmit={handleSubmit}>
              <span className="msgValidFormation">{textHidden}</span>

              <div className="CommentCarousel ">

                <div>

                  <div className="Contact-M">
                    <label>
                      <input
                        type="text"
                        required
                        value={name}
                        placeholder="Nom"
                        onChange={(e) => setName(e.target.value)}
                        className="form-inputComment "
                        name="user_lastname"
                      />
                    </label>
                  </div>
                  <div className="Contact-M">
                    <label>
                      <input
                        type="text"
                        required
                        value={adress}
                        placeholder="Adresse"
                        onChange={(e) => setAdress(e.target.value)}
                        className="form-inputComment "
                        name="user_firstname"
                      />
                    </label>
                  </div>
                  <div className="Contact-M">
                    <label>
                      <input
                        type="text"
                        required
                        value={postCode}
                        placeholder="Code postal"
                        onChange={(e) => setPostCode(e.target.value)}
                        className="form-inputComment "
                        name="user_firstname"
                      />
                    </label>
                  </div>
                </div>
                <div className="emailComment">
                  <div className="Contact-M">
                    <label>
                      <input
                        type="email"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-inputComment "
                        name="user_email"
                      />
                    </label>
                  </div>

                  <div className="Contact-M">
                    <label>
                      <textarea
                        name="message"
                        required
                        value={message}
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-inputComment scrolls "
                      />
                    </label>
                  </div>
                </div>
                <div className="submitComment">

                  <input
                    type="submit"
                    onClick={verifyEmpty}
                    className=" btn btnComent"
                    value="Envoyer"
                  />
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCarousel;
