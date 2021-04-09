import { useEffect } from "react";
import Header from "../navBar/NavBar";
import Presentation from "../../../visiteur/prestation/Presentation";
import Prestation from "../../../visiteur/prestation/Prestation";
import Gift from "../../../visiteur/prestation/Gift";
import Footer from "./../../../visiteur/footer/Footer"


function Prestations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <Presentation />
      <Prestation />
      <Gift />
      <Footer />
    </div>
  );
}

export default Prestations;
