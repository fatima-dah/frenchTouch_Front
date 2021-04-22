import { useState, useEffect } from "react";
import "./AdminLogin.css";
import { FETCH } from "../../../Fetch";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

function ConnectedLogin({setToken} ){
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

          // console.log(data);

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

    return(
        <div className="form">
           
        <form className="contact-form"  onClick={handleLogin} >
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
            placeholder="Password"
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
          />
        
        </form>


      </div>
    )
} 


export default ConnectedLogin;