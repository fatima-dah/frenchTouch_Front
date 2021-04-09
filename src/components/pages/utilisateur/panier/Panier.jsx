import { useEffect } from "react";
import Header from "../navBar/NavBar";
import Paniers from "../../../visiteur/panier/Cart";
import Footer from "./../../../visiteur/footer/Footer"



function Panier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <Paniers />
      <Footer />
   
    </div>
  );
}

export default Panier;
