import { useEffect } from "react";
import Header from './../header/Header'
import CartGift from "../../../visiteur/prestation/CartGift";

function CartGifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <CartGift />
    </div>
  );
}

export default CartGifts;
