import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Navbar, Nav, NavItem } from 'react-bootstrap'
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

      <div className="navbar-nav">
      <div className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/contact"
          className={
            window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/login"
          className={
            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/register"
          className={
            window.location.pathname === "/register" ? "nav-link active" : "nav-link"
          }
        >
          Register
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/student"
          className={
            window.location.pathname === "/student" ? "nav-link active" : "nav-link"
          }
        >
          Students
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/tutor"
          className={
            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
          }
        >
          Tutors
        </Link>
      </div>
      <div className="nav-item">
        <button
          onClick={this.logOut}
          to=""
          className={
            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
          }
        >
          Logout
        </button>
      </div>
    </div>

    )
  }
  
        }
  
  export default withRouter(Navbar); 



// class Navbar extends Component {
//     render() {
//     return (
//         <nav>

//             <div className="navi">
//           <ul>
//           {/* <a className="left name"/>
//           Signature Music Teachers */}

//             <NavLink to="/">Home  </NavLink>
            
//             <NavLink to="/contact">Contact  </NavLink>
            
//             <NavLink to="/login">Login  </NavLink>
            
//             <NavLink to="/register">Register     </NavLink>

//              <NavLink to="/student">Students     </NavLink>

//              <NavLink to="/tutor">Tutors     </NavLink>
           
//           </ul> 
//         </div>
//     </nav>
//         );
//     }
// }
// export default Navbar;