import "./CommentCarousel.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH } from "../../../Fetch";

function CommentCarousel() {
  const [notice, setNotice] = useState([]);

  const [name, setName] = useState("");
  const [postCode, setPostCode] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [textHidden, setTexthidden] = useState("");

  const [statusBtn, setStatusBtn] = useState(true);

  useEffect(() => {
    axios.get(`${FETCH}/notices`).then((res) => setNotice(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
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
          verifEmpty()

          console.log(error);
        });
    }
  };

  function verifEmpty() {
    if (
      name === "" ||
      adress === "" ||
      postCode === "" ||
      email === "" ||
      message === ""
    ) {
      alert("Des champs obligatoires sont vides.");
    } else {
      setTexthidden(
        "Votre association a bien été recensée et sera traitée dans les plus courts délais."
      );
    }
  }
  return (
    <div>
      <h2 className="CommentTitle">Laisser nous un commentaire </h2>

      <div className="FormContact App  ">
        <div className="FormulaireContact">
          <div className="form">
            <form className="contact-form " onSubmit={handleSubmit}>
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
                    onClick={verifEmpty}
                    className=" btn btnComent"
                    value="Envoyer"
                  />
                </div>
              </div>

              <span className="msgValidFormation">{textHidden}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCarousel;
