import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./login.css";
import axios from 'axios';



class Login extends Component {
    constructor(props){
      super(props);
        this.state = {
            emailValue: "",
            passwordValue: ""
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submit = this.submit.bind(this);
        this.register = this.submit.bind(this);
    }
    handleEmail(event){

        this.setState({ emailValue: event.target.value})
        console.log(this.state.emailValue);

    }
    handlePassword(event) {
        this.setState({ passwordValue: event.target.value})
        console.log(this.state.passwordValue);
    }
    submit() { 
        // Send the email value and password --
        let userInfo = {
          username: this.state.emailValue,
          password: this.state.passwordValue
        }
        axios.post('/user/login', userInfo )
        .then(res => {
          console.log(res);
          console.log(res.data);
          if(res.data.isUser){
            console.log("User is logged in")
            this.props.history.push('/student');
          }
        }) 
        }



  render() {
    return (
      // <div style={{ textAlign: 'center', backgroundColor: "#999", width: "1000px", minHeight: "200px"}}>
      <div>
        <h1 className="header">Please enter your email and password</h1>
        <div className="login">
             <input value={this.state.emailValue} onChange = {this.handleEmail} placeholder="Email"/>
        </div>
        <div className="login">
             <input type="password" value={this.state.passwordValue} onChange= {this.handlePassword} placeholder ="password"/>
        </div>
        <br></br>
       
        <button className="submitButton" onClick={this.submit}>Login</button>
       
      </div>
    );
  }
}

export default Login;