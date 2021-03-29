import "./App.css";
// import Header from "./components/visiteur/header/Header";
import Home from "./components/pages/utilisateur/home/Home";
import Footer from "./components/visiteur/footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/Adminlogin/AdminLogin";
import Prestations from "./components/pages/utilisateur/prestation/Prestation";
import CartGifts from "./components/pages/utilisateur/prestation/CartGift";
import Reserves from "./components/pages/utilisateur/reserve/Reserve";
import Books from "./components/pages/utilisateur/book/Book";
import Shops from "./components/pages/utilisateur/shop/Shop";
import Palettes from "./components/pages/utilisateur/palette/Palette";
import Abouts from "./components/pages/utilisateur/about/About";
import PrestationsAdmin from "./components/Administrateur/Adminprestation/Prestation";
import CartGiftsAdmin from "./components/Administrateur/Adminprestation/AdminGift";
import ReservesAdmin from "./components/Administrateur/Adminreserve/AdminReserve";
import BooksAdmin from "./components/Administrateur/Adminbook/AdminBook";
import ShopsAdmin from "./components/Administrateur/Adminshop/AdminShop";
import PalettesAdmin from "./components/Administrateur/Adminpalette/AdminPalette";
import AboutsAdmin from "./components/Administrateur/Adminabout/AdminAbout";
import Admin from "./components/Administrateur/Admin/Admin";
import { useEffect, useState } from "react";

function App() {
  // const connected = getToken();
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setConnected(true);
  }, []);

  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AdminLogin}>
          <AdminLogin setConnected={setConnected} />
        </Route>
        <Route path="/about" component={Abouts} />
        <Route path="/prestations" component={Prestations} />
        <Route path="/Gifts" component={CartGifts} />
        <Route path="/rendezvous" component={Reserves} />
        <Route path="/book" component={Books} />
        <Route path="/shop" component={Shops} />
        <Route path="/nuancier" component={Palettes} />
        <Route path="/admin" component={Admin}>
          {connected ? <Admin /> : <Redirect to="/login" />}
        </Route>
        {/* <Route path="/services" component={Services}> 
        {connected ? <Services/> : <Redirect to="/login"/> } 
          </Route>   */}

        <Route path="/about_admin" component={AboutsAdmin} />
        <Route path="/prestations_admin" component={PrestationsAdmin}>
          {connected ? <PrestationsAdmin /> : <Redirect to="/login" />}
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
