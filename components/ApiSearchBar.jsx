import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styles from '../prettify.scss';
import ShelfView from './ShelfView.jsx';

const ApiSearchBar = props => {
  return (
    <Router>
      <Route exact path="/search">
        <div className="container api-search-bar row">
          {/* search bar */}
          <form className="form-inline row col-md-10">
            <div className="form-group col-md-9">
              <input type="search" className="form-control" placeholder="Add books to shelf" name="api-search" />
            </div>
            <div className="form-group col-md-1">
              {/* search button */}
              <button type="submit" className="btn btn-default">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
          {/* home icon */}
          <div className="col-md-1" id="house-icon">
            <Link to="/shelf">
              <i className="bi bi-house-door-fill"></i>
            </Link>
          </div>
          {/* user icon */}
          <div className="col-md-1" id="user-icon">
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
      </Route>
      <Switch>
      <Route exact path="shelf" component={ShelfView} />
      </Switch>
    </Router>
  )
}

export default ApiSearchBar;