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



class AboutUS extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
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



export default withStyles(landingPageStyle)(AboutUS);
