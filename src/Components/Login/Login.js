import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components

// import axios from 'axios';
import axios from 'axios';
import Footer from "../../NNcomponents/Footer/Footer.jsx";
import GridContainer from "../../NNcomponents/Grid/GridContainer.jsx";
import GridItem from "../../NNcomponents/Grid/GridItem.jsx";
import Button from "../../NNcomponents/CustomButtons/Button.jsx";
import Card from "../../NNcomponents/Card/Card.jsx";
import CardBody from "../../NNcomponents/Card/CardBody.jsx";
import CardFooter from "../../NNcomponents/Card/CardFooter.jsx";
import CustomInput from "../../NNcomponents/CustomInput/CustomInput.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
// import { url } from "inspector";
// import image from "";

class Login extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      emailValue: "",
      passwordValue: "",

    };
  

  this.handleEmail = this.handleEmail.bind(this);
  this.handlePasword = this.handlePasword.bind(this);
  this.submit = this.submit.bind(this);
  this.register = this.submit.bind(this);
  };
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleEmail(event){

    this.setState({ emailValue: event.target.value})
    console.log(this.state.emailValue);

}
handlePasword(event) {
    this.setState({ passwordValue: event.target.value})
    console.log(this.state.passwordValue);
}
submit() { 
    // Send the email value and password --
    let userInfo = {
      username: this.state.emailValue,
      password: this.state.passwordValue
    }
    axios.post('/login', { userInfo })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}


  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>

        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "a.jpg",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <p className={classes.divider}>LOGIN</p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        onChange = {this.handleEmail}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        onChange= {this.handlePasword}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    
                      <Button onClick={this.submit} simple color="warning" size="lg">
                      
                        Get started
                      </Button>

                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);










