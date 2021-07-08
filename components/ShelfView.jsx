import React, { useState, useEffect } from 'react';
import styles from '../prettify.scss';
import ShelfSearchBar from './ShelfSearchBar.jsx';
import Bookshelf from './Bookshelf.jsx';

const ShelfView = props => {
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
      <Bookshelf />
    </div>
  )
}

export default ShelfView;