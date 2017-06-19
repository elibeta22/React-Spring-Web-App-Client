import React, { Component } from 'react';
import earth_logo from "../Planet_Earth.jpg";
import '../styles/bootstrap/css/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import NameForm from "./Userform";
//import LoginForm from "./Loginform";


class About extends Component {
  render() {
    return (
      <div className="form-container">
                <h2>About</h2>
                <p>Hello, my name is Eli Betancourt and i am using Java, Maven, MySql, AJAX, Spring,
                Jetty and React to run this simple application.
                When it comes to Spring , I have encorporated Spring Securtiy, MVC, and Data frameworks.</p>


              </div>

    );
  }
}

export default About;

