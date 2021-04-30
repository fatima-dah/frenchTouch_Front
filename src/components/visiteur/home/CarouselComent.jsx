import React, { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../../src/Fetch";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComent.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function CarouselComent() {
  const [comment, setComment] = useState();
  const [isLoading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log(comment);
    if (!comment) {
      axios
        .get(`${FETCH}/notices`)
        .then((res) => {
          setComment(res.data);
          setLoading(true);
          changeDisplay();
          if (res.data.length > 0) {
            setDisplay(true);
          } else {
            setDisplay(false);
          }
        })
        .catch(function (erreur) {
          console.log(erreur);
        });
    }
  });

  const changeDisplay = () => {
    if (isLoading && comment.length > 0) {
      // const filter = comment.filter((res) => res.isActive === 1);
      console.log(comment);
      if (comment.length > 0) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
  };

  return (
    <div>
      <h2 className=" notice">Votre avis compte !</h2>

      {display ? (
        <div className="full App">
          <Carousel
            className="cr"
            pause="hover"
            nextIcon={<GrNext className="arrow-cr" />}
            prevIcon={<GrPrevious className="arrow-cr" />}
            indicators={false}
          >
            {isLoading
              ? comment
                  // .filter((res) => res.isActive === 1)
                  .map((res) => (
                    <Carousel.Item interval={3000} key={res.id}>
                      <div className="cr-content">
                        <h3 className="cr-text title-cr">{res.firstname}</h3>
                        <p className="cr-text coment-cr">{res.description}</p>
                      </div>
                    </Carousel.Item>
                  ))
              : null}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}

export default CarouselComent;
