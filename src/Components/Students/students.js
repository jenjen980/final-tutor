import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TutorCard from "../TutorCard";
import Calendar from "../Calendar/App";
import Cloud from "../Cloud";

import Guitar from "../TutorCard/images/guitar.jpg";
import Violin from "../TutorCard/images/violin.jpg";
import Trumpet from "../TutorCard/images/trumpet.jpg";

import API from "../../utils/API";



class Students extends Component {
    constructor(props){
    super(props);

  this.state ={
    name: "",
    about:"",
    image: "",
    instrument: "",
    tutors: [
      {name: " Guitar"},
      {name: " Violin"},
      {name: " Trumpet"}
    ],
    selected: [],
    eventValue: "test"
  };

  this.tutorHandler = this.tutorHandler.bind(this);
  }


  // componentDidMount(){
  //   this.getTutor();
  // }


  getTutor = () => {
    API.getTutor().then(res =>{
      this.setState({
        name: "", about:"", image:"", instrument:"",
        selected: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

postTutor =() => {

};

  tutorHandler(event) {
    event.preventDefault();
    event.persist();
    alert(`Tutor: ${this.state.tutors.name}`);

    this.setState({
      eventValue: event.target.id
    })

    console.log(this.state)
  };

onClick(){
  
}

  onImageUpdate = (url) => {
    this.setState({
      image: url,
      updated: true
    })
  };
//can put states etc here for component


//TAKE button id and pass that value to the tutor page for the tutor selected


  render() {
    return (
    <div>
      <div className="row">
        <div className="col-lg-4" >
        <div className="item column-1">
        {/* <TutorCard name={this.state.tutors[0].name}/> */}
        {/* <p> My name is Dave. Dave has taught for 10 years.</p> */}
        <img src={Guitar} alt="guitar" height="150px" width="220px"/>
        <h4 className="item-name">
        <span className="tutor-name">Dave</span>
        </h4>
        <div className="text">
        <p>I have been teaching guitar for 10 years.</p>
        </div>
        {/* {this.state.image === '' ? <Cloud onImageUpdate={this.onImageUpdate}/> : <img src={this.state.image}/>} */}
        <div><button id="Guitar" onClick={this.tutorHandler}>Choose Tutor</button></div>
        <br />
        </div>
      </div>
      <Calendar />
    </div>

      <div className="row">
        <div className="col-lg-4" >
        <div className="item column-2">
        {/* <TutorCard name={this.state.tutors[1].name} Image=""/> */}
        <p> My name is Amanda. I have taught for 5 years.</p>
        <img src={Violin} alt="violin" height="150px" width="165px"/>
        <div><button id="Violin" onClick={this.tutorHandler}>Choose Tutor</button></div>
        <br />
        </div>
      </div>
        <Calendar />
      </div>


      <div>
        <div className="items-row cols-3 row-0" >
        <div className="item column-3">
        <TutorCard name={this.state.tutors[2].name}/>
        <p> My name is Mark. I have taught for 2 years.</p>
        <img src={Trumpet} alt="trumpet" height="150px" width="220px"/>
        <div><button id="Trumpet" onClick={this.tutorHandler}>Choose Tutor</button></div>
        <br />
        </div>
       </div>
        <Calendar />
     </div> 
    </div>
    );
  }
}

export default Students;


