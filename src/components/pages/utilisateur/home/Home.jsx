import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import Home from  "./../../../visiteur/home/Home"
import Footer from "./../../../visiteur/footer/Footer"




function Homes() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
 
    </div>
  );
}

export default Homes;
