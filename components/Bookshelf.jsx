import React, { useState, useEffect } from 'react';
import styles from '../prettify.scss';
import Book from './Book.jsx';

const Bookshelf = props => {
  const [bookList, setBookList] = useState([]);
  const bookshelf = [];
  const bookshelfRows = [];

  useEffect(() => {
    fetch('http://localhost:3000/db/books')
      .then((response) => {
        console.log('made it here');
        return response.json();
      })
      .then((data) => {
        setBookList(data);
        console.log('BOOK LIST', bookList);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const createBookshelf = () => {
    let row = [];

    for (let i = 0; i < bookList.length; i++) {
      console.log('book', bookList[i]);
      const book = bookList[i];

      row.push(
        <div className="col-md-3">
          <Book thumbnail={book.imageLinks.thumbnail} id={book.id} title={book.title} authors={book.authors} book={book} />
        </div>
      )

      if (row.length === 4 || i === bookList.length - 1) {
        bookshelf.push(
          <div className="row">
            {row.shift()}
            {row.shift()}
            {row.shift()}
          </div>
        )
      }
      
    }
  }

  createBookshelf();

  return (
    <div className="container bookshelf">
      {/* thumbnail for each book */}
      { bookshelf }
    </div>
  )
}

export default Bookshelf;