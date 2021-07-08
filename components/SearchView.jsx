import React, { useState, useEffect } from 'react';
import styles from '../prettify.scss';
import ApiSearchBar from './ApiSearchBar.jsx';

const SearchView = props => {
  return (
    <div className="row search-view">
      <ApiSearchBar />
      {/* My Books and + sign */}
      {/* <div className="row my-books-header">
        <h3>Add Books</h3>
      </div> */}
      {/* list of fetched books */}
    </div>
  )
}

export default SearchView;