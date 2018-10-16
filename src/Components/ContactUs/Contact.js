import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Background from '../ContactUs/background2.jpg';

var image = {
  width: "100%",
  height: "300px",
  scale: "50%",
  backgroundImage: "url(" + Background + ")"
}

const Contact = () => {
    return (

       <div>
        <section style={image}>
         <h4 style={{ padding: "50px 50px", textAlign: "center", color: "white", fontSize: "26px"}}>Contact Us</h4>
         </section>
         
         <p style={{ textAlign: "center", color: "purple" }}>ADD HERE</p>
       </div>


    );
};


export default Contact;