import React, { Component } from 'react';
import "./register.css";
import axios from 'axios';
// import Select from 'react-select';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: Black;
`;

// const Input = styled.input`
// margin: 0 auto;
// float: none;
// width: 25%;
// padding: 10px;
// border-radius: 10px;
// box-shadow: 0 3px 6px #999, 0 3px 6px #999;
//   `;

class Register extends Component {
    constructor(props){
      super(props);
        this.state = {
            fistNameValue: '',
            lastNameValue: '',
            emailValue: '',
            role: 'tutor, student',
            passwordValue: '',
        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handlePasword = this.handlePasword.bind(this);
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
    handleRole(event){
        this.setState({ roleValue: event.target.value})
        console.log(this.state.roleValue || '');

    }
    handlePasword(event) {
        this.setState({ passwordValue: event.target.value})
        console.log(this.state.passwordValue || '');
    }
    submit(event) {
      event.preventDefault()
      console.log('handleSubmit')

      axios
          .post('http://localhost:3001/user/register', {
          firstName: this.state.firstNameValue,
          lastName: this.state.lastNameValue,
          username: this.state.emailValue,
          role: this.state.roleValue,
          password: this.state.passwordValue
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {

                // update the state to redirect to tutor or student page
                if( response.data.user.role == "Student"){
                    console.log("in redirect");
                    this.props.history.push('/student');
                }
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
}
// this should go above in different areas

// const options = [
//     { value: 'Tutor', label: 'Tutor' },
//     { value: 'Student', label: 'Student' }, 
// ];

// class App extends React.Component {
//     state = {
//         selectedOption: null,
//     }
//     handleChange = (selectedOption) => {
//         this.setState({ selectedOption });
//         console.log(`Option Selected: `, selectedOption);
//     }

  render() {
    // const { selectedOption} = this.state;
    return (
      <div >
       
        <Title className="header">Enter your information below to Register</Title>
        <div className="info">
             <input value={this.state.firstNameValue} onChange = {this.handleFirstName} placeholder="First Name"/>
        </div>
        <div className="info">
             <input value={this.state.lastNameValue} onChange = {this.handleLastName} placeholder="Last Name"/>
        </div>
        <div className="info">
             <input value={this.state.emailValue} onChange = {this.handleEmail} placeholder="email"/>
        </div>
        <div className="info">
             <input value={this.state.roleValue} onChange = {this.handleRole} placeholder="Tutor or Student"/>
        {/* <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        /> */}
        
        </div>
        <div className="info">
             <input type="password" value={this.state.passwordValue} onChange= {this.handlePasword} placeholder ="password"/>
        </div>
        <br></br>
        <button className="submitButton" onClick={this.submit}>Register</button>
       
      </div>
    );
  }
}


export default withRouter(Register);