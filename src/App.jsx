import "./App.css";
import Header from "./components/visiteur/header/Header";
import { Route, Switch } from "react-router-dom";
import AdminLogin from './components/Adminlogin/AdminLogin';

import Prestations from "./components/pages/utilisateur/prestation/Prestation";
import CartGifts from "./components/pages/utilisateur/prestation/CartGift";
import Reserves from "./components/pages/utilisateur/reserve/Reserve";
import Books from "./components/pages/utilisateur/book/Book";
import Shops from "./components/pages/utilisateur/shop/Shop";
import Palettes from "./components/pages/utilisateur/palette/Palette";
import Abouts from "./components/pages/utilisateur/about/About";
import Admin from './components/Administrateur/Admin/Admin';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={Header}  />
        <Route path="/login" component={AdminLogin} />
        <Route path="/about" component={Abouts} />
        <Route path="/prestations" component={Prestations} />
        <Route path="/Gifts" component={CartGifts} />
        <Route path="/rendezvous" component={Reserves} />
        <Route path="/book" component={Books} />
        <Route path="/shop" component={Shops} />
        <Route path="/nuancier" component={Palettes} />
        <Route path="/admin" component={Admin} />

      </Switch>
    </div>
  );
}

export default App;
