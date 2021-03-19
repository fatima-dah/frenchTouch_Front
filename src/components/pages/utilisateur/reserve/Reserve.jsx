import { useEffect } from 'react'
import Header from './../header/Header'
import Reserve from '../../../visiteur/reserve/Reserve'


function Reserves() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
            <Header />
            <Reserve />

 
    </div>
  );
}

export default Reserves;
