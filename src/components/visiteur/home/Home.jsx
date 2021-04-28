import { Link } from "react-router-dom";
import { FETCH } from "../../../../src/Fetch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import CarouselComent from "./CarouselComent";
import Header from "./../navBar/NavBar";
import Social from "../Social";
import Footer from "./../footer/Footer";

function Home({ cart }) {
  const [getHome, setGetHome] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(getHome);
    axios
      .get(`${FETCH}/homes`)
      .then((res) => {
        setGetHome(res.data);
        setLoading(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
    <div className="Home">
      <Header
        getCartReduce={cart.reduce((sum, { quantity }) => sum + quantity, 0)}
      />
      {isLoading
        ? getHome.map((res, index) => (
            <div className="first-block">
              <div className="homeImgTop">
                <div className="black-filter">
                  <img className="imgHome" src={res.picture_about} alt="" />
                </div>
                <div className="alignTitle App">
                  <h1 className="titleAcceuil">French Touch</h1>
                </div>
                <div className="prenezRdv App">
                  <Link to="/rendezvous">
                    <h4 className="bottonRdvHome">PRENEZ RDV</h4>
                  </Link>
                </div>
                <Social />
              </div>
              <div className="aboutRelative">
                  <h2 className="App Homeabout">A Propos</h2>
                <div className="contentPosition">
                  <div className="imgAboutContent App">
                    <img className="imageAbout" src={res.picture_home} alt="" />
                  </div>
                  <div className="cadreContent App">
                    <p className="contentAbout">{res.content_about}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        : getHome.map((res) => (
            <div>
              <div className="homeImgTop" style={{ backgroundImage: "" }}>
                <div className="alignTitle App">
                  <h1 className="titleAcceuil">French Touch</h1>
                </div>
                <div className="prenezRdv">
                  <Link to="/rendezvous">
                    <h4 className="bottonRdvHome">PRENEZ RDV</h4>
                  </Link>
                </div>
                <Social />
              </div>
              <h2 className="App Homeabout">A Propos</h2>
              <div className="contentPosition">
                <div className="imgAboutContent App">
                  <img src="" alt="Chargement" />
                </div>
                <div className="cadreContent">
                  <h6>Chargement</h6>
                </div>
              </div>
            </div>
          ))}
      <div className="homeComent">
        <h2 className="App notice">Votre avis compte !</h2>
      </div>
      <CarouselComent />
      <Footer />
    </div>
  );
}

export default Home;
