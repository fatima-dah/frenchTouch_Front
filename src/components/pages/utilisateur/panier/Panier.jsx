import { useEffect } from "react";
import Header from "../navBar/NavBar";
import Paniers from "../../../visiteur/panier/Cart";


function Panier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <Paniers />
   
    </div>
  );
}

export default Panier;
