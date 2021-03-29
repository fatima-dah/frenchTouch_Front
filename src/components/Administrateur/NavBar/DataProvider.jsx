import React, { useState, useEffect } from "react";
import axios from "axios";
import { FETCH } from "../../../Fetch";

function dataProvider(){
    const [service, setService] = useState([]);

useEffect(() => {
    axios.get(`${FETCH}/services`).then((res) => setService(res.data));
  }, [service]);

  return(
      <div></div>
  )

} 

export default dataProvider;