import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import Reserve from '../../../visiteur/reserve/Reserve'


function Reserves() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
            <NavBar />
            <Reserve />

 
    </div>
  );
}

export default Reserves;
