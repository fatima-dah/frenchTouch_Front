import { useEffect } from "react";
import Header from '../../../visiteur/header/Header'




function Prestations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
     
    </div>
  );
}

export default Prestations;
