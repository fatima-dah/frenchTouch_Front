import { useEffect } from "react";
import NavBar from '../navBar/NavBar'
import CartGift from "../../../visiteur/prestation/CartGift";

function CartGifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBar />
      <CartGift />
    </div>
  );
}

export default CartGifts;
