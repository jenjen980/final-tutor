import React, { Component } from 'react';
import axios from 'axios';



class Register extends Component {
    constructor(props){
      super(props);
        this.state = {
            emailValue: "",
            passwordValue: ""
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePasword = this.handlePasword.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleEmail(event){

        this.setState({ emailValue: event.target.value})
        console.log(this.state.emailValue);

    }
    handlePasword(event) {
        this.setState({ passwordValue: event.target.value})
        console.log(this.state.passwordValue);
    }
    submit() {
        // Make a POST with Axiors to /Test  call to the back end 
        // Send the email value and password --
        let userInfo = {
          username: this.state.emailValue,
          password: this.state.passwordValue
        }
        axios.post('/register', { userInfo })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
       
       
    }
  render() {
    return (
      <div >
       
        <h1>This is the Register Page</h1>
        <div>
             <input value={this.state.emailValue} onChange = {this.handleEmail} placeholder="Email"/>
        </div>
        <div>
             <input value={this.state.passwordValue} onChange= {this.handlePasword} placeholder ="password"/>
        </div>
        <button onClick={this.submit}>Submit</button>
       
      </div>
    );
  }
}

export default Register;