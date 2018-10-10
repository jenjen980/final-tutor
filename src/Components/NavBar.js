import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (

        // <NavLink to="/">AboutUs</NavLink>
        <div>
            {/* <ul id="nav-mobile" class="sidenav"> */}
                <NavLink to="/">AboutUs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {/* <NavLink to="/teacher">Teacher Page</NavLink>
                <NavLink to="/student">Student Page</NavLink> */}
            {/* </ul>
            <a NavLink to="" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        </div>
 
    );
}

export default Navbar;
