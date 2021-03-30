import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import About from './../../../visiteur/about/About'



function Abouts() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <About />
 
    </div>
  );
}

export default Abouts;
