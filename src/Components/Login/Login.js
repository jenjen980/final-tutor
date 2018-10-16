import React, { Component } from 'react';
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
        this.handlePasword = this.handlePasword.bind(this);
        this.submit = this.submit.bind(this);
        this.register = this.submit.bind(this);
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
        // Send the email value and password --
        let userInfo = {
          username: this.state.emailValue,
          password: this.state.passwordValue
        }
        axios.post('/login', { userInfo })
        .then(res => {
          console.log(res);
          console.log(res.data);
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
             <input value={this.state.passwordValue} onChange= {this.handlePasword} placeholder ="password"/>
        </div>
        <br></br>
        {/* <button onClick={this.register}>Register</button>  */}
        <button className="submitButton" onClick={this.submit}>Login</button>
       
      </div>
    );
  }
}

export default Login;