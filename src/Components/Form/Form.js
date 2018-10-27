
import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";



class Form extends Component {
  constructor(props){
    super(props);
  // Setting the component's initial state
  this.state = {
    firstNameValue: '',
    lastNameValue: '',
    emailValue: '',
    messageValue: '',

  };


  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleFirstName = this.handleFirstName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
}

handleFirstName(event){
  this.setState({ firstNameValue: event.target.value})
  console.log(this.state.firstNameValue || '');
}

handleLastName(event){
  this.setState({ lastNameValue: event.target.value})
  console.log(this.state.lastNameValue || '');
}

handleEmail(event){
  this.setState({ emailValue: event.target.value})
  console.log(this.state.emailValue || '');
}

handleMessage = (event) => {
  console.log("message", event.target.value);
  this.setState({ messageValue: event.target.value})
  console.log(this.state.messageValue || '');
}

submit(event) {
  event.preventDefault()
  console.log('handleSubmit')

  console.log(this.firstName);
  console.log(this.lastName);
  console.log(this.email);
  console.log(this.message);

  axios
    .post('http://localhost:3001/form', {
      firstName: this.state.firstNameValue,
      lastName: this.state.lastNameValue,
      email: this.state.emailNameValue,
      message: this.state.messageValue
})
  .then(response => {
    console.log("form response: ")
    console.log(response)
      if(response.status === 200){
    }
  }).catch(error => {
    console.log("error: ")
    console.log(error);
  })
}

  handleFormSubmit(event){
    event.preventDefault();
   console.log('handleSubmit');
   console.log(this.firstName);
   console.log(this.lastName);
   console.log(this.email);
   console.log(this.message);
 
   axios
     .post('http://localhost:3001/form', {
       firstName: this.state.firstNameValue,
       lastName: this.state.lastNameValue,
       email: this.state.emailNameValue,
       message: this.state.messageValue
 })
   .then(response => {
     console.log("form response: ")
     console.log(response)
   }).catch(error => {
     console.log("error: ")
     console.log(error);
   })
 }




  render() {
    return (
      <div>
        
        <p>
          If you have any questions please contact us  
        </p>
        <form className="form" method="POST">
          <input
            ref={(input) => {this.firstName = input;}}
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleFirstName}
            type="text"
            placeholder="First Name"
          />
          <input
            ref={(input) => {this.lastName = input;}}
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleLastName}
            type="text"
            placeholder="Last Name"
          />
          <input
            ref={(input) => {this.email = input;}}
            value={this.state.email}
            name="email"
            onChange={this.handleEmail}
            type="text"
            placeholder="Email"
          />
          <input
            ref={(input) => {this.message = input;}}
            value={this.state.message}
            name="message"
            onChange={this.handleMessage}
            type="textarea"
            placeholder="Message"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);