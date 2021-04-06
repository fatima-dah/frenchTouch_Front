import { useEffect } from 'react'
import NavBar from './../navBar/NavBar'
import Shops from './../../../visiteur/shop/Shop'



function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Shops />
 
    </div>
  );
}

export default Shop;
