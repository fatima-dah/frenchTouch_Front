import { Link } from "react-router-dom";
import { FETCH } from "../../../../src/Fetch";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import imgAccueil from "../../../assets/img.acceuil.jpg"
import "./Home.css";
import CarouselComent from "./CarouselComent";
import Social from "../Social";

function Home() {
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
      {isLoading
        ? getHome.map((res, index) => (
            <div>
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
                <div className="aboutH2">
                  <h2>Á Propos</h2>
                </div>
                <div className="contentPosition">
                  <div className="imgAboutContent App">
                    <img src={res.picture_home} alt="" />
                  </div>
                  <div className="cadreContent App">
                    <h6>{res.content_about}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))
        : getHome.map((res) => (
            <div>
              <div className="homeImgTop" style={{ backgroundImage: "" }}>
                <div className="alignTitle">
                  <h1 className="titleAcceuil">French Touch</h1>
                </div>
                <div className="prenezRdv">
                  <Link to="/rendezvous">
                    <h4 className="bottonRdvHome">PRENEZ RDV</h4>
                  </Link>
                </div>
                <Social />
              </div>
              <h2>Á Propos</h2>
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
      <div className="homeComent App">
        <h2>Votre avis compte !</h2>
      </div>
      <CarouselComent />
    </div>
  );
}

export default Home;
