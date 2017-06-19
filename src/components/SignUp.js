import React, { Component } from 'react';
import '../styles/bootstrap/css/App.css';
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/bootstrap/css/bootstrap-theme.min.css';
import $ from 'jquery';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';



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


class SignUpForm extends React.Component {
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
//        this.setState({formValues});

  }

  handleSubmit(event) {
     event.preventDefault();
     console.log(this.state.formValues);


      // Submit form via jQuery/AJAX
      $.ajax({
        type: 'POST',
        url: 'http://localhost:7070/addUser',
        data: this.state.formValues
      })
      .done(function(data) {
        console.log('worked')
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });



//     console.log(this.state.formValues)

//     alert("Hello, " + this.state.formValues['nombre'] + " it is a pleasure to know that you are: "
//     + this.state.formValues['ethnic_value'] + " and you are " + this.state.formValues['age'] + " years old!" + "\nYour favorite song is "
//     + this.state.formValues['song']);
  }

  render() {
    return (

        <div className="form-container">
            <div><h1><u>Sign Up</u></h1>Enter your information</div>
            <br/>
            <Form horizontal onSubmit={this.handleSubmit}>

                <FormGroup controlId="formHorizontalText">
                  <Col componentClass={ControlLabel} sm={2}>Name:</Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Full Name" name="full_name" value={this.state.formValues['full_name']} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>


                <FormGroup controlId="formHorizontalText">
                  <Col componentClass={ControlLabel} sm={2}>Country:</Col>
                  <Col sm={8}>
                    <FormControl type="text" placeholder="Country" name="country" value={this.state.formValues['country']} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>


                <FormGroup controlId="formHorizontalNumber">
                              <Col componentClass={ControlLabel} sm={2}>Age:</Col>
                              <Col sm={8}>
                                <FormControl type="number" placeholder="Enter age" name="age" value={this.state.formValues['age']} onChange={this.handleChange}/>
                              </Col>
                            </FormGroup>

                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>Username:</Col>
                    <Col sm={8}>
                        <FormControl type="text" placeholder="Username" name="userName" value={this.state.formValues['userName']} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>



                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email:
                  </Col>
                  <Col sm={8}>
                    <FormControl type="email" placeholder="Email" name="email" value={this.state.formValues['email']} onChange={this.handleChange}/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password:
                  </Col>
                  <Col sm={8}>
                    <FormControl type="password" placeholder="Password" name="password" value={this.state.formValues['password']} onChange={this.handleChange}/>
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

export default SignUpForm;
