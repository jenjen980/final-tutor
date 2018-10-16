import React from 'react';
// import Header from "../../NNcomponents/Header/Header";
import Footer from "../../NNcomponents/Footer/Footer.jsx";
import GridContainer from "../../NNcomponents/Grid/GridContainer.jsx";
import GridItem from "../../NNcomponents/Grid/GridItem.jsx";
// import HeaderLinks from "../../NNcomponents/Header/HeaderLinks.jsx";
import Parallax from "../../NNcomponents/Parallax/Parallax.jsx";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import NavBar from '../NavBar';

// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import Background from '../AboutUs/background1.jpg';
// import "../AboutUs";

// const Hero = props => (
//   <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
//     {props.children}
//   </div>
// );

// export default Hero;

// var image = {
//   width: "100%",
//   height: "300px",
//   scale: "50%",
//   backgroundImage: "url(" + Background + ")"
// }

// const AboutUs = () => {
//     return (
//     <div>

//     {/* <img src=""></img> */}
//       <section style={image}>
//         <h4 style={{ padding: "50px 50px", textAlign: "center", color: "black", fontSize: "26px", backgroundImage: "../AboutUs/background1.jpg" }}>About Signature Music Teachers</h4>
//       </section>
//         <p style={{ textAlign: "center", color: "purple" }}>Signature Music Teachers was founded in October of 2018.
//           The basis for Signture Music Teachers is to help students select a music tutor that is right for them.
//           ADD MORE HERE....
//         </p>
//       </div>

//     );
// };


// export default AboutUs;


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        {/* <Header
          color="gray"
          routes={dashboardRoutes}
          brand="Signature Music Teacher"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 20,
            color: "white"
          }}
          {...rest} */}
        

          <Parallax filter image={require("assets/img/background2.jpg")}> 
          <div className={classes.container}>
        
       
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Welcome! Your Music Journey starts here</h1>
                <h4>
                Music is the strongest form of magic
                </h4>
                <br />
                 </GridItem>
            </GridContainer>
           </div>
          </Parallax> 
         <Footer />
         </div>
        );
      };
};


export default withStyles(landingPageStyle)(LandingPage);