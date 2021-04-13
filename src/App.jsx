import "./App.css";
import Home from "./components/pages/utilisateur/home/Home";
import HomeAdmin from './components/Administrateur/Adminhome/AdminHome'
import { Route, Switch } from "react-router-dom";
import AdminLogin from "./components/Adminlogin/AdminLogin";
import Prestations from "./components/pages/utilisateur/prestation/Prestation";
import CartGifts from "./components/pages/utilisateur/prestation/CartGift";
import Reserves from "./components/pages/utilisateur/reserve/Reserve";
import Cart from "./components/visiteur/panier/Cart";

import Books from "./components/pages/utilisateur/book/Book";
import Products from "./components/visiteur/shop/Products";
import Palettes from "./components/pages/utilisateur/palette/Palette";
import Abouts from "./components/pages/utilisateur/about/About";
import PrestationsAdmin from "./components/Administrateur/Adminprestation/AdminPrestation";
import CartGiftsAdmin from "./components/Administrateur/Adminprestation/AdminGift";
import ReservesAdmin from "./components/Administrateur/Adminreserve/AdminReserve";
import BooksAdmin from "./components/Administrateur/Adminbook/AdminBook";
import ShopsAdmin from "./components/Administrateur/Adminshop/AdminShop";
import PalettesAdmin from "./components/Administrateur/Adminpalette/AdminPalette";
import AboutsAdmin from "./components/Administrateur/Adminabout/AdminAbout";
import Admin from "./components/Administrateur/Admin/Admin";
import NavBar from "./components/pages/utilisateur/navBar/NavBar";
import { useLayoutEffect, useEffect, useState } from "react";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
function getToken() {
  const tokenString = sessionStorage.getItem("token");
  // const userToken = JSON.parse(tokenString);
  return tokenString;
}

function App() {
  const savedCart = localStorage.getItem("cart");
  const [openFirst, setOpenFirst] = useState(false);
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AdminLogin}>
          <AdminLogin setToken={setToken} />
        </Route>
        <Route path="/about" component={Abouts} />
        <Route path="/prestations" component={Prestations} />
        <Route path="/Gifts" component={CartGifts} />
        <Route path="/rendezvous" component={Reserves} />
        <Route path="/book" component={Books} />
        <Route path="/nuancier" component={Palettes} />

        <Route path="/product" component={Products}>
          <Products cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart" component={Cart}>
          {" "}
          <Cart cart={cart} setCart={setCart} />
        </Route>

        <Route path="/admin" component={Admin}>
          {getToken() ? <Admin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/home_admin" component={HomeAdmin}>
          {getToken() ? <HomeAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/about_admin" component={AboutsAdmin}>
          {getToken() ? <AboutsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/prestations_admin" component={PrestationsAdmin}>
          {getToken() ? <PrestationsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/Gifts_admin" component={CartGiftsAdmin}>
          {getToken() ? <CartGiftsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/rendezvous_admin" component={ReservesAdmin}>
          {getToken() ? <ReservesAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/book_admin" component={BooksAdmin}>
          {getToken() ? <BooksAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/shop_admin" component={ShopsAdmin}>
          {getToken() ? <ShopsAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
        <Route path="/nuancier_admin" component={PalettesAdmin}>
          {getToken() ? <PalettesAdmin /> : <AdminLogin setToken={setToken} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
