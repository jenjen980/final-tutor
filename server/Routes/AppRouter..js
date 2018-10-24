import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



const AppRouter =() => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Homepage} exact={true}/>
      <Route path="/AboutUs" component={AboutUs}/> 
      <Route path="/Student" component={Student}/>
      <Route path="/Teacher" component={Teacher}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;