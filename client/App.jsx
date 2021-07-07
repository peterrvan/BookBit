import React, { Component, useState } from 'react';
import styles from '../prettify.scss';
import ShelfView from './ShelfView.jsx';
// import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = { };
  }

//   getResults(data) {

//   }

  render(){
      return(
        <div class="app">
            <ShelfView />
            {/* <h2>WELCOME TO BOOKBIT: TESTING APP HANG</h2> */}
        </div>
      );
   }
}

export default App;