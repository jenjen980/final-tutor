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


  componentDidMount(){
    this.getTutor();
  }


  getTutor = name => {
    API.getTutor(name).then(res =>{
      this.setState({
        name: "", about:"", image:"", instrument:"",
        selected: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

// handleTutorSelection = event =>{
//   const { name, selected}
// }

  // getTutor = name => {
  //   API.getTutor(name).then(res =>{
  //     this.setState({
  //       tutor: res.data.tutor
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // };
  
// need to post tutor
postTutor =() => {

};

// onTutorUpdate = () => {

//   const tUpdates = {
//   name: this.state.name,
//   about: this.state.about,
//   image: this.state.image,
//   instrument: this.state.instrument
//   }
// };

  tutorHandler(event) {
    event.preventDefault();
    event.persist();
    // if(this.state.clicked.indexOf(tutors) === 1){
    //   this.handleTutor
    // }
    alert(`Tutor: ${this.state.tutors.name}`);
    // this.setState({ tutors: [
    //   {name: " Guitar"},
    //   {name: " Violin"},
    //   {name: " Trumpet"}
    // ]});

    this.setState({
      eventValue: event.target.id
    })

    console.log(this.state)
  };

onClick(){
  
}
// handleTutor{
// // tutor has been selected
// };




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
        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[0].name}/>
        <p> Hello My name is.....</p>
        <img src={Guitar} alt="guitar" height="150px" width="220px"/>
        {/* {this.state.image === '' ? <Cloud onImageUpdate={this.onImageUpdate}/> : <img src={this.state.image}/>} */}
        <div><button id="Guitar" onClick={this.tutorHandler}>Choose Tutor</button></div>
        <br />
        </div>
      </div>

        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[1].name} Image=""/>
        <p> Hello My name is.....</p>
        <img src={Violin} alt="violin" height="150px" width="175px"/>
        <div><button id="Violin" onClick={this.tutorHandler}>Choose Tutor</button></div>
        <br />
        </div>
      </div>


        <div className="card" >
        <div className="img-container">
        <TutorCard name={this.state.tutors[2].name}/>
        <p> Hello My name is.....</p>
        <img src={Trumpet} alt="trumpet" height="150px" width="220px"/>
        <div><button id="Trumpet" onClick={this.tutorHandler}>Choose Tutor</button></div>
        </div>
       </div>
     </div> 
    );
  }
}

export default Students;