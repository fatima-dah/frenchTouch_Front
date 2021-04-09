import { useEffect } from "react";
import NavBar from '../navBar/NavBar'
import CartGift from "../../../visiteur/prestation/CartGift";
import Footer from "./../../../visiteur/footer/Footer"


function CartGifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBar />
      <CartGift />
      <Footer />
    </div>
  );
}

export default CartGifts;
