import Header from "../visiteur/navBar/NavBar";
import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { FETCH } from "../../Fetch";
import axios from "axios";

function Dashboard({ cart }) {
  const history = useHistory();


  function getTokenUser() {
    const tokenString = sessionStorage.getItem("user");
    return tokenString;

  }
  const userss = getTokenUser();



  const [home, setHome] = useState([]);
  const [user, setUser] = useState([]);


  useEffect(() => {
    axios.get(`${FETCH}/homes`).then((res) => setHome(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${FETCH}/users`).then((res) => setUser(res.data));
  }, []);




  const handleLogout = () => {
    handleRemove();
    history.push("/login");
  };

  const handleRemove = () => {
    sessionStorage.removeItem("user");
    alert("Vous ête deconnecté du compte utilisateur");
  };
  console.log(userss)
  return (
    <div>
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      <div className="imageAboutServices">
        <div className="alignTitleService App">
          <h1 className="titleAcceuilServices">Mon Compte</h1>
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
      <div>

        <div>
          bonjour{userss.id}
          {user.map((user) => (
            <div> {user.email} </div>))} !
          <input type="button" value="Logout" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
    