import React, { Component } from 'react';
import earth_logo from "../Planet_Earth.jpg";
import '../styles/bootstrap/css/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import NameForm from "./Userform";
//import LoginForm from "./Loginform";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={earth_logo} className="App-logo" alt="logo" />
          <h2>Hello You Are From Planet Earth</h2>
        </div>
      </div>

    );
  }
}

export default Header;

