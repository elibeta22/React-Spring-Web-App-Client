import React, { Component } from 'react';
import earth_logo from "../Planet_Earth.jpg";
import '../styles/bootstrap/css/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import NameForm from "./Userform";
//import LoginForm from "./Loginform";


class Home extends Component {
  render() {
    return (
      <div className="form-container">
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
                          <input type="submit" value="Login"/>

              </div>

    );
  }
}

export default Home;

