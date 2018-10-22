
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
    // firstName: "",
    // lastName: "",
    // email: "",
    // message: ""
  }
  // ,

  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  // };


  this.handleFirstName = this.handleFirstName.bind(this);
  this.handleLastName = this.handleLastName.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  // this.handleMessage = this.handleMesssage.bind(this);
  this.submit = this.submit.bind(this);
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

handleMessage(event){
  this.setState({ messageValue: event.target.value})
  console.log(this.state.messageValue || '');
}

submit(event) {
  event.preventDefault()
  console.log('handleSubmit')

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
    //   //redirect to homepage
    //   if(response.data.use.)
    }
  }).catch(error => {
    console.log("error: ")
    console.log(error);
  })
}


  // handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value} = event.target;
    // const { lastName} = event.target.value;
    // const { email} = event.target.value;
    // const { message} = event.target.value;
    

    // Updating the input's state
    // this.setState({
    //   [name]: value,
      // [lastName]: lastName,
      // [email]: email,
      // [message]: message,
  //   });
  // };

  // handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  //   alert(`Hello ${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.message}`);
  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     message: ""
  //   });
  // };




  render() {
    return (
      <div>
        
        <p>
          If you have any questions please contact us  
          {/* {this.state.firstName} {this.state.lastName}
          {this.state.email} {this.state.message} */}
        </p>
        <form className="form" method="POST">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);