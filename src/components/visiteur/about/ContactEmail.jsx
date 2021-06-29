import axios from "axios";
import { useState, useEffect } from "react";
import { FETCH } from "../../../Fetch";
import "./ContactEmail.css";

import emailjs from "emailjs-com";

function ContactUs() {
  const [about, setAbout] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [textHidden, setTextHidden] = useState("");

  useEffect(() => {
    axios.get(`${FETCH}/abouts`).then((res) => setAbout(res.data));
  }, [about]);

  function verifEmpty() {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      message === "" ||
      phone === ""
    ) {
      setTextHidden("Des champs obligatoires sont vides.");
    } else {
      alert(
        "Nous accusons réception de votre demande et je vous engage à vous apporter une réponse dans les 48 heures ouvrées."
      );
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    axios.post(`${FETCH}/abouts`, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
      phone: phone,
    });
    emailjs
      .sendForm(
        "service_48b182y",
        "template_jyoiry5",
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
                  name="lastname"
                  type="text"
                  required
                  value={lastname}
                  placeholder="Nom"
                  onChange={(e) => setLastname(e.target.value)}
                  className="form-inputContact"
                />
              </label>
            </div>
            <div className="Contact-M">
              <label>
                <input
                  name="firstname"
                  type="text"
                  required
                  value={firstname}
                  placeholder="Prénom"
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-inputContact"
                />
              </label>
            </div>
            <div className="Contact-M">
              <label>
                <input
                  name="phone"
                  type="text"
                  required
                  value={phone}
                  placeholder="Numero de téléphone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-inputContact"
                />
              </label>
            </div>
            <div className="Contact-M">
              <label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-inputContact"
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
            <span className="msgValidFormation">{textHidden}</span>
            <div>
              <input
                type="submit"
                onClick={verifEmpty}
                className="submitContact"
                value="Envoyer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;