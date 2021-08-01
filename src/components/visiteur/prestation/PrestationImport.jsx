import Presentation from "./Presentation";
import Prestation from "./Prestation";
import Header from './../navBar/NavBar'
import Footer from './../footer/Footer'
import Gift from "./Gift";

function PresentationImport() {
  return (
    <div>
      <Header />
      <Presentation />
      <Prestation />
      <Gift />
      <Footer />
    </div>
  );
}

export default PresentationImport;
