import React from 'react';
import '../prettify.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "../components/login.jsx";
import Signup from "../components/signup.jsx";

export default function App() {
  return (
    <Router>
    <div>

      <div className="logingif">
        <img src="../page.png" width="600 px" height="480 px"></img>
      </div>

      <div className="logingif">
        <Switch>
          <Route exact path="/">
            <img src="../logingif.gif" width="600 px" height="480 px"></img>
          </Route>
          <Route exact path="/signup">
            <img src="../signupgif.gif" width="600 px" height="480 px"></img>
          </Route>
        </Switch>
      </div>

      <div class="container" className="imagetitle">
        <div class="row">
          <div class="col">
          <img src="../logoclear.png" className="books"></img>
          </div>
          <div class="col">
          <h4 className="title">BookBit</h4>
          </div>
        </div>
      </div>

     <div className="righted">
      <Switch>
        <Route exact path="/">
            <First />
        </Route>
        <Route exact path="/signup">
            <Sign />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

function First() {
  return (
    <div>
    <Login />
    </div>
);
}

function Sign() {
  return (
    <div>
    <Signup />
    </div>
);
}

