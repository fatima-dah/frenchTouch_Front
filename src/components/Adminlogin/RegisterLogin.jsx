import React, { useState, useEffect } from "react";
import axios from "axios";
import './RegisterLogin.css'
import { FETCH } from "../../Fetch";

function RegisterLogin() {
    const [user, setUser] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const [statusBtn, setStatusBtn] = useState(true);


    useEffect(() => {
        axios.get(`${FETCH}/users`).then((res) => setUser(res.data));
      }, [user]);

    
     function handleSubmitPassword() {
        if (password !== confirmedPassword) {
            alert("le mots de passe est incorect");
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (statusBtn === true) {
          setStatusBtn(false);
          axios
            .post(
              `${FETCH}/login/user/register`,
              {
                firstname: firstname,
                lastname : lastname,
                email : email,
                password : password,
                confirmedPassword : confirmedPassword,

              },
              handleSubmitPassword()

            )
            .then(function (response) {
              window.history.go();
              console.log(response);
            })
            
            .catch(function (error) {
              console.log(error);
            });
        }
      };
    return (
      <div>
        <div className="Contact ">
            <div className="margContact">
              <div className="CartContact">
                <div>
                  <h3 className="titleContact">Inscrivez vous</h3>
                  <form className="register-form"  onSubmit={handleSubmit} >
         
            <div className="Contact-M">
          <input
            className="form-inputRegister"
            type="text"
            placeholder="Prénom"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
            </div>
            <div className="Contact-M">
              <label>
          <input
          
            required
            className="form-inputRegister"

            placeholder="nom"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
             </label>
            </div>
        <div className="Contact-M">
              <label>
          <input
          
            className="form-inputRegister"
            placeholder="Email "
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

          />
             </label>
            </div>
            <div className="Contact-M">
              <label>
          <input
        
            required
            className="form-inputRegister"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            </label>
            </div>
            <div className="Contact-M">
              <label>
          <input
        
            required
            className="form-inputRegister"
            name="confirmpassword"
            placeholder="Confimer le mot de passe"
            type="password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            
          />
            </label>
            </div>
            <input
            type="submit"
            className="submitContact"
            value="S'inscrire"
          />
        
        </form>
                </div>
              </div>
            </div>
      </div>
      </div>
    );
  }
  
  export default RegisterLogin;