import React, { useState } from 'react';
import styles from '../prettify.scss';

const ShelfSearchBar = props => {
  return (
    <div className="container shelf-search-bar row">
      {/* search bar */}
      <form className="form-inline row col-md-11">
        <div className="form-group col-md-8">
          <input type="search" className="form-control" placeholder="Find books in shelf" name="shelf-search" />
        </div>
        <div className="form-group col-md-1">
          {/* search button */}
          <button type="submit" className="btn btn-default">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
      {/* user icon */}
      <div className="col-md-1" id="user-icon">
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  )
}

export default ShelfSearchBar;