import React, { useState } from 'react';
import styles from '../prettify.scss';

const ApiSearchBar = props => {
  return (
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
        <i className="bi bi-house-door-fill"></i>
      </div>
      {/* user icon */}
      <div className="col-md-1" id="user-icon">
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  )
}

export default ApiSearchBar;