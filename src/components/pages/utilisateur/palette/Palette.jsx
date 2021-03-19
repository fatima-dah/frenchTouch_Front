import { useEffect } from 'react';
import Header from './../header/Header';
import Palette from './../../../visiteur/palette/Palette';



function Palettes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <Palette />
 
    </div>
  );
}

export default Palettes;
