import React from 'react';
import "./Contact.css";
import Background from '../ContactUs/background2.jpg';
import Form from "../Form";


var image = {
  width: "100%",
  height: "300px",
  scale: "50%",
  backgroundImage: "url(" + Background + ")"

}

const Contact = props => {
    return (
       <div>
        <section style={image}>
         <h4 style={{ padding: "50px 50px", textAlign: "center", color: "white", fontSize: "26px"}}>Contact Us</h4>
         </section>
         <Form />
       </div>


    );
};


export default Contact;