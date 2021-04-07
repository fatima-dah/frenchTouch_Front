import "./App.css";

// import Header from "./components/visiteur/header/Header";
import Home from "./components/pages/utilisateur/home/Home";
import Footer from "./components/visiteur/footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/Adminlogin/AdminLogin";
import Prestations from "./components/pages/utilisateur/prestation/Prestation";
import CartGifts from "./components/pages/utilisateur/prestation/CartGift";
import Reserves from "./components/pages/utilisateur/reserve/Reserve";
import Paniers from "./components/pages/utilisateur/panier/Panier";

import Books from "./components/pages/utilisateur/book/Book";
import Shops from "./components/pages/utilisateur/shop/Shop";
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
import { useEffect, useState } from "react";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  // const userToken = JSON.parse(tokenString);
  return tokenString
}

function App() {
  
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
        <Route path="/shop" component={Shops} />
        <Route path="/nuancier" component={Palettes} />
        <Route path="/panier" component={Paniers}  />

        <Route path="/admin" component={Admin}>
          {getToken() ? <Admin /> : <AdminLogin setToken={setToken} />}
        </Route>
         <Route path="/services" component={PrestationsAdmin}> 
        {getToken() ? <PrestationsAdmin/> : <AdminLogin setToken={setToken} /> } 
          </Route>   

        <Route path="/about_admin" component={AboutsAdmin} >
        {getToken() ? <AboutsAdmin/> : <AdminLogin setToken={setToken} /> } 
        </Route>

        <Route path="/prestations_admin" component={PrestationsAdmin} >
        {getToken() ? <PrestationsAdmin/> : <AdminLogin setToken={setToken} /> } 
        </Route>
        <Route path="/Gifts_admin" component={CartGiftsAdmin} />
        <Route path="/rendezvous_admin" component={ReservesAdmin} />
        <Route path="/book_admin" component={BooksAdmin} />
        <Route path="/shop_admin" component={ShopsAdmin} />
        <Route path="/nuancier_admin" component={PalettesAdmin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
