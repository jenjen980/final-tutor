import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavItem } from 'react-bootstrap'



 const Navbar = props => (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={
            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/register"
          className={
            window.location.pathname === "/register" ? "nav-link active" : "nav-link"
          }
        >
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/student"
          className={
            window.location.pathname === "/student" ? "nav-link active" : "nav-link"
          }
        >
          Students
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/tutor"
          className={
            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
          }
        >
          Tutors
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/logout"
          className={
            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
          }
        >
          Logout
        </Link>
      </li>
    </ul>
  );
  
  export default Navbar; 



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