import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import Book from './../../../visiteur/book/Book'
import Footer from "./../../../visiteur/footer/Footer"




function Books() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Book />
      <Footer />
 
    </div>
  );
}

export default Books;
