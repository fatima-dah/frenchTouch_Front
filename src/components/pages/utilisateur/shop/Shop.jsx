import { useEffect } from 'react'
import NavBar from './../navBar/NavBar'



function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
 
    </div>
  );
}

export default Shop;
