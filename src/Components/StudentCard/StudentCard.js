import React from "react";
import "./StudentCard.css";
// import "../../Cloud/Cloud.js";
import Calendar from "../Calendar/App";
// import Cloud from ".././Cloud";


const StudentCard = props => {
    
    
    return (
    <div class="card">
        <p> Instrument:{props.name}</p>
    </div>
    )
};

export default StudentCard;