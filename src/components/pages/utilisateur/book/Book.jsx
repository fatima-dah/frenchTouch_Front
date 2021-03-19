import { useEffect } from 'react'
import Header from './../header/Header'
import Book from './../../../visiteur/book/Book'



function Books() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header />
      <Book />
 
    </div>
  );
}

export default Books;
