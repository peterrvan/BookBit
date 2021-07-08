import React, { useState } from 'react';
import '../prettify.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleOnClick (username, password) {
        console.log('button clicked!');
        console.log('username: ', username, ' password: ', password);
        fetch('/db/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}) //username and password 
        })
        .then(res => res.json())
        .then(data => {
          console.log('data in handleOnClick: ', data)
        //switch view to shelf page - requisite id populates data
          props.setRedirect('/shelf');
        //   props.handleRedirect();
        })
        .catch((error) => {
        console.log('error', error)  // returns this if error
        })
    };

        return (
            <div>
                <h1 className="loginheader">Log In to BookBit</h1>
                <div className="form-group">
                    <input type="username" className="form-control" placeholder="Enter username" onChange={(e) => { setUsername(e.target.value) } } />
                    <div className="separate"></div>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value)} }/>
                    <div className="separate"></div>
                    <button type="submit" className="btn btn-success btn-large w-100" onClick={() => { handleOnClick(username, password) } } >Login</button>
                    <div className="separate"></div>
                </div>
                <p className="or">OR</p>
                <div className="form-group">
                    <Link to="/auth"><button type="button" className="btn btn-warning btn-large w-100">Placeholder for GitHub OAuth</button></Link>
                    <div className="separate"></div>
                    <Link to="/auth"><button type="button" className="btn btn-warning btn-large w-100">Placeholder for Google OAuth</button></Link>
                    <div className="separate"></div>
                    <div className="separate"></div>
                </div>
                <div className="separate"></div>
                <div className="separate"></div>
                <div className="separate"></div>
                <p className="forgot-password text-right">
                    Can't log in? | <Link to="/signup">Sign up here.</Link>
                </p>
            </div>
        );
}



// getResults(data) {
//     fetch('/db/login', {
//       method: "POST",
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(searchInfo) //username and password 
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     //   this.setState({hotels: data.info.slice(1)});
//     })
//     .catch(error=>{
//       console.log('error', error)  // returns this if error
//     })
// }

export default Login;