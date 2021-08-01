import React, { useState, useEffect } from "react";
import arrowLeft from "./../../../assets/arrow.left.png";
import arrowRight from "./../../../assets/arrow.right.png";

import "./CarouselComent.css";
import axios from "axios";
import { FETCH } from "../../../../src/Fetch";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function CarouselComent() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios.get(`${FETCH}/notices`).then((res) => setNotice(res.data));
  }, []);


  const counter = notice.length;



  return (
    <div className="noticeComponant">
      <h2 className=" notice">Votre avis compte !</h2>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={counter}
        className="carouselComment"
      >
        <div className="flexBackNext App">
          <div>
            <ButtonBack className="back">
              <img src={arrowLeft} />{" "}
            </ButtonBack>
          </div>
          <Slider className="notices">
            {notice.map((notice) => {
              return (
                <Slide>
                  <div className="noticeCommentId">
                    <p>{notice.message} </p>
                    <p className="noticeNamePostalCode">
                      {notice.name} ({notice.postCode}){" "}
                    </p>
                  </div>
                </Slide>
              );
            })}
          </Slider>

          <div>
            <ButtonNext className="next">
              <img src={arrowRight} />{" "}
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
}
export default CarouselComent;
