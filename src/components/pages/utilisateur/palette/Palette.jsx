import { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Palette from './../../../visiteur/palette/Palette';



function Palettes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Palette />
 
    </div>
  );
}

export default Palettes;
