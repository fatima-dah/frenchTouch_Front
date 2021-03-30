import { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import Book from './../../../visiteur/book/Book'



function Books() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <NavBar />
      <Book />
 
    </div>
  );
}

export default Books;
