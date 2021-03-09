import './App.css';
import Header from './components/visiteur/header/Header';
import { Route, Switch } from 'react-router-dom';
import PrestationsVisitor from '../src/components/visiteur/prestation/Prestation'
import RdvVisitor from '../src/components/visiteur/reserve/Reserve'
import BookVisitor from '../src/components/visiteur/book/Book'
import ShopVisitor from '../src/components/visiteur/shop/Shop'
import PaletteVisitor from '../src/components/visiteur/palette/Palette'
import Navbar from '../src/components/visiteur/navbar/Navbar'
import AboutVisitor from '../src/components/visiteur/about/About'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch >
      <Route exact path="/" />
      <Route path="/apropos" component={AboutVisitor}/>
      <Route path="/prestations" component={PrestationsVisitor}/>
      <Route path="/rendezvous" component={RdvVisitor}/>
      <Route path="/book" component={BookVisitor}/>
      <Route path="/shop" component={ShopVisitor}/>
      <Route path="/nuancier" component={PaletteVisitor}/>

          
      </Switch>
      
    </div>
  );
}

export default App;
