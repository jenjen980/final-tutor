import React from "react";
import "./TutorCard.css";
import "../Cloud/Cloud.js";




const TutorCard = props => {


        return (
            // <div className="card" >
            <div className="img-container"> 
            <p> Instrument:{props.name}</p>
             {/* <p> name={this.state.tutors[0].name}</p>  */}
         </div>

        )
    }

export default TutorCard;