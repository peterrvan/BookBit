import React, { useState } from 'react';
import styles from '../prettify.scss';

const ShelfSearchBar = props => {
  return (
    <div class="container shelf-search-bar row">
      {/* search bar */}
      <form class="form-inline row col-md-11">
        <div class="form-group col-md-8">
          <input type="search" class="form-control" placeholder="Find books in shelf" name="shelf-search" />
        </div>
        <div class="form-group col-md-1">
          {/* search button */}
          <button type="submit" class="btn btn-default">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
      {/* user icon */}
      <div class="col-md-1" id="user-icon">
        <i class="bi bi-person-circle"></i>
      </div>
    </div>
  )
}

export default ShelfSearchBar;