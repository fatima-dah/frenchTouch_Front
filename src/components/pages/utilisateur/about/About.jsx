import { useEffect } from 'react'
import Header from './../header/Header'
import About from './../../../visiteur/about/About'



function Abouts() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <About />
 
    </div>
  );
}

export default Abouts;
