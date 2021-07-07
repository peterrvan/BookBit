import React, { useState } from 'react';
import styles from '../prettify.scss';
import ShelfSearchBar from './ShelfSearchBar.jsx';
import Books from './Books.jsx';

const ShelfView = props => {
  return (
    <div class="row shelf-view">
      <ShelfSearchBar />
      {/* My Books and + sign */}
      <div class="row my-books-header">
        <h3>
          My Books
          <button class="btn"><i class="bi bi-plus-circle"></i></button>
        </h3>
      </div>
      {/* Book component (opens to modal) */}
      <Books />
    </div>
  )
}

export default ShelfView;