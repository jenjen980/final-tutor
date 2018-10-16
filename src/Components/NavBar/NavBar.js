import React from 'react';
import "./NavBar.css";
// import { NavLink } from 'react-router-dom';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Parallax from "../../NNcomponents/Parallax/Parallax.jsx";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Search from "@material-ui/icons/Search";
// import Email from "@material-ui/icons/Email";
// import Face from "@material-ui/icons/Face";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Explore from "@material-ui/icons/Explore";
// core components
// import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "../../NNcomponents/Grid/GridItem.jsx";
import Header from "../../NNcomponents/Header/Header.jsx";
// import CustomInput from "../../NNcomponents/CustomInput/CustomInput.jsx";
// import CustomDropdown from "../../NNcomponents/CustomDropdown/CustomDropdown.jsx";
import Button from "../../NNcomponents/CustomButtons/Button.jsx";

import navbarsStyle from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle";
//assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

// import image from "assets/img/bg.jpg";
// import profileImage from "assets/img/faces/avatar.jpg";


// const Navbar = () => {
//     return (

//     <div className="navi">
//           <ul>
//             <NavLink to="/">Home  </NavLink>
            
//             <NavLink to="/contact">Contact  </NavLink>
            
//             <NavLink to="/login">Login  </NavLink>
            
//             <NavLink to="/register">Register     </NavLink>
//           </ul> 
//         </div>
    // </div>







        // // <NavLink to="/">AboutUs</NavLink>
        // <div>
        //     {/* <ul id="nav-mobile" class="sidenav"> */}
        //         <NavLink to="/">AboutUs</NavLink>
        //         <NavLink to="/contact">Contact</NavLink>
        //         {/* <NavLink to="/teacher">Teacher Page</NavLink>
        //         <NavLink to="/student">Student Page</NavLink> */}
        //     {/* </ul>
        //     <a NavLink to="" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        // </div>
 
//     );
// }




// export default Navbar;
class SectionNavbars extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        
        <div className={classes.section}>
          {/* <div className={classes.container}> */}
          <GridItem xs={12}>
          <Header
          
              brand="Navbar with profile"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      About us
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Wishlist
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.registerNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                      round
                    >
                      Register
                    </Button>
                  </ListItem>
                </List>
                
               }
               />
               
             </GridItem>
             
             

           
              
           
          </div>
          
);
}
}

export default withStyles(navbarsStyle)(SectionNavbars);
