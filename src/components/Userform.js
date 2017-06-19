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
        this.setState({formValues});

  }

  handleSubmit(event) {
     event.preventDefault();
     console.log(this.state.formValues);


      // Submit form via jQuery/AJAX
      $.ajax({
        type: 'POST',
        url: 'http://localhost:7070/addPerson',
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
        <Form horizontal onSubmit={this.handleSubmit}>

            <FormGroup controlId="formHorizontalText">
              <Col componentClass={ControlLabel} sm={2}>Name:</Col>
              <Col md={7}>
                <FormControl type="text" placeholder="Enter your name" name="name" value={this.state.formValues['name']} onChange={this.handleChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalText">
              <Col componentClass={ControlLabel} sm={2}>Ethnicity:</Col>
              <Col md={7}>
                <FormControl type="text" placeholder="Ethnicity" name="ethnicity" value={this.state.formValues['ethnicity']} onChange={this.handleChange}/>
              </Col>
            </FormGroup>


            <FormGroup controlId="formHorizontalNumber">
                          <Col componentClass={ControlLabel} sm={2}>Age:</Col>
                          <Col md={7}>
                            <FormControl type="number" placeholder="Enter age" name="age" value={this.state.formValues['age']} onChange={this.handleChange}/>
                          </Col>
                        </FormGroup>

            <FormGroup controlId="formHorizontalNumber">
                <Col componentClass={ControlLabel} sm={2}>Song:</Col>
                <Col md={7}>
                    <FormControl type="text" placeholder="Song" name="song" value={this.state.formValues['song']} onChange={this.handleChange}/>
                </Col>
            </FormGroup>

            <input type="submit" value="submit"/>
         </Form>
    </div>
    );
  }
}

export default SignUpForm;
