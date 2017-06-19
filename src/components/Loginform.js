import React, { Component } from 'react';
import "../styles/bootstrap/css/App.css";
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';


import $ from 'jquery';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Checkbox } from 'react-bootstrap';



function NameEntry(props) {
  const display = (
    <h1>Your name is: {props.name}</h1>

  );

  return (
    <div>
      {display}
    </div>
  );
}


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        formValues: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;
        formValues[name] = value;
        this.setState({formValues});

  }
//
  handleSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.formValues);
//
//
//      // Submit form via jQuery/AJAX
//      $.ajax({
//        type: 'POST',
//        url: 'http://localhost:7070/j_spring_security_check',
//        dataType: "json",
//        data: this.state.formValues
//      })
//      .done(function(data) {
//        console.log('worked')
//        location.href = "http://localhost:3000/about";
//      })
//      .fail(function(output, status, jqXhr) {
//         alert(jqXhr.getResponseHeader());
//
//
//      });
  }



  render() {
    return (

        <div className="form-container">
            <div><h1><u>Log In</u></h1>Enter required credentials</div>
            <br/>
            <Form horizontal action="http://localhost:7070/j_spring_security_check" method="POST">

                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>Username:</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Username" name="j_username" value={this.state.formValues['j_username']} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>



                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password:
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" name="j_password" value={this.state.formValues['j_password']} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>


                <FormGroup>
                  <Col smOffset={2} sm={8}>
                    <input type="submit" value="Sign Up"/>

                  </Col>
                </FormGroup>
              </Form>
        </div>









    );
  }
}

export default LoginForm;

