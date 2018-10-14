import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Background from '../AboutUs/background1.jpg';

import Calendar from "../Calendar/App.js";



// import 
// import "../AboutUs";

// const Hero = props => (
//   <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
//     {props.children}
//   </div>
// );

// export default Hero;

var image = {
  width: "100%",
  height: "300px",
  // scale: "50%",
  backgroundImage: "url(" + Background + ")"
}

const AboutUs = () => {
    return (
    <div>

    {/* <img src=""></img> */}
      <section style={image}>
        <h4 className="pic" style={{  }}>About Signature Music Teachers</h4>
      </section>
        <p style={{ textAlign: "center", color: "purple" }}>Signature Music Teachers was founded in October of 2018.
          The basis for Signture Music Teachers is to help students select a music tutor that is right for them.
          ADD MORE HERE....
        </p>
        {/* <Calendar /> */}

      </div>

    );
};


export default AboutUs;