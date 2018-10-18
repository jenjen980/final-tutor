import React from "react";
import "./StudentCard.css";
// import "../../Cloud/Cloud.js";
import Calendar from "../Calendar/App";
// import Cloud from ".././Cloud";


const StudentCard = props => {
    
    return <p> Instrument:{props.name}</p>

};
//   <div className="card"
//   value={props.id}
//   onClick={() => props.handleClick(props.id)}>
    // <div className="img-container">
//     <p>
//         This is a placeholder for now..we
//          need to put a tutor here
//     </p>
    
//     {/* <Cloud /> */}
//     {/* <p> Select a time to reserve this tutor */}
//     {/* </p> */}
//      {/* <Calendar /> */}

//       <img className = "imgclass" alt={props.name} src={props.image}/>
//     </div>
//   </div>
// );


export default StudentCard;