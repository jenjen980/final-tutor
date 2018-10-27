
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Contact from "./Components/ContactUs/Contact";
import Error from "./Components/Error";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/NavBar";
import Tutors from "./Components/Tutors";
import {createBrowserHistory} from "history";
import Students from "./Components/Students";

const history = createBrowserHistory();



const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/student" component={Students} />
      <Route exact path="/tutor" component={Tutors} />
      <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default App;