import React from 'react';
import Background from '../AboutUs/background1.jpg';


var image = {
  width: "100%",
  height: "300px",
  backgroundImage: "url(" + Background + ")"
}

const AboutUs = () => {
    return (
    <div>

      <section style={image}>
        <h4 className="pic" ></h4>
      </section>
        <p style={{ textAlign: "center", color: "purple" }}>Signature Music Teachers was founded in October of 2018.
          The basis for Signture Music Teachers is to help students select a music tutor that is right for them.
        </p>


      </div>

    );
};


export default AboutUs;