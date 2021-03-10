import "./App.css";
import Header from "./components/visiteur/header/Header";
import { Route, Switch } from "react-router-dom";
import PrestationsVisitor from "../src/components/visiteur/prestation/PrestationImport";
import GiftsVisitor from "../src/components/visiteur/prestation/CartGift";
import RdvVisitor from "../src/components/visiteur/reserve/Reserve";
import BookVisitor from "../src/components/visiteur/book/Book";
import ShopVisitor from "../src/components/visiteur/shop/Shop";
import PaletteVisitor from "../src/components/visiteur/palette/Palette";
import AboutVisitor from "../src/components/visiteur/about/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" />
        <Route path="/apropos" component={AboutVisitor} />
        <Route path="/prestations" component={PrestationsVisitor} />
        <Route path="/Gifts" component={GiftsVisitor} />
        <Route path="/rendezvous" component={RdvVisitor} />
        <Route path="/book" component={BookVisitor} />
        <Route path="/shop" component={ShopVisitor} />
        <Route path="/nuancier" component={PaletteVisitor} />
      </Switch>
    </div>
  );
}

export default App;
