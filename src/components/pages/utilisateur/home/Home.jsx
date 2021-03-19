import { useEffect } from 'react'
import Header from './../header/Header'
import Home from './../../../visiteur/home/Home'



function Homes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <Home />
 
    </div>
  );
}

export default Homes;
