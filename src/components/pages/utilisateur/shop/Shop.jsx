import { useEffect } from 'react'
import Header from './../header/Header'



function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
 
    </div>
  );
}

export default Shop;
