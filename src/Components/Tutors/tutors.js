import React, { Component } from "react";
import "./tutors.css";
import Cloud from "../Cloud";
import Fetch from "../Fetch";


class Tutors extends Component {
    render() {
     return (
    <div>
    <p>
     This is the TUTOR page
    </p>

    <p>
        Availability
    </p>
    
    <Cloud />
    
    {/* <Image
     type="fetch"
     publicId="https://res.cloudinary.com/dm1qubnlu/image/upload/v1538512505/tutor/xosg4qa5tqthemcwcc5u.jpg"
     Transformation gravity="face" width="150" height="150" crop="thumb"
     // publicId="https://cloudinary.com/images/logo.png"
     fetch-format="auto"
     quality="auto"
    /> */}
    

    </div>
     );
    }
  }
  
  export default Tutors;
