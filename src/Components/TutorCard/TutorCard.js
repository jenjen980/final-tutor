import React from "react";
import "./TutorCard.css";
// import "../Cloud/Cloud.js";
import Calendar from "../Calendar/App";
import {Grid, Row, Col} from "react-bootstrap";



const TutorCard = props => {

    // state ={
    //     tutors: [
    //       {name: " Guitar"},
    //       {name: " Violin"},
    //       {name: " Trumpet"}
    //     ]
    //   }
    
        return (
        <div>
            <p> Instrument:{props.name}</p>
            {/* <p> name={this.state.tutors[0].name}</p> */}
        </div>
    //  return <p> Instrument:{props.name}</p>
    // return <p> name={this.state.tutors[0].name}</p> 
        )
    }

export default TutorCard;