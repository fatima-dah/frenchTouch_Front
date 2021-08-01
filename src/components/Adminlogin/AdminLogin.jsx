import { useState, useEffect } from "react";
import "./AdminLogin.css";
import { FETCH } from "../../Fetch";
import axios from "axios";
// import ConnectedLogin from "./ConnectedLogin"
import Header from "../visiteur/navBar/NavBar";
import Footer from "../visiteur/footer/Footer";
import RegisterLogin from "./RegisterLogin";
import { useHistory, Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const AdminLogin = ({ cart, setToken }) => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      await axios
        .post(`http://localhost:8000/api/login/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          setToken(data.token);
          console.log(data);
          history.push(`./admin`);
          window.history.go();
        })
        .catch((err) => {
          confirmAlert({
            message: "Mot de passe ou adresse incorrect(e) ",
            buttons: [
              {
                label: "Ok",
              },
            ],
          });
        });
    } else {
      confirmAlert({
        message:
          "Veuillez entrer une adresse électronique et un mot de passe valides",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
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
            <h1 className="titleAcceuilServices">Se connecter</h1>
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
      <div className="contactCart App">
        <div>
          <div className="form">
            <form className="contact-form">
              <h3 className="titleContact">Connectez vous </h3>

              <div className="Contact-M">
                <label>
                  <input
                    required
                    className="form-inputContact"
                    placeholder="Email "
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="Contact-M">
                <label>
                  <input
                    required
                    className="form-inputContact"
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <input
                type="submit"
                className="submitContact"
                value="Envoyer"
                onClick={handleLogin}
              />
            </form>
          </div>
        </div>
        {/* <div>
          <RegisterLogin />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
