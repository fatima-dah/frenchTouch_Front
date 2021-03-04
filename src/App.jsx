import './App.css';

// import AdminList from './components/admin/AdminList';
import Presentation from './components/utilisateur/prestation/Presentation';
import Prestation from './components/utilisateur/prestation/Prestation';
import Gift from './components/utilisateur/prestation/Gift'
import CartGift from './components/utilisateur/prestation/CartGift'



function App() {
  return (

    <div className="App">
      {/* <AdminList /> */}
      <Presentation />
      <Prestation />
      <Gift />
      <CartGift />

    </div>

  );
}

export default App;
