import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { withRouter } from "react-router-dom";



// class Navbar extends React.Component {

//  state ={}


//  logOut = (e) =>{
//    e.preventDefault

//    axios.get('http://localhost:3001/user/logout').then(res => {
//      console.log(res);
//      this.props.history.push('/');
//    })


//  }

//  render(){
//    return(

//      <div className="navbar-nav">
//      <div className="nav-item">
//        <Link
//          to="/"
//          className={
//            window.location.pathname === "/" ? "nav-link active" : "nav-link"
//          }
//        >
//          Home
//        </Link>
//      </div>
//      <div className="nav-item">
//        <Link
//          to="/contact"
//          className={
//            window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
//          }
//        >
//          Contact
//        </Link>
//      </div>
//      <div className="nav-item">
//        <Link
//          to="/login"
//          className={
//            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
//          }
//        >
//          Login
//        </Link>
//      </div>
//      <div className="nav-item">
//        <Link
//          to="/register"
//          className={
//            window.location.pathname === "/register" ? "nav-link active" : "nav-link"
//          }
//        >
//          Register
//        </Link>
//      </div>
//      <div className="nav-item">
//        <Link
//          to="/student"
//          className={
//            window.location.pathname === "/student" ? "nav-link active" : "nav-link"
//          }
//        >
//          Students
//        </Link>
//      </div>
//      <div className="nav-item">
//        <Link
//          to="/tutor"
//          className={
//            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
//          }
//        >
//          Tutors
//        </Link>
//      </div>
//      <div className="nav-item">
//        <button
//          onClick={this.logOut}
//          to=""
//          className={
//            window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
//          }
//        >
//          Logout
//        </button>
//      </div>
//    </div>

//    )
//  }

//        }

//  export default withRouter(Navbar);





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
         {/* <NavLink to="/"> Home  </NavLink>
         <NavLink to="/contact">Contact  </NavLink>
         <NavLink to="/register">Register </NavLink>
         <NavLink to="/student">Students </NavLink>
         <NavLink to="/tutor">Tutors  </NavLink>
         <NavLink to="/logout">Logout </NavLink> */}
        <a className="p-2 text-dark" href="/">Home</a>
        <a className="p-2 text-dark" href="/contact">Contact</a>
        <a className="p-2 text-dark" href="/register">Register</a>
        <a className="p-2 text-dark" href="/student">Students</a>
        <a className="p-2 text-dark" href="/tutor">Tutors</a>
        {/* <a className="p-2 text-dark" href="#">Logout</a> */}
      </nav>
      <a className="btn btn-outline-primary" href="/login">Login</a>
      <a className="btn btn-outline-primary" onClick={this.logOut} href="/tutor">Logout</a>
      {/* <a className="btn btn-outline-primary" href="#">Login</a> */}
    </div>
  
);
 }
};
export default Navbar;

//  const Navbar = props => (
//     <ul classNameName="navbar-nav">
//       <li classNameName="nav">
//         <Link
//           to="/"
//           classNameName={
//             window.location.pathname === "/" ? "nav-link active" : "nav-link"
            
//           }
//         >
//           Home
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/contact"
//           classNameName={
//             window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
//           }
//         >
//           Contact
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/login"
//           classNameName={
//             window.location.pathname === "/login" ? "nav-link active" : "nav-link"
//           }
//         >
//           Login
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/register"
//           classNameName={
//             window.location.pathname === "/register" ? "nav-link active" : "nav-link"
//           }
//         >
//           Register
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/student"
//           classNameName={
//             window.location.pathname === "/student" ? "nav-link active" : "nav-link"
//           }
//         >
//           Students
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/tutor"
//           classNameName={
//             window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
//           }
//         >
//           Tutors
//         </Link>
//       </li>
//       <li classNameName="nav-item">
//         <Link
//           to="/logout"
//           classNameName={
//             window.location.pathname === "/tutor" ? "nav-link active" : "nav-link"
//           }
//         >
//           Logout
//         </Link>
//       </li>
//     </ul>
//   );
  
//   export default Navbar; 

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

 const Navbar = props => (
    <ul className="navbar-nav">
      <li className="nav">

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




// className Navbar extends Component {
//     render() {
//     return (
//         <nav>

//             <div classNameName="navi">
//           <ul>
//           {/* <a classNameName="left name"/>
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