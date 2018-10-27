import React from 'react';
import "./NavBar.css";
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {

 state ={}


 logOut = (e) =>{
   e.preventDefault

   axios.get('http://localhost:3001/user/logout').then(res => {
     console.log(res);
     this.props.history.push('/');
   })
 }

 render(){
   return(
 
<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Signature Music Teachers</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="/">Home</a>
        <a className="p-2 text-dark" href="/contact">Contact</a>
        <a className="p-2 text-dark" href="/register">Register</a>
        <a className="p-2 text-dark" href="/student">Students</a>
        <a className="p-2 text-dark" href="/tutor">Tutors</a>
      </nav>
      <a className="btn btn-outline-primary" href="/login">Login</a>
      <a className="btn btn-outline-primary" onClick={this.logOut} href="/">Logout</a>
    </div>
  
    );
  }
};
export default withRouter(Navbar);
