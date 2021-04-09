import { useEffect } from "react";
import NavBar from "../navBar/NavBar";
import Reserve from "../../../visiteur/reserve/Reserve";
import Footer from "./../../../visiteur/footer/Footer";

function Reserves() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBar />
      <Reserve />
      <Footer />
    </div>
  );
}

export default Reserves;
