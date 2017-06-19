import React, { Component } from 'react';
import '../styles/bootstrap/css/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';
//import NameForm from "./Userform";
//import LoginForm from "./Loginform";
import Header from "./Header";
import Home from "./Home";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>


          <div>
            <Navbar inverse staticTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/login">Login</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1}><Link to="/signup">Sign Up</Link></NavItem>
                <NavItem eventKey={1}><Link to="/about">About</Link></NavItem>
              </Nav>
            </Navbar>
          </div>








        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});


export default App;
