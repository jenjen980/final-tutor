import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (

    <div className="navi">
          <ul>
            <NavLink to="/">Home  </NavLink>
            
            <NavLink to="/contact">Contact  </NavLink>
            
            <NavLink to="/login">Login  </NavLink>
            
            <NavLink to="/register">Register     </NavLink>

             <NavLink to="/student">Students     </NavLink>

             <NavLink to="/tutor">Tutors     </NavLink>
          </ul> 
        </div>

    );
}

export default Navbar;