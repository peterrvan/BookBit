import React, { useState, useEffect } from 'react';
import styles from '../prettify.scss';
import ShelfSearchBar from './ShelfSearchBar.jsx';
import Books from './Books.jsx';

const ShelfView = props => {
  useEffect(() => {
    fetch('http://localhost:3000/db/books')
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log('BOOK LIST', data);
      })
      .catch()
  }, []);

  return (
    <div className="row shelf-view">
      <ShelfSearchBar />
      {/* My Books and + sign */}
      <div className="row my-books-header">
        <h3>
          My Books
          <button className="btn"><i className="bi bi-plus-circle"></i></button>
        </h3>
      </div>
      {/* Book component (opens to modal) */}
      <Books />
    </div>
  )
}

export default ShelfView;