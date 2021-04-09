import { useEffect } from 'react'
import NavBar from './../navBar/NavBar'
import Shops from '../../../visiteur/shop/Products'
import Footer from "./../../../visiteur/footer/Footer"




function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Shops />
      <Footer />
 
    </div>
  );
}

export default Shop;
