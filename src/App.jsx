import "./App.css";
import Header from "./components/visiteur/header/Header";
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
import Admin from "./components/Administrateur/Admin/Admin";
import Services from "./components/Administrateur/Adminprestation/Prestation";
import { useEffect, useState } from "react";




function App() {
  //const connected = getToken();
  const [connected, setConnected] = useState(false) ;
  useEffect(()=> {
    if(localStorage.getItem("token"))
      setConnected(true);
  },[])

  return (
    <div className="App">
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={Header} />
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
        <Route path="/admin" component={Admin} >
        {connected ? <Admin/> : <Redirect to="/login"/> } 
        </Route>
        <Route path="/services" component={Services}>
        {connected ? <Prestations/> : <Redirect to="/login"/> } 
          </Route>  
       

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
