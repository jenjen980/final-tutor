import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TutorCard from "../TutorCard";
import Calendar from "../Calendar/App";
import Cloud from "../Cloud";

import Guitar from "../TutorCard/images/guitar.jpg";
import Violin from "../TutorCard/images/violin.jpg";
import Trumpet from "../TutorCard/images/trumpet.jpg";



class Students extends Component {
  state ={
    tutors: [
      {name: " Guitar"},
      {name: " Violin"},
      {name: " Trumpet"}
    ]
  }

  tutorHandler = () => {
    console.log("was clicked");
    //fix this to select the tutor clicked
    // this.setState({})
  }
//can put states etc here for component

  render() {
    return (
    <div>
        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[0].name} Image=""/>
        <img src={Guitar} alt="guitar" height="150px" width="220px"/>
        <li><button onClick={this.tutorHandler}>Choose Tutor</button></li>
        <br />
        </div>
      </div>

        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[1].name} Image=""/>
        <img src={Violin} alt="violin" height="150px" width="175px"/>
        <li><button onClick={this.tutorHandler}>Choose Tutor</button></li>
        <br />
        </div>
      </div>


        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[2].name}/>
        <img src={Trumpet} alt="trumpet" height="150px" width="220px"/>
        <li><button onClick={this.tutorHandler}>Choose Tutor</button></li>
        </div>
       </div>
     </div> 
    );
  }
}

export default Students;