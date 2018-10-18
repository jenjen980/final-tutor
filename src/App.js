
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/Error";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import Wrapper from "./Components/Wrapper";
import Clap from "./Components/Clap";

import Student from "./Components/Students";
import Tutors from "./Components/Tutors";




class App extends Component {
  render() {
    return (
     
      <BrowserRouter>

      <div>
      <NavBar />
      {/* <Clap /> */}
        <Switch>
          <Route path="/" component={AboutUs} exact/>
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/student" component={Student} />
          <Route path="/tutor" component={Tutors} />
          <Route component={Error} />
        </Switch>

      </div>

          </BrowserRouter>
      
    );
  }
}

export default App;
