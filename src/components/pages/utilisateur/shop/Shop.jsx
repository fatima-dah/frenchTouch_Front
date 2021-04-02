import { useEffect } from 'react'
import NavBar from './../navBar/NavBar'
import Product from './../../../visiteur/shop/Product'



function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Product />
 
    </div>
  );
}

export default Shop;
