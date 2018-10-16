
import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/Error";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import {createBrowserHistory} from "history";

import Wrapper from "./Components/Wrapper";
import Clap from "./Components/Clap";

const history = createBrowserHistory();




class App extends Component {
  render() {
    return (
     
      <Router history={history}>

      <div>
      <NavBar />
      {/* <Clap /> */}
        <Switch>
          <Route path="/" component={AboutUs} exact/>
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
    
          <Route component={Error} />
        </Switch>

      </div>

          </Router>
      
    );
  }
}

export default App;
