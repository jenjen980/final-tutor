import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



//THESE ARE ROUTES FOR WHEN WE GET THE COMPONENTS SET UP
//Links will need to be created for all route const. this enables the route to run client side

// const Homepage = () => (
//   <div>
//     This is the Homepage component
      // <Link to="/">Homepage</Link>
//   </div>
// );

// const NotFoundPage = () => (
//   <div>
//     OOPS! 404! <Link to="/">Go Home</Link>
//   </div>
// );

//component names might change based on what they are named

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