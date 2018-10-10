import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import NavBar from "./Components/NavBar";



class App extends Component {
  render() {
    return (

      <BrowserRouter>

      <div>

      <NavBar />

        <Switch>
          <Route path="/" component={AboutUs} exact/>
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>

      </div>

          </BrowserRouter>
    );
  }
}

export default App;
