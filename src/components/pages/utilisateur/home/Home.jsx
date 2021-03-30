import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import Home from  "./../../../visiteur/home/Home"



function Homes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Home />
 
    </div>
  );
}

export default Homes;
