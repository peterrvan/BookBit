import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from '../prettify.scss';
import ShelfSearchBar from './ShelfSearchBar.jsx';
import Bookshelf from './Bookshelf.jsx';
import SearchView from './SearchView.jsx';

const ShelfView = props => {
  const handleButtonClick = (e) => {
    console.log('plus button clicked');
    console.log(e);
  }

  return (
        <div className="row shelf-view">
          <ShelfSearchBar />
          {/* My Books and + sign */}
          <div className="row my-books-header">
            <h3>
              My Books
              <Link to="/search">
                <button className="btn" onClick={handleButtonClick}><i className="bi bi-plus-circle"></i></button>
              </Link>
            </h3>
          </div>
          {/* Book component (opens to modal) */}
          <Bookshelf />
        </div>
      // <Switch>
      //   <Route exact path="/shelf" component={ShelfView} />
      //   <Route exact path="/search" component={SearchView} />
      // </Switch>
  )
}

export default ShelfView;