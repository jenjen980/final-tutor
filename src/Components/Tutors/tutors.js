import React, { Component } from "react";
import "./tutors.css";
import Cloud from "../Cloud";
import Fetch from "../Fetch";
import Calendar from "../Calendar/App";
import {Jumbotron} from "react-bootstrap";
import {Image} from "react-bootstrap";

class Tutors extends Component {
    render() {
     return (

      <Jumbotron>

         <Image src="https://s3.amazonaws.com/musicindustryhowtoimages/wp-content/uploads/2018/04/23200023/private-music-teacher.jpg" rounded />


        <Jumbotron >
  <h1>Welcome Teachers</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
 

    <div>
        <img src={this.props.image} alt="" className="tutor-img circle responsive img" />
    <p>
     This is the TUTOR page
    </p>

    <p>
        Please upload your image so we can add you in the system
    </p>
    
    {/* <Cloud /> */}
    
     <Cloud
     type="fetch"
     publicId="https://res.cloudinary.com/dm1qubnlu/image/upload/v1538512505/tutor/xosg4qa5tqthemcwcc5u.jpg"
     Transformation gravity="face" width="150" height="150" crop="thumb"
     // publicId="https://cloudinary.com/images/logo.png"
     fetch-format="auto"
     quality="auto"
    /> 

    </div>
    </Jumbotron>
    </Jumbotron>
     );
    }
  }
  const background3 = "/images/background3.jpg";

const styles = {
    container: {
    backgroundImage: "/images/backgraound3.jpg"
  }
};
  
  export default Tutors;
 