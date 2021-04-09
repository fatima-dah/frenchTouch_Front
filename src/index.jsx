import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/visiteur/navBar/NavBar";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <App />

      <Nav />
    </BrowserRouter>
  ,

  document.getElementById("root")
);
