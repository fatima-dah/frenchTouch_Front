import { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Palette from './../../../visiteur/palette/Palette';
import Footer from "./../../../visiteur/footer/Footer"




function Palettes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Palette />
      <Footer />
 
    </div>
  );
}

export default Palettes;
