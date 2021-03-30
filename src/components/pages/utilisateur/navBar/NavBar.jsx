import { useEffect } from "react";
import NavBar from "../../../visiteur/navBar/NavBar";





function Prestations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBar />
     
    </div>
  );
}

export default Prestations;
