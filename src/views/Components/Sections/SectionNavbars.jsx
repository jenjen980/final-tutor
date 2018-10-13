import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
           
            {/* this is a menu/login bar we might (or not) */}
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Menu choices let me know which of those you want </h3>
              </div>
              <Header
                brand="Icons"
                color="info"
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Email className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button color="transparent" className={classes.navLink}>
                        <Face className={classes.icons} />
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        left
                        hoverColor="info"
                        dropdownHeader="Dropdown Header"
                        buttonIcon="settings"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          {/* do not delete this bar */}
            <Header
              brand="Navbar with notifications"
              color="dark"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Home
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      My classes/students
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                    >
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Dropdown Header"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />

          </div>
        </div>
      
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
