import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import AppComponent from './App';
//import Welcome from './App';
//import NameForm from './App';
//import App from './App';
//import Header from './components/Header'
//import './index.css';
//import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Header from "./components/Header";
import Login from "./components/Loginform";
import App from "./components/App";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import fuck from "./components/fuck";

import { BrowserRouter as Router, Switch, Route, Link, IndexRoute } from 'react-router-dom';
import earth_logo from "./Planet_Earth.jpg";
import './styles/bootstrap/css/App.css';
import './styles/bootstrap/css/bootstrap.min.css';
import './styles/bootstrap/css/bootstrap-theme.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//class App extends Component{
//    render(){
//        return(
//            <Router history={browserHistory}>
//                <Route path="home" component="Root"/>
//
//
//                <IndexRoute component={Header}/>
//
//            </Router>
//        );
//    }
//}
//var Home = React.createClass({
//  render: function() {
//    return (<h1>Welcome to the Home Page</h1>);
//  }
//});


ReactDOM.render(
<Router>
  <div>
    <App>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/about" component={About}/>

    </App>

    <Route path="/fuck" component={fuck}/>

  </div>
</Router>


  ,
document.getElementById('root'));