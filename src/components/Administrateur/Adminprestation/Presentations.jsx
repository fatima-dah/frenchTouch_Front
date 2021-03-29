import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Switch } from "antd";

import "./Presentations.css";
import axios from "axios";
import { FETCH } from "./../../../Fetch";

function Presentations() {
  const [servicePresentation, setServicePresentation] = useState([]);
  const [changeComment, setChangeComment] = useState({
    pseudo: "",
    coment: "",
    isActive: 0,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${FETCH}/services_presentation`)
      .then((res) => setServicePresentation(res.data));
  }, []);



  const handleSubmitCheck = (id, checked) => {
    axios
      .put(`${FETCH}/services_presentation/${id}`, { isActive: checked })
      .catch(function (error) {
        console.log(error);
      });
  };

 

  return (
    <div>
      {/* {servicePresentation.map((servicePresentation) => (
        <div className="PresentationStyle">
          <div className="imagePresentation">
            <img
              className="imagePresentationFrenchTouch"
              src={servicePresentation.image_service}
              alt=""
            />
          </div>
          <div className="vertical-line"></div>
          <div className="textPresentation">
            <h1 className="titlePresentation">{servicePresentation.title} </h1>
            <p className="descriptionPrestation">
              {servicePresentation.description}
            </p>
          </div>
          <button onClick={modify}>Modifier</button>
        </div>
      ))} */}
        <CardBody>
              <div className=" flex-grow-1 ">
                {isLoading
                  ? servicePresentation.map((res) => (
                      <Accordion className="" key={res.id}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls=""
                          id=""
                        >
                          <Typography className="mail-oververflow">
                            {res.pseudo}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="width100 mb-2">
                            <div className="flex mb-2">
                              <div className="box-date-icon width100">
                                <div className="mb-3 width100 flex justify-content-between">
                                  <Switch
                                    value="check"
                                    defaultChecked={res.isActive}
                                    onClick={(checked) =>
                                      handleSubmitCheck(res.id, checked)
                                    }
                                  />
                                  {/* <RiDeleteBin6Line
                                    size="35"
                                    className="btn-message ml-2"
                                    onClick={() => handleDelete(res.id)}
                                  /> */}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>{res.coment}</div>
                              </div>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    ))
                  : null}
              </div>
            </CardBody>
    </div>
  );
}

export default Presentations;
