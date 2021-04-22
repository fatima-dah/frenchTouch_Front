import axios from "axios";
import { useState, useEffect } from "react";
import { FETCH } from "../../../Fetch";
import "./ContactEmail.css";

import emailjs from "emailjs-com";

export default function ContactUs() {
  const [about, setAbout] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusBtn, setStatusBtn] = useState(true);

  const [textHidden, setTextHidden] = useState("");

  useEffect(() => {
    axios.get(`${FETCH}/abouts`).then((res) => setAbout(res.data));
  }, [about]);

  function verifEmpty() {
    if (firstname === "" || lastname === "" || email === "" || message === "") {
      setTextHidden("");
    } else {
      setTextHidden(
        "Nous accusons réception de votre demande et je vous engage à vous apporter une réponse dans les 48 heures ouvrées."
      );
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    if (statusBtn === true) {
      setStatusBtn(false);
      axios.post(`${FETCH}/abouts`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      });
      emailjs
        .sendForm(
          "service_48b182y",
          "template_0f2j2rd",
          e.target,
          "user_kCoI6na0uvUeXNsG3jZJg"
        )
        .then(function (response) {
          window.history.go();

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      e.target.reset();

    }
  }

  return (
    <div className="FormContact ">
      <div className="FormulaireContact">
        <div className="form">
          <form className="contact-form" onSubmit={sendEmail}>
          <h3 className="titleContact">Contactez nous !</h3>

           
                <div className="Contact-M">
                  <label>
                    <input
                      type="text"
                      required
                      value={lastname}
                      placeholder="Nom"
                      onChange={(e) => setLastname(e.target.value)}
                      className="form-inputContact"
                      name="user_lastname"
                    />
                  </label>
                </div>
                <div className="Contact-M">
                  <label>
                    <input
                      type="text"
                      required
                      value={firstname}
                      placeholder="Prénom"
                      onChange={(e) => setFirstname(e.target.value)}
                      className="form-inputContact"
                      name="user_firstname"
                    />
                  </label>
                </div>
                <div className="Contact-M">
                  <label>
                    <input
                      type="email"
                      required
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-inputContact"
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
                      className="form-inputContact scroll "
                    />
                  </label>
                </div>
              <input
                type="submit"
                onClick={verifEmpty}
                className="submitContact"
                value="Envoyer"
              />
            <span className="msgValidFormation">{textHidden}</span>
          </form>
        </div>
      </div>
    </div>
  );
}
