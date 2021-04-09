import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import About from './../../../visiteur/about/About'
import Footer from "./../../../visiteur/footer/Footer"



function Abouts() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <About />
      <Footer />
 
    </div>
  );
}

export default Abouts;
